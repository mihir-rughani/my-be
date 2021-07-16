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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itinerary_placesGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GraphQLScalars = __importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const Itinerary_placesAvgAggregate_1 = require("../outputs/Itinerary_placesAvgAggregate");
const Itinerary_placesCountAggregate_1 = require("../outputs/Itinerary_placesCountAggregate");
const Itinerary_placesMaxAggregate_1 = require("../outputs/Itinerary_placesMaxAggregate");
const Itinerary_placesMinAggregate_1 = require("../outputs/Itinerary_placesMinAggregate");
const Itinerary_placesSumAggregate_1 = require("../outputs/Itinerary_placesSumAggregate");
let Itinerary_placesGroupBy = class Itinerary_placesGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], Itinerary_placesGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], Itinerary_placesGroupBy.prototype, "itinerary_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Itinerary_placesGroupBy.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: false
    }),
    __metadata("design:type", Object)
], Itinerary_placesGroupBy.prototype, "venue_data", void 0);
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Itinerary_placesGroupBy.prototype, "bestFor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Itinerary_placesGroupBy.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Itinerary_placesGroupBy.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_placesGroupBy.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_placesGroupBy.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_placesGroupBy.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Itinerary_placesGroupBy.prototype, "time", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Itinerary_placesGroupBy.prototype, "venue_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesCountAggregate_1.Itinerary_placesCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesCountAggregate_1.Itinerary_placesCountAggregate)
], Itinerary_placesGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesAvgAggregate_1.Itinerary_placesAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesAvgAggregate_1.Itinerary_placesAvgAggregate)
], Itinerary_placesGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesSumAggregate_1.Itinerary_placesSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesSumAggregate_1.Itinerary_placesSumAggregate)
], Itinerary_placesGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesMinAggregate_1.Itinerary_placesMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesMinAggregate_1.Itinerary_placesMinAggregate)
], Itinerary_placesGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesMaxAggregate_1.Itinerary_placesMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesMaxAggregate_1.Itinerary_placesMaxAggregate)
], Itinerary_placesGroupBy.prototype, "_max", void 0);
Itinerary_placesGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], Itinerary_placesGroupBy);
exports.Itinerary_placesGroupBy = Itinerary_placesGroupBy;
//# sourceMappingURL=Itinerary_placesGroupBy.js.map