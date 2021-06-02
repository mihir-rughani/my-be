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
exports.BarsScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var BarsScalarFieldEnum;
(function (BarsScalarFieldEnum) {
    BarsScalarFieldEnum["id"] = "id";
    BarsScalarFieldEnum["title"] = "title";
    BarsScalarFieldEnum["description"] = "description";
    BarsScalarFieldEnum["suburb"] = "suburb";
    BarsScalarFieldEnum["city"] = "city";
    BarsScalarFieldEnum["postCode"] = "postCode";
    BarsScalarFieldEnum["lat"] = "lat";
    BarsScalarFieldEnum["lon"] = "lon";
    BarsScalarFieldEnum["breakfast"] = "breakfast";
    BarsScalarFieldEnum["lunch"] = "lunch";
    BarsScalarFieldEnum["dinner"] = "dinner";
    BarsScalarFieldEnum["bachelorParty"] = "bachelorParty";
    BarsScalarFieldEnum["henParty"] = "henParty";
    BarsScalarFieldEnum["visible"] = "visible";
    BarsScalarFieldEnum["published_at"] = "published_at";
    BarsScalarFieldEnum["created_by"] = "created_by";
    BarsScalarFieldEnum["updated_by"] = "updated_by";
    BarsScalarFieldEnum["created_at"] = "created_at";
    BarsScalarFieldEnum["updated_at"] = "updated_at";
})(BarsScalarFieldEnum = exports.BarsScalarFieldEnum || (exports.BarsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BarsScalarFieldEnum, {
    name: "BarsScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=BarsScalarFieldEnum.js.map