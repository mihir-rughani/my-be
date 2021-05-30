import { AuthChecker } from "type-graphql";
import { Request } from "express";
// import { isNil } from "lodash";
// import { IAuth } from "../appRoutes";
export const authChecker: AuthChecker<Request> = async (
	{ root, args, context, info },
	roles
) => {

	return true;
// 	const auth:IAuth = root;
//
// 	if (isNil(auth)) return false;
//
// 	if(roles.length > 0){
// 		return roles.includes(auth.role);
// 	}
//
// 	return false;
};
