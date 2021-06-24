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
exports.Upload_file_morphUpdateManyWithoutUploadFileInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Upload_file_morphCreateManyUploadFileInputEnvelope_1 = require("../inputs/Upload_file_morphCreateManyUploadFileInputEnvelope");
const Upload_file_morphCreateOrConnectWithoutUploadFileInput_1 = require("../inputs/Upload_file_morphCreateOrConnectWithoutUploadFileInput");
const Upload_file_morphCreateWithoutUploadFileInput_1 = require("../inputs/Upload_file_morphCreateWithoutUploadFileInput");
const Upload_file_morphScalarWhereInput_1 = require("../inputs/Upload_file_morphScalarWhereInput");
const Upload_file_morphUpdateManyWithWhereWithoutUploadFileInput_1 = require("../inputs/Upload_file_morphUpdateManyWithWhereWithoutUploadFileInput");
const Upload_file_morphUpdateWithWhereUniqueWithoutUploadFileInput_1 = require("../inputs/Upload_file_morphUpdateWithWhereUniqueWithoutUploadFileInput");
const Upload_file_morphUpsertWithWhereUniqueWithoutUploadFileInput_1 = require("../inputs/Upload_file_morphUpsertWithWhereUniqueWithoutUploadFileInput");
const Upload_file_morphWhereUniqueInput_1 = require("../inputs/Upload_file_morphWhereUniqueInput");
let Upload_file_morphUpdateManyWithoutUploadFileInput = class Upload_file_morphUpdateManyWithoutUploadFileInput {
};
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphCreateWithoutUploadFileInput_1.Upload_file_morphCreateWithoutUploadFileInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphCreateOrConnectWithoutUploadFileInput_1.Upload_file_morphCreateOrConnectWithoutUploadFileInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphUpsertWithWhereUniqueWithoutUploadFileInput_1.Upload_file_morphUpsertWithWhereUniqueWithoutUploadFileInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCreateManyUploadFileInputEnvelope_1.Upload_file_morphCreateManyUploadFileInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphCreateManyUploadFileInputEnvelope_1.Upload_file_morphCreateManyUploadFileInputEnvelope)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphUpdateWithWhereUniqueWithoutUploadFileInput_1.Upload_file_morphUpdateWithWhereUniqueWithoutUploadFileInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphUpdateManyWithWhereWithoutUploadFileInput_1.Upload_file_morphUpdateManyWithWhereWithoutUploadFileInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphScalarWhereInput_1.Upload_file_morphScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphUpdateManyWithoutUploadFileInput.prototype, "deleteMany", void 0);
Upload_file_morphUpdateManyWithoutUploadFileInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Upload_file_morphUpdateManyWithoutUploadFileInput);
exports.Upload_file_morphUpdateManyWithoutUploadFileInput = Upload_file_morphUpdateManyWithoutUploadFileInput;
//# sourceMappingURL=Upload_file_morphUpdateManyWithoutUploadFileInput.js.map