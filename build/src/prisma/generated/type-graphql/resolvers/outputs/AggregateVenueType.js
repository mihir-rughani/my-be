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
exports.AggregateVenueType = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const VenueTypeAvgAggregate_1 = require("../outputs/VenueTypeAvgAggregate");
const VenueTypeCountAggregate_1 = require("../outputs/VenueTypeCountAggregate");
const VenueTypeMaxAggregate_1 = require("../outputs/VenueTypeMaxAggregate");
const VenueTypeMinAggregate_1 = require("../outputs/VenueTypeMinAggregate");
const VenueTypeSumAggregate_1 = require("../outputs/VenueTypeSumAggregate");
let AggregateVenueType = class AggregateVenueType {
};
__decorate([
    TypeGraphQL.Field(_type => VenueTypeCountAggregate_1.VenueTypeCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenueTypeCountAggregate_1.VenueTypeCountAggregate)
], AggregateVenueType.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenueTypeAvgAggregate_1.VenueTypeAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenueTypeAvgAggregate_1.VenueTypeAvgAggregate)
], AggregateVenueType.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenueTypeSumAggregate_1.VenueTypeSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenueTypeSumAggregate_1.VenueTypeSumAggregate)
], AggregateVenueType.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenueTypeMinAggregate_1.VenueTypeMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenueTypeMinAggregate_1.VenueTypeMinAggregate)
], AggregateVenueType.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenueTypeMaxAggregate_1.VenueTypeMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", VenueTypeMaxAggregate_1.VenueTypeMaxAggregate)
], AggregateVenueType.prototype, "_max", void 0);
AggregateVenueType = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateVenueType);
exports.AggregateVenueType = AggregateVenueType;
//# sourceMappingURL=AggregateVenueType.js.map