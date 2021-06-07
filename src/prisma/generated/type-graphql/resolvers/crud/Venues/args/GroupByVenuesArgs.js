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
exports.GroupByVenuesArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const VenuesOrderByInput_1 = require("../../../inputs/VenuesOrderByInput");
const VenuesScalarWhereWithAggregatesInput_1 = require("../../../inputs/VenuesScalarWhereWithAggregatesInput");
const VenuesWhereInput_1 = require("../../../inputs/VenuesWhereInput");
const VenuesScalarFieldEnum_1 = require("../../../../enums/VenuesScalarFieldEnum");
let GroupByVenuesArgs = class GroupByVenuesArgs {
};
__decorate([
    TypeGraphQL.Field(_type => VenuesWhereInput_1.VenuesWhereInput, {
        nullable: true
    }),
    __metadata("design:type", VenuesWhereInput_1.VenuesWhereInput)
], GroupByVenuesArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [VenuesOrderByInput_1.VenuesOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupByVenuesArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [VenuesScalarFieldEnum_1.VenuesScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByVenuesArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenuesScalarWhereWithAggregatesInput_1.VenuesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", VenuesScalarWhereWithAggregatesInput_1.VenuesScalarWhereWithAggregatesInput)
], GroupByVenuesArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByVenuesArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByVenuesArgs.prototype, "skip", void 0);
GroupByVenuesArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByVenuesArgs);
exports.GroupByVenuesArgs = GroupByVenuesArgs;
