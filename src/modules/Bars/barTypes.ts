import { AccessEnum, GenderEnum, RolesEnum } from "../../types/enums";
import {Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
	@Field({nullable:true}) _id?: string;
	@Field() uid: string;
	@Field() firstName: string;
	@Field() lastName: string;
	@Field() email: string;
	@Field(type => GenderEnum) gender: GenderEnum;
	@Field() artistName: string;
	@Field() bandName: string;
	@Field() fileName: string;
	@Field({ nullable: true }) description?: string;
	@Field({ nullable: true }) featured?: boolean;
	@Field(type => RolesEnum)
	role: RolesEnum;
	@Field(type => [AccessEnum], { nullable: true })
	access?: AccessEnum[];
	@Field({nullable:true}) dateCreated?: string;
	@Field({nullable:true}) dateUpdated?: string;
	@Field({nullable:true}) timeStamp?: number;
	@Field({nullable:true}) disabled?: boolean;
	@Field({ nullable: true }) error?: string;
}

@InputType()
export class UserUpdate {
	@Field({ nullable: true }) _id?: string;
	@Field({ nullable: true }) uid?: string;
	@Field({ nullable: true }) firstName?: string;
	@Field({ nullable: true }) lastName?: string;
	@Field(type => GenderEnum, {nullable: true }) gender?: GenderEnum;
	@Field({ nullable: true }) email?: string;
	@Field({ nullable: true }) description?: string;
	@Field({ nullable: true }) featured?: boolean;
	@Field({ nullable: true }) artistName?: string;
	@Field({ nullable: true }) bandName?: string;
	@Field({ nullable: true }) fileName?: string;
	@Field(type => RolesEnum, { nullable: true }) role?: RolesEnum;
	@Field(type => [AccessEnum], { nullable: true }) access?: AccessEnum[];
	@Field({nullable:true}) dateUpdated?: string;
	@Field({nullable:true}) timeStamp?: number;
	@Field({ nullable: true }) disabled?: boolean;
	@Field({ nullable: true }) error?: string;
}

@InputType()
export class UserFilter {
	@Field({ nullable: true }) uid?: string;
	@Field({ nullable: true }) email?: string;
	@Field({ nullable: true }) firstName?: string;
	@Field({ nullable: true }) lastName?: string;
	@Field({ nullable: true }) bandName?: string;
	@Field({ nullable: true }) artistName?: string;
	@Field({ nullable: true }) featured?: boolean;
	@Field(type => RolesEnum,{ nullable: true }) role?: RolesEnum;
}
