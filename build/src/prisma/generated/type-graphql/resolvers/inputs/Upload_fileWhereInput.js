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
var Upload_fileWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DecimalFilter_1 = require("../inputs/DecimalFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const JsonNullableFilter_1 = require("../inputs/JsonNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const Upload_file_morphListRelationFilter_1 = require("../inputs/Upload_file_morphListRelationFilter");
let Upload_fileWhereInput = Upload_fileWhereInput_1 = class Upload_fileWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [Upload_fileWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_fileWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_fileWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_fileWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_fileWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_fileWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], Upload_fileWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], Upload_fileWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Upload_fileWhereInput.prototype, "alternativeText", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Upload_fileWhereInput.prototype, "caption", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_fileWhereInput.prototype, "width", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_fileWhereInput.prototype, "height", void 0);
__decorate([
    TypeGraphQL.Field(_type => JsonNullableFilter_1.JsonNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", JsonNullableFilter_1.JsonNullableFilter)
], Upload_fileWhereInput.prototype, "formats", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], Upload_fileWhereInput.prototype, "hash", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Upload_fileWhereInput.prototype, "ext", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], Upload_fileWhereInput.prototype, "mime", void 0);
__decorate([
    TypeGraphQL.Field(_type => DecimalFilter_1.DecimalFilter, {
        nullable: true
    }),
    __metadata("design:type", DecimalFilter_1.DecimalFilter)
], Upload_fileWhereInput.prototype, "size", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], Upload_fileWhereInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Upload_fileWhereInput.prototype, "previewUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], Upload_fileWhereInput.prototype, "provider", void 0);
__decorate([
    TypeGraphQL.Field(_type => JsonNullableFilter_1.JsonNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", JsonNullableFilter_1.JsonNullableFilter)
], Upload_fileWhereInput.prototype, "provider_metadata", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_fileWhereInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_fileWhereInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Upload_fileWhereInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Upload_fileWhereInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphListRelationFilter_1.Upload_file_morphListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphListRelationFilter_1.Upload_file_morphListRelationFilter)
], Upload_fileWhereInput.prototype, "uploadFileMorph", void 0);
Upload_fileWhereInput = Upload_fileWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Upload_fileWhereInput);
exports.Upload_fileWhereInput = Upload_fileWhereInput;
