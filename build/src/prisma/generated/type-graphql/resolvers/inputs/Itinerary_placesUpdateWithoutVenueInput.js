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
exports.Itinerary_placesUpdateWithoutVenueInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GraphQLScalars = __importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const ItineraryUpdateOneWithoutPlacesInput_1 = require("../inputs/ItineraryUpdateOneWithoutPlacesInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let Itinerary_placesUpdateWithoutVenueInput = class Itinerary_placesUpdateWithoutVenueInput {
};
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "venue_data", void 0);
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "bestFor", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "time", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryUpdateOneWithoutPlacesInput_1.ItineraryUpdateOneWithoutPlacesInput, {
        nullable: true
    }),
    __metadata("design:type", ItineraryUpdateOneWithoutPlacesInput_1.ItineraryUpdateOneWithoutPlacesInput)
], Itinerary_placesUpdateWithoutVenueInput.prototype, "itinerary", void 0);
Itinerary_placesUpdateWithoutVenueInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Itinerary_placesUpdateWithoutVenueInput);
exports.Itinerary_placesUpdateWithoutVenueInput = Itinerary_placesUpdateWithoutVenueInput;
//# sourceMappingURL=Itinerary_placesUpdateWithoutVenueInput.js.map