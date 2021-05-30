import { graphql } from "graphql";
import {
	makeExecutableSchema,
	addMockFunctionsToSchema,
	mockServer
} from "graphql-tools";
//import {EmailResolver}  from "../emailResolver"

describe("Schema", () => {
	const typeDefs = `
	
	input EmailInputType {
		id: String
    name: String
    email: String
    ffMember: Boolean
    count:Int
    summaryIds: [Int]
	}
	
	type EmailSend {
		id: String
    name: String
    email: String
    ffMember: Boolean
    count:Int
    summaryIds: [Int]
	}

	type Mutation {
		sendEmail(input: EmailInputType) : Boolean
	}

	type Query {
  	emailSend:[EmailSend]
	}

	schema {
		query:Query
		mutation: Mutation
	}
 	`;

	const testCaseSendEmail = {
		id: "sendEmail",
		mutation: `mutation($input: EmailInputType) {
			sendEmail(input:$input) 
		}`,
		variables: {
			input: {
				"name": "reg",
				"email": "mihir.rughani@qantasloyalty.com",
				"ffMember": true,
				"summaryIds": [4,6,7]
			}
		}
	};

	const mockSchema = makeExecutableSchema({ typeDefs: typeDefs });
	const mocks = {
		Boolean: () => false,
		ID: () => "1",
		Int: () => 7,
		Float: () => 50.0,
		String: () => "xyz"
	};
	addMockFunctionsToSchema({ schema: mockSchema, mocks: mocks });

	test("test has valid type definitions", async () => {
		expect(async () => {
			const MockServer = mockServer(typeDefs, null);
			await MockServer.query(`{ __schema { types { name } } }`);
		}).not.toThrow();
	});

	test(`test mutation: sendEmail`, async () => {
		const result = await graphql(
			mockSchema,
			testCaseSendEmail.mutation,
			null,
			{},
			testCaseSendEmail.variables
		);

		const data = result.data.sendEmail;
		expect(data).toBe(false);
	});

	// test(`test resolver`, async () => {
	// 	const es = new EmailResolver();
	// 	es.sendEmail()
	//
	// 	expect(data).toBe(false);
	// });

});
