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
exports.FindManyUpload_fileArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Upload_fileOrderByInput_1 = require("../../../inputs/Upload_fileOrderByInput");
const Upload_fileWhereInput_1 = require("../../../inputs/Upload_fileWhereInput");
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
const Upload_fileScalarFieldEnum_1 = require("../../../../enums/Upload_fileScalarFieldEnum");
let FindManyUpload_fileArgs = class FindManyUpload_fileArgs {
};
__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereInput_1.Upload_fileWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Upload_fileWhereInput_1.Upload_fileWhereInput)
], FindManyUpload_fileArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_fileOrderByInput_1.Upload_fileOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyUpload_fileArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], FindManyUpload_fileArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyUpload_fileArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyUpload_fileArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_fileScalarFieldEnum_1.Upload_fileScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyUpload_fileArgs.prototype, "distinct", void 0);
FindManyUpload_fileArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyUpload_fileArgs);
exports.FindManyUpload_fileArgs = FindManyUpload_fileArgs;
