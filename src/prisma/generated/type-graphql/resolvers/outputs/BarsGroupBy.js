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
exports.BarsGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BarsAvgAggregate_1 = require("../outputs/BarsAvgAggregate");
const BarsCountAggregate_1 = require("../outputs/BarsCountAggregate");
const BarsMaxAggregate_1 = require("../outputs/BarsMaxAggregate");
const BarsMinAggregate_1 = require("../outputs/BarsMinAggregate");
const BarsSumAggregate_1 = require("../outputs/BarsSumAggregate");
let BarsGroupBy = class BarsGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], BarsGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], BarsGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], BarsGroupBy.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], BarsGroupBy.prototype, "suburb", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], BarsGroupBy.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], BarsGroupBy.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], BarsGroupBy.prototype, "lat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], BarsGroupBy.prototype, "lon", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], BarsGroupBy.prototype, "breakfast", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], BarsGroupBy.prototype, "lunch", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], BarsGroupBy.prototype, "dinner", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], BarsGroupBy.prototype, "bachelorParty", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], BarsGroupBy.prototype, "henParty", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], BarsGroupBy.prototype, "visible", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], BarsGroupBy.prototype, "published_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], BarsGroupBy.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], BarsGroupBy.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], BarsGroupBy.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], BarsGroupBy.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => BarsCountAggregate_1.BarsCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", BarsCountAggregate_1.BarsCountAggregate)
], BarsGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => BarsAvgAggregate_1.BarsAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", BarsAvgAggregate_1.BarsAvgAggregate)
], BarsGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => BarsSumAggregate_1.BarsSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", BarsSumAggregate_1.BarsSumAggregate)
], BarsGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => BarsMinAggregate_1.BarsMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", BarsMinAggregate_1.BarsMinAggregate)
], BarsGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => BarsMaxAggregate_1.BarsMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", BarsMaxAggregate_1.BarsMaxAggregate)
], BarsGroupBy.prototype, "_max", void 0);
BarsGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], BarsGroupBy);
exports.BarsGroupBy = BarsGroupBy;
