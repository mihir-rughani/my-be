import { EmailInputType, EmailSendType } from "./emailTypes";
import { Logger } from "../../core";
import * as path from "path";
import { emailEnum } from "./emailEnum";
import { getFromEmail, getLambdaEndpoint } from "./config";
import { Environment } from "../../core";
import * as fs from "fs";
import * as handlebars from "handlebars";
import * as AWS from "aws-sdk";

const log = Logger("EmailService");
const lambdaEndpoint = getLambdaEndpoint(Environment.getName());
const fromEmail = getFromEmail(Environment.getName());

export class EmailService {

	public static fetchHTMLFromEmailTemplate(input: EmailInputType): Promise<any | null> {

		return new Promise((resolve, reject) => {
			try {

				const template = path.join(__dirname, "/points-pilot.html");
				let DISPLAY_FLIGHT = false;
				let DISPLAY_WOOLWORTHS = false;
				let DISPLAY_RED_ENERGY = false;
				let DISPLAY_UBER = false;
				let DISPLAY_HOYTS = false;
				let DISPLAY_CREDIT_CARDS = false;
				let DISPLAY_SHOPPING = false;
				let DISPLAY_WELLNESS = false;
				let DISPLAY_HOTELS = false;
				let DISPLAY_INSURANCE = false;
				let DISPLAY_TRAVEL_MONEY = false;
				let DISPLAY_FREE_JOIN = !input.ffMember;

				const summaryIds = input.summaryIds;
				summaryIds.forEach((item) => {
					switch (item) {
						case emailEnum.DISPLAY_CREDIT_CARDS:
							DISPLAY_CREDIT_CARDS = true;
							break;
						case emailEnum.DISPLAY_FLIGHT:
							DISPLAY_FLIGHT = true;
							break;
						case emailEnum.DISPLAY_HOTELS:
							DISPLAY_HOTELS = true;
							break;
						case emailEnum.DISPLAY_HOYTS:
							DISPLAY_HOYTS = true;
							break;
						case emailEnum.DISPLAY_INSURANCE:
							DISPLAY_INSURANCE = true;
							break;
						case emailEnum.DISPLAY_RED_ENERGY:
							DISPLAY_RED_ENERGY = true;
							break;
						case emailEnum.DISPLAY_SHOPPING:
							DISPLAY_SHOPPING = true;
							break;
						case emailEnum.DISPLAY_TRAVEL_MONEY:
							DISPLAY_TRAVEL_MONEY = true;
							break;
						case emailEnum.DISPLAY_UBER:
							DISPLAY_UBER = true;
							break;
						case emailEnum.DISPLAY_WELLNESS:
							DISPLAY_WELLNESS = true;
							break;
						case emailEnum.DISPLAY_WOOLWORTHS:
							DISPLAY_WOOLWORTHS = true;
							break;
					}
				});

				const data = {
					FIRST_NAME: input.name,
					DISPLAY_FLIGHT,
					DISPLAY_WOOLWORTHS,
					DISPLAY_RED_ENERGY,
					DISPLAY_UBER,
					DISPLAY_HOYTS,
					DISPLAY_CREDIT_CARDS,
					DISPLAY_SHOPPING,
					DISPLAY_WELLNESS,
					DISPLAY_HOTELS,
					DISPLAY_INSURANCE,
					DISPLAY_TRAVEL_MONEY,
					DISPLAY_FREE_JOIN
				};


				log.info("reading file");
				fs.readFile(template, "utf-8", async (err, source) => {
					if (err) {
						return reject(new Error(`Error reading email template file: ${JSON.stringify(err)}`));
					}
					log.info("returning body");
					let body = handlebars.compile(source)(data);
					if (body){
						resolve(body);
					}
					else{
						resolve(null);
					}
				});
				log.warn("end return body");
			} catch (e) {
				throw e;
			}
		});

	}

	public static sendEmail(data: EmailSendType): Promise<boolean> {

		log.info("sending mail");
		return new Promise((resolve, reject) => {
			try {
				const lambda = new AWS.Lambda();
				const body = {
					body: {
						subject: data.subject,
						body: data.body,
						to: data.email,
						from: fromEmail
					}
				};

				const params = {
					FunctionName: lambdaEndpoint, /* required */
					Payload: JSON.stringify(body)
				};
				lambda.invoke(params, function(err, data) {
					if (err) {
						console.log(err, err.stack);
						reject(err);
					} else {
						console.log(data);
						resolve(true);
					}
				});

			} catch (e) {
				throw e;
			}
		});
	}
}
