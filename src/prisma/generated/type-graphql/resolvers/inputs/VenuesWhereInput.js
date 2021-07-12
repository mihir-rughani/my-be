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
var VenuesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenuesWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const FavouritesRelationFilter_1 = require("../inputs/FavouritesRelationFilter");
const FloatNullableFilter_1 = require("../inputs/FloatNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const Itinerary_placesRelationFilter_1 = require("../inputs/Itinerary_placesRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const Upload_file_morphListRelationFilter_1 = require("../inputs/Upload_file_morphListRelationFilter");
const VenueTypeRelationFilter_1 = require("../inputs/VenueTypeRelationFilter");
let VenuesWhereInput = VenuesWhereInput_1 = class VenuesWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [VenuesWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], VenuesWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [VenuesWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], VenuesWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [VenuesWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], VenuesWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], VenuesWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VenuesWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VenuesWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VenuesWhereInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VenuesWhereInput.prototype, "suburb", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VenuesWhereInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VenuesWhereInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], VenuesWhereInput.prototype, "lat", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], VenuesWhereInput.prototype, "lon", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VenuesWhereInput.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], VenuesWhereInput.prototype, "venue_type", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "breakfast", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "lunch", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "dinner", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "visible", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], VenuesWhereInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], VenuesWhereInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], VenuesWhereInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], VenuesWhereInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VenuesWhereInput.prototype, "test", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "cosy", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "romantic", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "weddings", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VenuesWhereInput.prototype, "post_code", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "bachelor_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "hen_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "outdoor_area", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "outdoor_dinning", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], VenuesWhereInput.prototype, "outdoor_bar", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenueTypeRelationFilter_1.VenueTypeRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", VenueTypeRelationFilter_1.VenueTypeRelationFilter)
], VenuesWhereInput.prototype, "venueType", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphListRelationFilter_1.Upload_file_morphListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphListRelationFilter_1.Upload_file_morphListRelationFilter)
], VenuesWhereInput.prototype, "uploadFileMorph", void 0);
__decorate([
    TypeGraphQL.Field(_type => FavouritesRelationFilter_1.FavouritesRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", FavouritesRelationFilter_1.FavouritesRelationFilter)
], VenuesWhereInput.prototype, "favourite", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesRelationFilter_1.Itinerary_placesRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesRelationFilter_1.Itinerary_placesRelationFilter)
], VenuesWhereInput.prototype, "itinerary_places", void 0);
VenuesWhereInput = VenuesWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], VenuesWhereInput);
exports.VenuesWhereInput = VenuesWhereInput;
