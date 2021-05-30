import { Arg, Authorized, Mutation, Resolver } from "type-graphql";
import { RolesEnum } from "../../types/enums";
import { EmailInputType, EmailType, EmailUpdateType } from "./emailTypes";
import { EmailService as es } from "./emailService";
import { create, fetchAllByFieldId, update } from "../Services/apiRepo";
import * as moment from "moment";
import { IResponseError } from "../../types/interfaces";

const collection = "emailSend";
export const checkEmailCount = (email: EmailType[]) => {
	if (email.length > 0 && !!email[0].count && email[0].count > 3 || email.length > 1) {
		return false;
	}

	if (email.length === 1 && !!email[0].count && email[0].count < 4 || email.length === 0) {
		return true;
	}
};

@Resolver(() => EmailType)
export class EmailResolver {
	@Authorized(RolesEnum.Admin, RolesEnum.AnonymousAuth)
	@Mutation(() => EmailType, { nullable: true })
	async sendEmail(@Arg("input") input: EmailInputType) : Promise<boolean|IResponseError> {
			const subject = "Top tips to boost your Qantas Points every day";
			const body = await es.fetchHTMLFromEmailTemplate(input);
			if (body) {

				const data = JSON.parse(JSON.stringify({ ...input }));
				const email = await fetchAllByFieldId<EmailUpdateType>(collection, "email", data.email);

				let sendEmail = false;
				if (email && email.length === 0) {
					console.log("email", email);
					data.count = 1;
					data.timeStamp = moment(Date.now()).toDate();
					await create<EmailInputType, EmailType>(collection, data);
					sendEmail = true;
				} else if (email && email.length > 0) {
					if (checkEmailCount(email)) {
						console.log("checkEmailCount", email);
						let item = email[0];
						item.count = item.count + 1;
						await update<EmailUpdateType, EmailType>(collection, item.id, item);
						sendEmail = true;
					}
				}
				console.log("sendEmail", sendEmail);
				console.log("------------------------- sendEmail");

				if (sendEmail) {
					return await es.sendEmail({
						body,
						email: data.email,
						ffMember: data.ffMember,
						subject,
						name: data.name
					});
				} else {
					return({error:"We cannot send any more emails to this address"});
				}
			}
			return({error:"Issue retrieving email template"});
	}
}

