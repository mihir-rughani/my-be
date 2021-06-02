"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = void 0;
// import { isNil } from "lodash";
// import { IAuth } from "../appRoutes";
const authChecker = async ({ root, args, context, info }, roles) => {
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
exports.authChecker = authChecker;
//# sourceMappingURL=authChecker.js.map