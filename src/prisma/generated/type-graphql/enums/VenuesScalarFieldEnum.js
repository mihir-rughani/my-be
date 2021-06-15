"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenuesScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var VenuesScalarFieldEnum;
(function (VenuesScalarFieldEnum) {
    VenuesScalarFieldEnum["id"] = "id";
    VenuesScalarFieldEnum["title"] = "title";
    VenuesScalarFieldEnum["description"] = "description";
    VenuesScalarFieldEnum["address"] = "address";
    VenuesScalarFieldEnum["suburb"] = "suburb";
    VenuesScalarFieldEnum["city"] = "city";
    VenuesScalarFieldEnum["postCode"] = "postCode";
    VenuesScalarFieldEnum["lat"] = "lat";
    VenuesScalarFieldEnum["lon"] = "lon";
    VenuesScalarFieldEnum["website"] = "website";
    VenuesScalarFieldEnum["venue_type"] = "venue_type";
    VenuesScalarFieldEnum["breakfast"] = "breakfast";
    VenuesScalarFieldEnum["lunch"] = "lunch";
    VenuesScalarFieldEnum["dinner"] = "dinner";
    VenuesScalarFieldEnum["bachelorParty"] = "bachelorParty";
    VenuesScalarFieldEnum["henParty"] = "henParty";
    VenuesScalarFieldEnum["visible"] = "visible";
    VenuesScalarFieldEnum["created_by"] = "created_by";
    VenuesScalarFieldEnum["updated_by"] = "updated_by";
    VenuesScalarFieldEnum["created_at"] = "created_at";
    VenuesScalarFieldEnum["updated_at"] = "updated_at";
})(VenuesScalarFieldEnum = exports.VenuesScalarFieldEnum || (exports.VenuesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VenuesScalarFieldEnum, {
    name: "VenuesScalarFieldEnum",
    description: undefined,
});
