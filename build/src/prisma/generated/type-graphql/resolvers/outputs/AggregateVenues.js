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
exports.AggregateVenues = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const VenuesAvgAggregate_1 = require("../outputs/VenuesAvgAggregate");
const VenuesCountAggregate_1 = require("../outputs/VenuesCountAggregate");
const VenuesMaxAggregate_1 = require("../outputs/VenuesMaxAggregate");
const VenuesMinAggregate_1 = require("../outputs/VenuesMinAggregate");
const VenuesSumAggregate_1 = require("../outputs/VenuesSumAggregate");
let AggregateVenues = class AggregateVenues {
};
__decorate([
    TypeGraphQL.Field(_type => VenuesCountAggregate_1.VenuesCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenuesCountAggregate_1.VenuesCountAggregate)
], AggregateVenues.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenuesAvgAggregate_1.VenuesAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenuesAvgAggregate_1.VenuesAvgAggregate)
], AggregateVenues.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenuesSumAggregate_1.VenuesSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenuesSumAggregate_1.VenuesSumAggregate)
], AggregateVenues.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenuesMinAggregate_1.VenuesMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenuesMinAggregate_1.VenuesMinAggregate)
], AggregateVenues.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenuesMaxAggregate_1.VenuesMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenuesMaxAggregate_1.VenuesMaxAggregate)
], AggregateVenues.prototype, "_max", void 0);
AggregateVenues = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateVenues);
exports.AggregateVenues = AggregateVenues;
//# sourceMappingURL=AggregateVenues.js.map