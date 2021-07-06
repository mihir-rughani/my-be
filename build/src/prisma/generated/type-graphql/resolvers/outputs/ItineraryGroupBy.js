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
exports.ItineraryGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ItineraryAvgAggregate_1 = require("../outputs/ItineraryAvgAggregate");
const ItineraryCountAggregate_1 = require("../outputs/ItineraryCountAggregate");
const ItineraryMaxAggregate_1 = require("../outputs/ItineraryMaxAggregate");
const ItineraryMinAggregate_1 = require("../outputs/ItineraryMinAggregate");
const ItinerarySumAggregate_1 = require("../outputs/ItinerarySumAggregate");
let ItineraryGroupBy = class ItineraryGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], ItineraryGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ItineraryGroupBy.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ItineraryGroupBy.prototype, "itinerary_date", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ItineraryGroupBy.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ItineraryGroupBy.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ItineraryGroupBy.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ItineraryGroupBy.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryCountAggregate_1.ItineraryCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ItineraryCountAggregate_1.ItineraryCountAggregate)
], ItineraryGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryAvgAggregate_1.ItineraryAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", ItineraryAvgAggregate_1.ItineraryAvgAggregate)
], ItineraryGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItinerarySumAggregate_1.ItinerarySumAggregate, {
        nullable: true
    }),
    __metadata("design:type", ItinerarySumAggregate_1.ItinerarySumAggregate)
], ItineraryGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryMinAggregate_1.ItineraryMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ItineraryMinAggregate_1.ItineraryMinAggregate)
], ItineraryGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryMaxAggregate_1.ItineraryMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ItineraryMaxAggregate_1.ItineraryMaxAggregate)
], ItineraryGroupBy.prototype, "_max", void 0);
ItineraryGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], ItineraryGroupBy);
exports.ItineraryGroupBy = ItineraryGroupBy;
//# sourceMappingURL=ItineraryGroupBy.js.map