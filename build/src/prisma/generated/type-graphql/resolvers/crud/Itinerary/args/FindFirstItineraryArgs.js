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
exports.FindFirstItineraryArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ItineraryOrderByInput_1 = require("../../../inputs/ItineraryOrderByInput");
const ItineraryWhereInput_1 = require("../../../inputs/ItineraryWhereInput");
const ItineraryWhereUniqueInput_1 = require("../../../inputs/ItineraryWhereUniqueInput");
const ItineraryScalarFieldEnum_1 = require("../../../../enums/ItineraryScalarFieldEnum");
let FindFirstItineraryArgs = class FindFirstItineraryArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ItineraryWhereInput_1.ItineraryWhereInput, {
        nullable: true
    }),
    __metadata("design:type", ItineraryWhereInput_1.ItineraryWhereInput)
], FindFirstItineraryArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ItineraryOrderByInput_1.ItineraryOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstItineraryArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryWhereUniqueInput_1.ItineraryWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", ItineraryWhereUniqueInput_1.ItineraryWhereUniqueInput)
], FindFirstItineraryArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstItineraryArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstItineraryArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ItineraryScalarFieldEnum_1.ItineraryScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstItineraryArgs.prototype, "distinct", void 0);
FindFirstItineraryArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstItineraryArgs);
exports.FindFirstItineraryArgs = FindFirstItineraryArgs;
//# sourceMappingURL=FindFirstItineraryArgs.js.map