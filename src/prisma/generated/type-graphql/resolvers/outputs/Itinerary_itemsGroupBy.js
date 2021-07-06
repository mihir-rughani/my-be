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
exports.Itinerary_itemsGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GraphQLScalars = __importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const Itinerary_itemsAvgAggregate_1 = require("../outputs/Itinerary_itemsAvgAggregate");
const Itinerary_itemsCountAggregate_1 = require("../outputs/Itinerary_itemsCountAggregate");
const Itinerary_itemsMaxAggregate_1 = require("../outputs/Itinerary_itemsMaxAggregate");
const Itinerary_itemsMinAggregate_1 = require("../outputs/Itinerary_itemsMinAggregate");
const Itinerary_itemsSumAggregate_1 = require("../outputs/Itinerary_itemsSumAggregate");
let Itinerary_itemsGroupBy = class Itinerary_itemsGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], Itinerary_itemsGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Itinerary_itemsGroupBy.prototype, "itinerary_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Itinerary_itemsGroupBy.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_itemsGroupBy.prototype, "published_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Itinerary_itemsGroupBy.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Itinerary_itemsGroupBy.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_itemsGroupBy.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_itemsGroupBy.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Itinerary_itemsGroupBy.prototype, "venue_data", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsCountAggregate_1.Itinerary_itemsCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsCountAggregate_1.Itinerary_itemsCountAggregate)
], Itinerary_itemsGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsAvgAggregate_1.Itinerary_itemsAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsAvgAggregate_1.Itinerary_itemsAvgAggregate)
], Itinerary_itemsGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsSumAggregate_1.Itinerary_itemsSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsSumAggregate_1.Itinerary_itemsSumAggregate)
], Itinerary_itemsGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsMinAggregate_1.Itinerary_itemsMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsMinAggregate_1.Itinerary_itemsMinAggregate)
], Itinerary_itemsGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsMaxAggregate_1.Itinerary_itemsMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsMaxAggregate_1.Itinerary_itemsMaxAggregate)
], Itinerary_itemsGroupBy.prototype, "_max", void 0);
Itinerary_itemsGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], Itinerary_itemsGroupBy);
exports.Itinerary_itemsGroupBy = Itinerary_itemsGroupBy;
