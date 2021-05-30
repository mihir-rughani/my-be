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
exports.AggregateRestaurants = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantsAvgAggregate_1 = require("../outputs/RestaurantsAvgAggregate");
const RestaurantsCountAggregate_1 = require("../outputs/RestaurantsCountAggregate");
const RestaurantsMaxAggregate_1 = require("../outputs/RestaurantsMaxAggregate");
const RestaurantsMinAggregate_1 = require("../outputs/RestaurantsMinAggregate");
const RestaurantsSumAggregate_1 = require("../outputs/RestaurantsSumAggregate");
let AggregateRestaurants = class AggregateRestaurants {
};
__decorate([
    TypeGraphQL.Field(_type => RestaurantsCountAggregate_1.RestaurantsCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsCountAggregate_1.RestaurantsCountAggregate)
], AggregateRestaurants.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsAvgAggregate_1.RestaurantsAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsAvgAggregate_1.RestaurantsAvgAggregate)
], AggregateRestaurants.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsSumAggregate_1.RestaurantsSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsSumAggregate_1.RestaurantsSumAggregate)
], AggregateRestaurants.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsMinAggregate_1.RestaurantsMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsMinAggregate_1.RestaurantsMinAggregate)
], AggregateRestaurants.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsMaxAggregate_1.RestaurantsMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsMaxAggregate_1.RestaurantsMaxAggregate)
], AggregateRestaurants.prototype, "_max", void 0);
AggregateRestaurants = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateRestaurants);
exports.AggregateRestaurants = AggregateRestaurants;
