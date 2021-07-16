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
var FavouritesScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouritesScalarWhereWithAggregatesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const JsonNullableWithAggregatesFilter_1 = require("../inputs/JsonNullableWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
let FavouritesScalarWhereWithAggregatesInput = FavouritesScalarWhereWithAggregatesInput_1 = class FavouritesScalarWhereWithAggregatesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [FavouritesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FavouritesScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FavouritesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FavouritesScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FavouritesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FavouritesScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], FavouritesScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], FavouritesScalarWhereWithAggregatesInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => JsonNullableWithAggregatesFilter_1.JsonNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", JsonNullableWithAggregatesFilter_1.JsonNullableWithAggregatesFilter)
], FavouritesScalarWhereWithAggregatesInput.prototype, "bestFor", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], FavouritesScalarWhereWithAggregatesInput.prototype, "venue_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], FavouritesScalarWhereWithAggregatesInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], FavouritesScalarWhereWithAggregatesInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], FavouritesScalarWhereWithAggregatesInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], FavouritesScalarWhereWithAggregatesInput.prototype, "updated_at", void 0);
FavouritesScalarWhereWithAggregatesInput = FavouritesScalarWhereWithAggregatesInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], FavouritesScalarWhereWithAggregatesInput);
exports.FavouritesScalarWhereWithAggregatesInput = FavouritesScalarWhereWithAggregatesInput;
//# sourceMappingURL=FavouritesScalarWhereWithAggregatesInput.js.map