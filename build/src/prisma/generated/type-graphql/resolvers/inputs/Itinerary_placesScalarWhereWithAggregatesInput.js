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
var Itinerary_placesScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itinerary_placesScalarWhereWithAggregatesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const JsonNullableWithAggregatesFilter_1 = require("../inputs/JsonNullableWithAggregatesFilter");
const JsonWithAggregatesFilter_1 = require("../inputs/JsonWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
let Itinerary_placesScalarWhereWithAggregatesInput = Itinerary_placesScalarWhereWithAggregatesInput_1 = class Itinerary_placesScalarWhereWithAggregatesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_placesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_placesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_placesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "itinerary_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => JsonWithAggregatesFilter_1.JsonWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", JsonWithAggregatesFilter_1.JsonWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "venue_data", void 0);
__decorate([
    TypeGraphQL.Field(_type => JsonNullableWithAggregatesFilter_1.JsonNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", JsonNullableWithAggregatesFilter_1.JsonNullableWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "bestFor", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "time", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Itinerary_placesScalarWhereWithAggregatesInput.prototype, "venue_id", void 0);
Itinerary_placesScalarWhereWithAggregatesInput = Itinerary_placesScalarWhereWithAggregatesInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Itinerary_placesScalarWhereWithAggregatesInput);
exports.Itinerary_placesScalarWhereWithAggregatesInput = Itinerary_placesScalarWhereWithAggregatesInput;
//# sourceMappingURL=Itinerary_placesScalarWhereWithAggregatesInput.js.map