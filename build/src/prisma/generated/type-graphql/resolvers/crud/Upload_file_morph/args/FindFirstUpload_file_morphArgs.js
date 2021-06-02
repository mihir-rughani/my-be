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
exports.FindFirstUpload_file_morphArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Upload_file_morphOrderByInput_1 = require("../../../inputs/Upload_file_morphOrderByInput");
const Upload_file_morphWhereInput_1 = require("../../../inputs/Upload_file_morphWhereInput");
const Upload_file_morphWhereUniqueInput_1 = require("../../../inputs/Upload_file_morphWhereUniqueInput");
const Upload_file_morphScalarFieldEnum_1 = require("../../../../enums/Upload_file_morphScalarFieldEnum");
let FindFirstUpload_file_morphArgs = class FindFirstUpload_file_morphArgs {
};
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereInput_1.Upload_file_morphWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphWhereInput_1.Upload_file_morphWhereInput)
], FindFirstUpload_file_morphArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphOrderByInput_1.Upload_file_morphOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstUpload_file_morphArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput)
], FindFirstUpload_file_morphArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstUpload_file_morphArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstUpload_file_morphArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphScalarFieldEnum_1.Upload_file_morphScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstUpload_file_morphArgs.prototype, "distinct", void 0);
FindFirstUpload_file_morphArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstUpload_file_morphArgs);
exports.FindFirstUpload_file_morphArgs = FindFirstUpload_file_morphArgs;
//# sourceMappingURL=FindFirstUpload_file_morphArgs.js.map