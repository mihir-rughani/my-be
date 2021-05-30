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
exports.AggregateUpload_file_morph = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Upload_file_morphAvgAggregate_1 = require("../outputs/Upload_file_morphAvgAggregate");
const Upload_file_morphCountAggregate_1 = require("../outputs/Upload_file_morphCountAggregate");
const Upload_file_morphMaxAggregate_1 = require("../outputs/Upload_file_morphMaxAggregate");
const Upload_file_morphMinAggregate_1 = require("../outputs/Upload_file_morphMinAggregate");
const Upload_file_morphSumAggregate_1 = require("../outputs/Upload_file_morphSumAggregate");
let AggregateUpload_file_morph = class AggregateUpload_file_morph {
};
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCountAggregate_1.Upload_file_morphCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphCountAggregate_1.Upload_file_morphCountAggregate)
], AggregateUpload_file_morph.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphAvgAggregate_1.Upload_file_morphAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphAvgAggregate_1.Upload_file_morphAvgAggregate)
], AggregateUpload_file_morph.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphSumAggregate_1.Upload_file_morphSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphSumAggregate_1.Upload_file_morphSumAggregate)
], AggregateUpload_file_morph.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphMinAggregate_1.Upload_file_morphMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphMinAggregate_1.Upload_file_morphMinAggregate)
], AggregateUpload_file_morph.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphMaxAggregate_1.Upload_file_morphMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphMaxAggregate_1.Upload_file_morphMaxAggregate)
], AggregateUpload_file_morph.prototype, "_max", void 0);
AggregateUpload_file_morph = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateUpload_file_morph);
exports.AggregateUpload_file_morph = AggregateUpload_file_morph;
