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
exports.RestaurantsGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantsAvgAggregate_1 = require("../outputs/RestaurantsAvgAggregate");
const RestaurantsCountAggregate_1 = require("../outputs/RestaurantsCountAggregate");
const RestaurantsMaxAggregate_1 = require("../outputs/RestaurantsMaxAggregate");
const RestaurantsMinAggregate_1 = require("../outputs/RestaurantsMinAggregate");
const RestaurantsSumAggregate_1 = require("../outputs/RestaurantsSumAggregate");
let RestaurantsGroupBy = class RestaurantsGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], RestaurantsGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantsGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantsGroupBy.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RestaurantsGroupBy.prototype, "lat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RestaurantsGroupBy.prototype, "lon", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantsGroupBy.prototype, "suburb", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantsGroupBy.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RestaurantsGroupBy.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantsGroupBy.prototype, "published_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RestaurantsGroupBy.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RestaurantsGroupBy.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantsGroupBy.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantsGroupBy.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantsGroupBy.prototype, "breakfast", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantsGroupBy.prototype, "lunch", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantsGroupBy.prototype, "dinner", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantsGroupBy.prototype, "bachelorParty", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantsGroupBy.prototype, "henParty", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RestaurantsGroupBy.prototype, "restaurant_image", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsCountAggregate_1.RestaurantsCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsCountAggregate_1.RestaurantsCountAggregate)
], RestaurantsGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsAvgAggregate_1.RestaurantsAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsAvgAggregate_1.RestaurantsAvgAggregate)
], RestaurantsGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsSumAggregate_1.RestaurantsSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsSumAggregate_1.RestaurantsSumAggregate)
], RestaurantsGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsMinAggregate_1.RestaurantsMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsMinAggregate_1.RestaurantsMinAggregate)
], RestaurantsGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantsMaxAggregate_1.RestaurantsMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantsMaxAggregate_1.RestaurantsMaxAggregate)
], RestaurantsGroupBy.prototype, "_max", void 0);
RestaurantsGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], RestaurantsGroupBy);
exports.RestaurantsGroupBy = RestaurantsGroupBy;
//# sourceMappingURL=RestaurantsGroupBy.js.map