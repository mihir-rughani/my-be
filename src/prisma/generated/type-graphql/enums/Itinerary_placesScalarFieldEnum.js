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
exports.Itinerary_placesScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var Itinerary_placesScalarFieldEnum;
(function (Itinerary_placesScalarFieldEnum) {
    Itinerary_placesScalarFieldEnum["id"] = "id";
    Itinerary_placesScalarFieldEnum["user_id"] = "user_id";
    Itinerary_placesScalarFieldEnum["itinerary_id"] = "itinerary_id";
    Itinerary_placesScalarFieldEnum["venue_data"] = "venue_data";
    Itinerary_placesScalarFieldEnum["created_by"] = "created_by";
    Itinerary_placesScalarFieldEnum["updated_by"] = "updated_by";
    Itinerary_placesScalarFieldEnum["created_at"] = "created_at";
    Itinerary_placesScalarFieldEnum["updated_at"] = "updated_at";
})(Itinerary_placesScalarFieldEnum = exports.Itinerary_placesScalarFieldEnum || (exports.Itinerary_placesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Itinerary_placesScalarFieldEnum, {
    name: "Itinerary_placesScalarFieldEnum",
    description: undefined,
});
