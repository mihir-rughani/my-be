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
exports.Itinerary_itemsScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var Itinerary_itemsScalarFieldEnum;
(function (Itinerary_itemsScalarFieldEnum) {
    Itinerary_itemsScalarFieldEnum["id"] = "id";
    Itinerary_itemsScalarFieldEnum["itinerary_id"] = "itinerary_id";
    Itinerary_itemsScalarFieldEnum["user_id"] = "user_id";
    Itinerary_itemsScalarFieldEnum["published_at"] = "published_at";
    Itinerary_itemsScalarFieldEnum["created_by"] = "created_by";
    Itinerary_itemsScalarFieldEnum["updated_by"] = "updated_by";
    Itinerary_itemsScalarFieldEnum["created_at"] = "created_at";
    Itinerary_itemsScalarFieldEnum["updated_at"] = "updated_at";
    Itinerary_itemsScalarFieldEnum["venue_data"] = "venue_data";
})(Itinerary_itemsScalarFieldEnum = exports.Itinerary_itemsScalarFieldEnum || (exports.Itinerary_itemsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Itinerary_itemsScalarFieldEnum, {
    name: "Itinerary_itemsScalarFieldEnum",
    description: undefined,
});
