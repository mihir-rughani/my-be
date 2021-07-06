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
exports.GroupByItinerary_placesArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Itinerary_placesOrderByInput_1 = require("../../../inputs/Itinerary_placesOrderByInput");
const Itinerary_placesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Itinerary_placesScalarWhereWithAggregatesInput");
const Itinerary_placesWhereInput_1 = require("../../../inputs/Itinerary_placesWhereInput");
const Itinerary_placesScalarFieldEnum_1 = require("../../../../enums/Itinerary_placesScalarFieldEnum");
let GroupByItinerary_placesArgs = class GroupByItinerary_placesArgs {
};
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesWhereInput_1.Itinerary_placesWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesWhereInput_1.Itinerary_placesWhereInput)
], GroupByItinerary_placesArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_placesOrderByInput_1.Itinerary_placesOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupByItinerary_placesArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_placesScalarFieldEnum_1.Itinerary_placesScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByItinerary_placesArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesScalarWhereWithAggregatesInput_1.Itinerary_placesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesScalarWhereWithAggregatesInput_1.Itinerary_placesScalarWhereWithAggregatesInput)
], GroupByItinerary_placesArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByItinerary_placesArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByItinerary_placesArgs.prototype, "skip", void 0);
GroupByItinerary_placesArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByItinerary_placesArgs);
exports.GroupByItinerary_placesArgs = GroupByItinerary_placesArgs;
