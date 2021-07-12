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
var FavouritesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouritesWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const JsonNullableFilter_1 = require("../inputs/JsonNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const VenuesRelationFilter_1 = require("../inputs/VenuesRelationFilter");
let FavouritesWhereInput = FavouritesWhereInput_1 = class FavouritesWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [FavouritesWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FavouritesWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FavouritesWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FavouritesWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FavouritesWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FavouritesWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], FavouritesWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], FavouritesWhereInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => JsonNullableFilter_1.JsonNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", JsonNullableFilter_1.JsonNullableFilter)
], FavouritesWhereInput.prototype, "bestFor", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], FavouritesWhereInput.prototype, "venue_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], FavouritesWhereInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], FavouritesWhereInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], FavouritesWhereInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], FavouritesWhereInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenuesRelationFilter_1.VenuesRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", VenuesRelationFilter_1.VenuesRelationFilter)
], FavouritesWhereInput.prototype, "venue", void 0);
FavouritesWhereInput = FavouritesWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], FavouritesWhereInput);
exports.FavouritesWhereInput = FavouritesWhereInput;
//# sourceMappingURL=FavouritesWhereInput.js.map