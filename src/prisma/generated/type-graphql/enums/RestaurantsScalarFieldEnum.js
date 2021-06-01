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
exports.RestaurantsScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var RestaurantsScalarFieldEnum;
(function (RestaurantsScalarFieldEnum) {
    RestaurantsScalarFieldEnum["id"] = "id";
    RestaurantsScalarFieldEnum["title"] = "title";
    RestaurantsScalarFieldEnum["description"] = "description";
    RestaurantsScalarFieldEnum["lat"] = "lat";
    RestaurantsScalarFieldEnum["lon"] = "lon";
    RestaurantsScalarFieldEnum["suburb"] = "suburb";
    RestaurantsScalarFieldEnum["city"] = "city";
    RestaurantsScalarFieldEnum["postCode"] = "postCode";
    RestaurantsScalarFieldEnum["published_at"] = "published_at";
    RestaurantsScalarFieldEnum["created_by"] = "created_by";
    RestaurantsScalarFieldEnum["updated_by"] = "updated_by";
    RestaurantsScalarFieldEnum["created_at"] = "created_at";
    RestaurantsScalarFieldEnum["updated_at"] = "updated_at";
    RestaurantsScalarFieldEnum["breakfast"] = "breakfast";
    RestaurantsScalarFieldEnum["lunch"] = "lunch";
    RestaurantsScalarFieldEnum["dinner"] = "dinner";
    RestaurantsScalarFieldEnum["bachelorParty"] = "bachelorParty";
    RestaurantsScalarFieldEnum["henParty"] = "henParty";
    RestaurantsScalarFieldEnum["restaurant_image"] = "restaurant_image";
})(RestaurantsScalarFieldEnum = exports.RestaurantsScalarFieldEnum || (exports.RestaurantsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RestaurantsScalarFieldEnum, {
    name: "RestaurantsScalarFieldEnum",
    description: undefined,
});
