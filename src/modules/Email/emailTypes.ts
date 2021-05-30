import { Field, InputType, ObjectType} from "type-graphql";

export type EmailSendType  = {
	name: string;
	email: string;
	ffMember: boolean;
	subject:string;
	body:any;
}

@InputType()
export class EmailInputType {
	@Field() name: string;
	@Field() email: string;
	@Field() ffMember: boolean;
	@Field(()=>[Number]) summaryIds: number[];
	@Field({ nullable: true }) count?: number;
	@Field(() => Date, { nullable: true }) timeStamp?: Date;
}

@InputType()
export class EmailUpdateType {
	@Field({ nullable: true }) id: string;
	@Field({ nullable: true }) name?: string;
	@Field({ nullable: true }) email?: string;
	@Field({ nullable: true }) ffMember?: boolean;
	@Field(()=>[Number], { nullable: true }) summaryIds?: number[];
	@Field({ nullable: true }) count?: number;
	@Field(() => Date, { nullable: true }) timeStamp?: Date;
}

@ObjectType()
export class EmailType {
	@Field({ nullable: true }) id?: string;
	@Field({ nullable: true }) name?: string;
	@Field({ nullable: true }) email?: string;
	@Field({ nullable: true }) count?: number;
	@Field(()=>[Number], { nullable: true }) summaryIds?: number[];
	@Field({ nullable: true }) error?: string;
}

