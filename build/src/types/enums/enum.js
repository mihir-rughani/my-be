"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderEnum = exports.RolesEnum = exports.AccessEnum = void 0;
const type_graphql_1 = require("type-graphql");
var AccessEnum;
(function (AccessEnum) {
    AccessEnum["Admin"] = "Admin";
    AccessEnum["Artist"] = "Artist";
    AccessEnum["User"] = "User";
})(AccessEnum = exports.AccessEnum || (exports.AccessEnum = {}));
var RolesEnum;
(function (RolesEnum) {
    RolesEnum["AnonymousAuth"] = "AnonymousAuth";
    RolesEnum["SuperAdmin"] = "SuperAdmin";
    RolesEnum["Admin"] = "Admin";
    RolesEnum["User"] = "User";
    RolesEnum["Artist"] = "Artist";
})(RolesEnum = exports.RolesEnum || (exports.RolesEnum = {}));
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["None"] = "None";
    GenderEnum["Male"] = "Male";
    GenderEnum["Female"] = "Female";
})(GenderEnum = exports.GenderEnum || (exports.GenderEnum = {}));
type_graphql_1.registerEnumType(RolesEnum, {
    name: "RolesEnum"
});
type_graphql_1.registerEnumType(AccessEnum, {
    name: "AccessEnum"
});
type_graphql_1.registerEnumType(GenderEnum, {
    name: "GenderEnum",
    description: "Gender Enum"
});
//# sourceMappingURL=enum.js.map