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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itinerary_placesCreateWithoutItineraryInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GraphQLScalars = __importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const VenuesCreateNestedOneWithoutItinerary_placesInput_1 = require("../inputs/VenuesCreateNestedOneWithoutItinerary_placesInput");
let Itinerary_placesCreateWithoutItineraryInput = class Itinerary_placesCreateWithoutItineraryInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: false
    }),
    __metadata("design:type", Object)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "venue_data", void 0);
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "bestFor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "time", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenuesCreateNestedOneWithoutItinerary_placesInput_1.VenuesCreateNestedOneWithoutItinerary_placesInput, {
        nullable: true
    }),
    __metadata("design:type", VenuesCreateNestedOneWithoutItinerary_placesInput_1.VenuesCreateNestedOneWithoutItinerary_placesInput)
], Itinerary_placesCreateWithoutItineraryInput.prototype, "venue", void 0);
Itinerary_placesCreateWithoutItineraryInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Itinerary_placesCreateWithoutItineraryInput);
exports.Itinerary_placesCreateWithoutItineraryInput = Itinerary_placesCreateWithoutItineraryInput;
