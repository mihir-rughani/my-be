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
exports.AggregateItinerary_places = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Itinerary_placesAvgAggregate_1 = require("../outputs/Itinerary_placesAvgAggregate");
const Itinerary_placesCountAggregate_1 = require("../outputs/Itinerary_placesCountAggregate");
const Itinerary_placesMaxAggregate_1 = require("../outputs/Itinerary_placesMaxAggregate");
const Itinerary_placesMinAggregate_1 = require("../outputs/Itinerary_placesMinAggregate");
const Itinerary_placesSumAggregate_1 = require("../outputs/Itinerary_placesSumAggregate");
let AggregateItinerary_places = class AggregateItinerary_places {
};
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesCountAggregate_1.Itinerary_placesCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesCountAggregate_1.Itinerary_placesCountAggregate)
], AggregateItinerary_places.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesAvgAggregate_1.Itinerary_placesAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesAvgAggregate_1.Itinerary_placesAvgAggregate)
], AggregateItinerary_places.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesSumAggregate_1.Itinerary_placesSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesSumAggregate_1.Itinerary_placesSumAggregate)
], AggregateItinerary_places.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesMinAggregate_1.Itinerary_placesMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesMinAggregate_1.Itinerary_placesMinAggregate)
], AggregateItinerary_places.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesMaxAggregate_1.Itinerary_placesMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesMaxAggregate_1.Itinerary_placesMaxAggregate)
], AggregateItinerary_places.prototype, "_max", void 0);
AggregateItinerary_places = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateItinerary_places);
exports.AggregateItinerary_places = AggregateItinerary_places;
