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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var Itinerary_placesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itinerary_placesWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const ItineraryRelationFilter_1 = require("../inputs/ItineraryRelationFilter");
const JsonFilter_1 = require("../inputs/JsonFilter");
const JsonNullableFilter_1 = require("../inputs/JsonNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const VenuesRelationFilter_1 = require("../inputs/VenuesRelationFilter");
let Itinerary_placesWhereInput = Itinerary_placesWhereInput_1 = class Itinerary_placesWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_placesWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_placesWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_placesWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_placesWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_placesWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_placesWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], Itinerary_placesWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], Itinerary_placesWhereInput.prototype, "itinerary_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Itinerary_placesWhereInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => JsonFilter_1.JsonFilter, {
        nullable: true
    }),
    __metadata("design:type", JsonFilter_1.JsonFilter)
], Itinerary_placesWhereInput.prototype, "venue_data", void 0);
__decorate([
    TypeGraphQL.Field(_type => JsonNullableFilter_1.JsonNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", JsonNullableFilter_1.JsonNullableFilter)
], Itinerary_placesWhereInput.prototype, "bestFor", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Itinerary_placesWhereInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Itinerary_placesWhereInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Itinerary_placesWhereInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Itinerary_placesWhereInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Itinerary_placesWhereInput.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Itinerary_placesWhereInput.prototype, "time", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Itinerary_placesWhereInput.prototype, "venue_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenuesRelationFilter_1.VenuesRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", VenuesRelationFilter_1.VenuesRelationFilter)
], Itinerary_placesWhereInput.prototype, "venue", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryRelationFilter_1.ItineraryRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ItineraryRelationFilter_1.ItineraryRelationFilter)
], Itinerary_placesWhereInput.prototype, "itinerary", void 0);
Itinerary_placesWhereInput = Itinerary_placesWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Itinerary_placesWhereInput);
exports.Itinerary_placesWhereInput = Itinerary_placesWhereInput;
//# sourceMappingURL=Itinerary_placesWhereInput.js.map