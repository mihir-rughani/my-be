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
exports.AggregateFavourites = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const FavouritesAvgAggregate_1 = require("../outputs/FavouritesAvgAggregate");
const FavouritesCountAggregate_1 = require("../outputs/FavouritesCountAggregate");
const FavouritesMaxAggregate_1 = require("../outputs/FavouritesMaxAggregate");
const FavouritesMinAggregate_1 = require("../outputs/FavouritesMinAggregate");
const FavouritesSumAggregate_1 = require("../outputs/FavouritesSumAggregate");
let AggregateFavourites = class AggregateFavourites {
};
__decorate([
    TypeGraphQL.Field(_type => FavouritesCountAggregate_1.FavouritesCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", FavouritesCountAggregate_1.FavouritesCountAggregate)
], AggregateFavourites.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => FavouritesAvgAggregate_1.FavouritesAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", FavouritesAvgAggregate_1.FavouritesAvgAggregate)
], AggregateFavourites.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => FavouritesSumAggregate_1.FavouritesSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", FavouritesSumAggregate_1.FavouritesSumAggregate)
], AggregateFavourites.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => FavouritesMinAggregate_1.FavouritesMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", FavouritesMinAggregate_1.FavouritesMinAggregate)
], AggregateFavourites.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => FavouritesMaxAggregate_1.FavouritesMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", FavouritesMaxAggregate_1.FavouritesMaxAggregate)
], AggregateFavourites.prototype, "_max", void 0);
AggregateFavourites = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateFavourites);
exports.AggregateFavourites = AggregateFavourites;
//# sourceMappingURL=AggregateFavourites.js.map