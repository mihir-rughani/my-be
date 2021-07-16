"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouritesScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var FavouritesScalarFieldEnum;
(function (FavouritesScalarFieldEnum) {
    FavouritesScalarFieldEnum["id"] = "id";
    FavouritesScalarFieldEnum["user_id"] = "user_id";
    FavouritesScalarFieldEnum["bestFor"] = "bestFor";
    FavouritesScalarFieldEnum["venue_id"] = "venue_id";
    FavouritesScalarFieldEnum["created_by"] = "created_by";
    FavouritesScalarFieldEnum["updated_by"] = "updated_by";
    FavouritesScalarFieldEnum["created_at"] = "created_at";
    FavouritesScalarFieldEnum["updated_at"] = "updated_at";
})(FavouritesScalarFieldEnum = exports.FavouritesScalarFieldEnum || (exports.FavouritesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(FavouritesScalarFieldEnum, {
    name: "FavouritesScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=FavouritesScalarFieldEnum.js.map