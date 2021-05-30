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
var RestaurantsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const FloatNullableFilter_1 = require("../inputs/FloatNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const Upload_file_morphRelationFilter_1 = require("../inputs/Upload_file_morphRelationFilter");
let RestaurantsWhereInput = RestaurantsWhereInput_1 = class RestaurantsWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [RestaurantsWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantsWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantsWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantsWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantsWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantsWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], RestaurantsWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantsWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantsWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], RestaurantsWhereInput.prototype, "lat", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], RestaurantsWhereInput.prototype, "lon", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantsWhereInput.prototype, "suburb", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantsWhereInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], RestaurantsWhereInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], RestaurantsWhereInput.prototype, "published_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], RestaurantsWhereInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], RestaurantsWhereInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], RestaurantsWhereInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], RestaurantsWhereInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantsWhereInput.prototype, "breakfast", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantsWhereInput.prototype, "lunch", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantsWhereInput.prototype, "dinner", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantsWhereInput.prototype, "bachelorParty", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantsWhereInput.prototype, "henParty", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphRelationFilter_1.Upload_file_morphRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphRelationFilter_1.Upload_file_morphRelationFilter)
], RestaurantsWhereInput.prototype, "image", void 0);
RestaurantsWhereInput = RestaurantsWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantsWhereInput);
exports.RestaurantsWhereInput = RestaurantsWhereInput;
