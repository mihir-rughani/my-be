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
var Upload_file_morphWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BarsRelationFilter_1 = require("../inputs/BarsRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const RestaurantsRelationFilter_1 = require("../inputs/RestaurantsRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const Upload_fileRelationFilter_1 = require("../inputs/Upload_fileRelationFilter");
let Upload_file_morphWhereInput = Upload_file_morphWhereInput_1 = class Upload_file_morphWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], Upload_file_morphWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_file_morphWhereInput.prototype, "upload_file_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_file_morphWhereInput.prototype, "related_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Upload_file_morphWhereInput.prototype, "related_type", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Upload_file_morphWhereInput.prototype, "field", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_file_morphWhereInput.prototype, "order", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_fileRelationFilter_1.Upload_fileRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Upload_fileRelationFilter_1.Upload_fileRelationFilter)
], Upload_file_morphWhereInput.prototype, "uploadFile", void 0);
__decorate([
    TypeGraphQL.Field(_type => BarsRelationFilter_1.BarsRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", BarsRelationFilter_1.BarsRelationFilter)
], Upload_file_morphWhereInput.prototype, "bars", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsRelationFilter_1.RestaurantsRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsRelationFilter_1.RestaurantsRelationFilter)
], Upload_file_morphWhereInput.prototype, "restaurants", void 0);
Upload_file_morphWhereInput = Upload_file_morphWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Upload_file_morphWhereInput);
exports.Upload_file_morphWhereInput = Upload_file_morphWhereInput;
