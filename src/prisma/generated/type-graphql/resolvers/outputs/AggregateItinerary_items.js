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
exports.AggregateItinerary_items = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Itinerary_itemsAvgAggregate_1 = require("../outputs/Itinerary_itemsAvgAggregate");
const Itinerary_itemsCountAggregate_1 = require("../outputs/Itinerary_itemsCountAggregate");
const Itinerary_itemsMaxAggregate_1 = require("../outputs/Itinerary_itemsMaxAggregate");
const Itinerary_itemsMinAggregate_1 = require("../outputs/Itinerary_itemsMinAggregate");
const Itinerary_itemsSumAggregate_1 = require("../outputs/Itinerary_itemsSumAggregate");
let AggregateItinerary_items = class AggregateItinerary_items {
};
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsCountAggregate_1.Itinerary_itemsCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsCountAggregate_1.Itinerary_itemsCountAggregate)
], AggregateItinerary_items.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsAvgAggregate_1.Itinerary_itemsAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsAvgAggregate_1.Itinerary_itemsAvgAggregate)
], AggregateItinerary_items.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsSumAggregate_1.Itinerary_itemsSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsSumAggregate_1.Itinerary_itemsSumAggregate)
], AggregateItinerary_items.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsMinAggregate_1.Itinerary_itemsMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsMinAggregate_1.Itinerary_itemsMinAggregate)
], AggregateItinerary_items.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsMaxAggregate_1.Itinerary_itemsMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsMaxAggregate_1.Itinerary_itemsMaxAggregate)
], AggregateItinerary_items.prototype, "_max", void 0);
AggregateItinerary_items = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateItinerary_items);
exports.AggregateItinerary_items = AggregateItinerary_items;
