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
exports.VenuesUpdateWithoutItinerary_placesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const FavouritesUpdateOneWithoutVenueInput_1 = require("../inputs/FavouritesUpdateOneWithoutVenueInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableFloatFieldUpdateOperationsInput_1 = require("../inputs/NullableFloatFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const Upload_file_morphUpdateManyWithoutVenuesInput_1 = require("../inputs/Upload_file_morphUpdateManyWithoutVenuesInput");
const VenueTypeUpdateOneWithoutVenuesInput_1 = require("../inputs/VenueTypeUpdateOneWithoutVenuesInput");
let VenuesUpdateWithoutItinerary_placesInput = class VenuesUpdateWithoutItinerary_placesInput {
};
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "suburb", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "lat", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "lon", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "breakfast", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "lunch", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "dinner", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "visible", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "test", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "cosy", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "romantic", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "weddings", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "post_code", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "bachelor_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "hen_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "outdoor_area", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "outdoor_dinning", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "outdoor_bar", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenueTypeUpdateOneWithoutVenuesInput_1.VenueTypeUpdateOneWithoutVenuesInput, {
        nullable: true
    }),
    __metadata("design:type", VenueTypeUpdateOneWithoutVenuesInput_1.VenueTypeUpdateOneWithoutVenuesInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "venueType", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphUpdateManyWithoutVenuesInput_1.Upload_file_morphUpdateManyWithoutVenuesInput, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphUpdateManyWithoutVenuesInput_1.Upload_file_morphUpdateManyWithoutVenuesInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "uploadFileMorph", void 0);
__decorate([
    TypeGraphQL.Field(_type => FavouritesUpdateOneWithoutVenueInput_1.FavouritesUpdateOneWithoutVenueInput, {
        nullable: true
    }),
    __metadata("design:type", FavouritesUpdateOneWithoutVenueInput_1.FavouritesUpdateOneWithoutVenueInput)
], VenuesUpdateWithoutItinerary_placesInput.prototype, "favourite", void 0);
VenuesUpdateWithoutItinerary_placesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], VenuesUpdateWithoutItinerary_placesInput);
exports.VenuesUpdateWithoutItinerary_placesInput = VenuesUpdateWithoutItinerary_placesInput;
