import { EmailService } from "../emailService";
import {getFromEmail, getLambdaEndpoint} from '../config';
import * as genericRepo from "../../Services/apiRepo";
jest.mock("../../../services/genericRepo");
jest.mock("../../../config/fireStore");
jest.mock("../emailService");
Date.now = jest.fn(() => new Date(Date.UTC(2017, 7, 9, 8)).valueOf());

//@ts-ignore
const fetchAllByFieldId:any = <jest.Mock<typeof genericRepo.fetchAllByFieldId>>genericRepo.fetchAllByFieldId;
//@ts-ignore
const create:any = <jest.Mock<typeof genericRepo.create>>genericRepo.create;
//@ts-ignore
const update:any = <jest.Mock<typeof genericRepo.update>>genericRepo.update;
//@ts-ignore
const sendEmail: any = <jest.Mock<typeof any>>EmailService.sendEmail;
//@ts-ignore
const fetchHTMLFromEmailTemplate: any = <jest.Mock<typeof any>>EmailService.fetchHTMLFromEmailTemplate;

afterEach(() => {
	fetchAllByFieldId.mockClear();
	create.mockClear();
	update.mockClear();
	fetchHTMLFromEmailTemplate.mockClear();
});

describe("getFromEmail configs", () => {
	test('if utils mocked automatically', () => {
		expect(getFromEmail("dev")).toBe('qantasmalltest@qantasloyalty.com');
	});
	test('if utils mocked automatically', () => {
		expect(getFromEmail("sit")).toBe('qantasmalltest@qantasloyalty.com');
	});
	test('if utils mocked automatically', () => {
		expect(getFromEmail("stg")).toBe('qantasmalltest@qantasloyalty.com');
	});
	test('if utils mocked automatically', () => {
		expect(getFromEmail("prd")).toBe('frequent_flyer@qantas.com.au');
	});
});

describe("getLambdaEndpoint configs", () => {
	test('if utils mocked automatically', () => {
		expect(getLambdaEndpoint("dev")).toBe('lambda-dev-microservices-email');
	});
	test('if utils mocked automatically', () => {
		expect(getLambdaEndpoint("sit")).toBe('lambda-sit-microservices-email');
	});
	test('if utils mocked automatically', () => {
		expect(getLambdaEndpoint("stg")).toBe('lambda-stg-microservices-email');
	});
	test('if utils mocked automatically', () => {
		expect(getLambdaEndpoint("prd")).toBe('lambda-prd-microservices-email');
	});
});

describe("Email Services", () => {

	afterEach(() => {
		sendEmail.mockClear();
		fetchHTMLFromEmailTemplate.mockClear();
	});

	describe("setEmailSend", () => {

		test("returns promise that correctly resolves to value", async () => {
			const fetchReturn = "";
			await fetchAllByFieldId.mockResolvedValueOnce(fetchReturn);
			const data = await fetchAllByFieldId("email", "test@test.com");
			return expect(data).toEqual(fetchReturn);
		});

		test("calls fetchHTMLFromEmailTemplate with correct arguments", async () => {
			await EmailService.fetchHTMLFromEmailTemplate({
				name: "a",
				email: "mihir.rughani@qantasloyalty.com",
				ffMember: true,
				summaryIds: [4]
			});
			return expect(fetchHTMLFromEmailTemplate.mock.calls[0]).toEqual([{
				"email": "mihir.rughani@qantasloyalty.com",
				"ffMember": true,
				"name": "a",
				"summaryIds": [4]
			}]);
		});
		test("returns promise that correctly resolves to value", async () => {
			const fetchReturn = true;
			await fetchHTMLFromEmailTemplate.mockResolvedValueOnce(fetchReturn);
			const data = await EmailService.fetchHTMLFromEmailTemplate({
				name: "a",
				email: "mihir.rughani@qantasloyalty.com",
				ffMember: true,
				summaryIds: [4]
			});
			return expect(data).toEqual(fetchReturn);
		});


	});

});
