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
exports.Upload_file_morphCreateNestedManyWithoutRestaurantsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Upload_file_morphCreateManyRestaurantsInputEnvelope_1 = require("../inputs/Upload_file_morphCreateManyRestaurantsInputEnvelope");
const Upload_file_morphCreateOrConnectWithoutRestaurantsInput_1 = require("../inputs/Upload_file_morphCreateOrConnectWithoutRestaurantsInput");
const Upload_file_morphCreateWithoutRestaurantsInput_1 = require("../inputs/Upload_file_morphCreateWithoutRestaurantsInput");
const Upload_file_morphWhereUniqueInput_1 = require("../inputs/Upload_file_morphWhereUniqueInput");
let Upload_file_morphCreateNestedManyWithoutRestaurantsInput = class Upload_file_morphCreateNestedManyWithoutRestaurantsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphCreateWithoutRestaurantsInput_1.Upload_file_morphCreateWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphCreateNestedManyWithoutRestaurantsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphCreateOrConnectWithoutRestaurantsInput_1.Upload_file_morphCreateOrConnectWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphCreateNestedManyWithoutRestaurantsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCreateManyRestaurantsInputEnvelope_1.Upload_file_morphCreateManyRestaurantsInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphCreateManyRestaurantsInputEnvelope_1.Upload_file_morphCreateManyRestaurantsInputEnvelope)
], Upload_file_morphCreateNestedManyWithoutRestaurantsInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Upload_file_morphCreateNestedManyWithoutRestaurantsInput.prototype, "connect", void 0);
Upload_file_morphCreateNestedManyWithoutRestaurantsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Upload_file_morphCreateNestedManyWithoutRestaurantsInput);
exports.Upload_file_morphCreateNestedManyWithoutRestaurantsInput = Upload_file_morphCreateNestedManyWithoutRestaurantsInput;
//# sourceMappingURL=Upload_file_morphCreateNestedManyWithoutRestaurantsInput.js.map