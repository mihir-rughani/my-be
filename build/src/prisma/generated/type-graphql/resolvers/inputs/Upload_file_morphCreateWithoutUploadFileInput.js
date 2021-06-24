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
exports.Upload_file_morphCreateWithoutUploadFileInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const VenuesCreateNestedOneWithoutUploadFileMorphInput_1 = require("../inputs/VenuesCreateNestedOneWithoutUploadFileMorphInput");
let Upload_file_morphCreateWithoutUploadFileInput = class Upload_file_morphCreateWithoutUploadFileInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Upload_file_morphCreateWithoutUploadFileInput.prototype, "related_type", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Upload_file_morphCreateWithoutUploadFileInput.prototype, "field", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Upload_file_morphCreateWithoutUploadFileInput.prototype, "order", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenuesCreateNestedOneWithoutUploadFileMorphInput_1.VenuesCreateNestedOneWithoutUploadFileMorphInput, {
        nullable: true
    }),
    __metadata("design:type", VenuesCreateNestedOneWithoutUploadFileMorphInput_1.VenuesCreateNestedOneWithoutUploadFileMorphInput)
], Upload_file_morphCreateWithoutUploadFileInput.prototype, "venues", void 0);
Upload_file_morphCreateWithoutUploadFileInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Upload_file_morphCreateWithoutUploadFileInput);
exports.Upload_file_morphCreateWithoutUploadFileInput = Upload_file_morphCreateWithoutUploadFileInput;
//# sourceMappingURL=Upload_file_morphCreateWithoutUploadFileInput.js.map