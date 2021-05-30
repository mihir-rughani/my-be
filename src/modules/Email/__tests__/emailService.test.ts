
import { EmailService } from "../emailService";
Date.now = jest.fn(() => new Date(Date.UTC(2017, 7, 9, 8)).valueOf());
jest.mock("../../../config/fireStore");
jest.mock("../emailService");


describe('Email Service', () => {
	it('should work', async () => {
		const mockStaticF = jest.fn();
		mockStaticF.mockReturnValue('worked');

		EmailService.fetchHTMLFromEmailTemplate = mockStaticF.bind(EmailService);
		const result = await EmailService.fetchHTMLFromEmailTemplate({
			name: "a",
			email: "mihir.rughani@qantasloyalty.com",
			ffMember: true,
			summaryIds: [4]
		});
		expect(result).toEqual('worked');
	});
});

describe('Email Service', () => {
	it('should work', async () => {
		const mockStaticF = jest.fn();
		mockStaticF.mockReturnValue('worked');

		EmailService.sendEmail = mockStaticF.bind(EmailService);
		const result = await EmailService.sendEmail({
			name: "a",
			email: "mihir.rughani@qantasloyalty.com",
			ffMember: true,
			subject:"",
			body:""
		});
		expect(result).toEqual('worked');
	});
});
