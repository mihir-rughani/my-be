import { registerEnumType } from "type-graphql";

export enum AccessEnum {
	Admin = "Admin",
	Artist = "Artist",
	User = "User"
}

export enum RolesEnum {
	AnonymousAuth= "AnonymousAuth",
	SuperAdmin = "SuperAdmin",
	Admin= "Admin",
	User= "User",
	Artist = "Artist"
}

export enum GenderEnum {
	None = "None",
	Male = "Male",
	Female = "Female"
}

registerEnumType(RolesEnum, {
	name: "RolesEnum"
});

registerEnumType(AccessEnum, {
	name: "AccessEnum"
});

registerEnumType(GenderEnum, {
	name: "GenderEnum",
	description:"Gender Enum"
});
