"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomItineraryPlacesResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../prisma/generated/type-graphql");
const graphql_type_json_1 = require("graphql-type-json");
let ItineraryPlacesInput = class ItineraryPlacesInput {
};
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ItineraryPlacesInput.prototype, "user_id", void 0);
__decorate([
    type_graphql_1.Field(() => graphql_type_json_1.default, { nullable: true }),
    __metadata("design:type", Object)
], ItineraryPlacesInput.prototype, "venue_data", void 0);
__decorate([
    type_graphql_1.Field(type => Date, { nullable: true }),
    __metadata("design:type", Date)
], ItineraryPlacesInput.prototype, "date", void 0);
__decorate([
    type_graphql_1.Field(type => Date, { nullable: true }),
    __metadata("design:type", Date)
], ItineraryPlacesInput.prototype, "time", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ItineraryPlacesInput.prototype, "created_by", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ItineraryPlacesInput.prototype, "updated_by", void 0);
__decorate([
    type_graphql_1.Field(type => Date, { nullable: true }),
    __metadata("design:type", Date)
], ItineraryPlacesInput.prototype, "created_at", void 0);
__decorate([
    type_graphql_1.Field(type => Date, { nullable: true }),
    __metadata("design:type", Date)
], ItineraryPlacesInput.prototype, "updated_at", void 0);
ItineraryPlacesInput = __decorate([
    type_graphql_1.InputType({ description: "Update Itinerary_places data" })
], ItineraryPlacesInput);
let CustomItineraryPlacesResolver = class CustomItineraryPlacesResolver {
    async customUpdateItineraryPlaces({ prisma }, data, id) {
        try {
            return await prisma.Itinerary_places.update({
                where: { id: id },
                update: {
                    ...data
                }
            });
        }
        catch (err) {
        }
    }
};
__decorate([
    type_graphql_1.Mutation(returns => type_graphql_2.Itinerary_places),
    __param(0, type_graphql_1.Ctx()),
    __param(1, type_graphql_1.Arg("data")),
    __param(2, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ItineraryPlacesInput, Number]),
    __metadata("design:returntype", Promise)
], CustomItineraryPlacesResolver.prototype, "customUpdateItineraryPlaces", null);
CustomItineraryPlacesResolver = __decorate([
    type_graphql_1.Resolver(type_graphql_2.Itinerary_places)
], CustomItineraryPlacesResolver);
exports.CustomItineraryPlacesResolver = CustomItineraryPlacesResolver;
//# sourceMappingURL=CustomItineraryPlacesResolver.js.map