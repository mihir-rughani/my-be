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
exports.Upload_fileGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GraphQLScalars = __importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const Upload_fileAvgAggregate_1 = require("../outputs/Upload_fileAvgAggregate");
const Upload_fileCountAggregate_1 = require("../outputs/Upload_fileCountAggregate");
const Upload_fileMaxAggregate_1 = require("../outputs/Upload_fileMaxAggregate");
const Upload_fileMinAggregate_1 = require("../outputs/Upload_fileMinAggregate");
const Upload_fileSumAggregate_1 = require("../outputs/Upload_fileSumAggregate");
let Upload_fileGroupBy = class Upload_fileGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Upload_fileGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Upload_fileGroupBy.prototype, "alternativeText", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Upload_fileGroupBy.prototype, "caption", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "width", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "height", void 0);
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Upload_fileGroupBy.prototype, "formats", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Upload_fileGroupBy.prototype, "hash", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Upload_fileGroupBy.prototype, "ext", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Upload_fileGroupBy.prototype, "mime", void 0);
__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: false
    }),
    __metadata("design:type", client_1.Prisma.Decimal)
], Upload_fileGroupBy.prototype, "size", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Upload_fileGroupBy.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Upload_fileGroupBy.prototype, "previewUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Upload_fileGroupBy.prototype, "provider", void 0);
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Upload_fileGroupBy.prototype, "provider_metadata", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Upload_fileGroupBy.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Upload_fileGroupBy.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_fileCountAggregate_1.Upload_fileCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_fileCountAggregate_1.Upload_fileCountAggregate)
], Upload_fileGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_fileAvgAggregate_1.Upload_fileAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_fileAvgAggregate_1.Upload_fileAvgAggregate)
], Upload_fileGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_fileSumAggregate_1.Upload_fileSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_fileSumAggregate_1.Upload_fileSumAggregate)
], Upload_fileGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_fileMinAggregate_1.Upload_fileMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_fileMinAggregate_1.Upload_fileMinAggregate)
], Upload_fileGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_fileMaxAggregate_1.Upload_fileMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Upload_fileMaxAggregate_1.Upload_fileMaxAggregate)
], Upload_fileGroupBy.prototype, "_max", void 0);
Upload_fileGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], Upload_fileGroupBy);
exports.Upload_fileGroupBy = Upload_fileGroupBy;
