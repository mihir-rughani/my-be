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
exports.VenuesCreateWithoutFavouriteInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Itinerary_placesCreateNestedOneWithoutVenueInput_1 = require("../inputs/Itinerary_placesCreateNestedOneWithoutVenueInput");
const Upload_file_morphCreateNestedManyWithoutVenuesInput_1 = require("../inputs/Upload_file_morphCreateNestedManyWithoutVenuesInput");
const VenueTypeCreateNestedOneWithoutVenuesInput_1 = require("../inputs/VenueTypeCreateNestedOneWithoutVenuesInput");
let VenuesCreateWithoutFavouriteInput = class VenuesCreateWithoutFavouriteInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutFavouriteInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutFavouriteInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutFavouriteInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutFavouriteInput.prototype, "suburb", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutFavouriteInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutFavouriteInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutFavouriteInput.prototype, "lat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutFavouriteInput.prototype, "lon", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutFavouriteInput.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "breakfast", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "lunch", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "dinner", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "visible", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutFavouriteInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutFavouriteInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], VenuesCreateWithoutFavouriteInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], VenuesCreateWithoutFavouriteInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutFavouriteInput.prototype, "test", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "cosy", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "romantic", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "weddings", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutFavouriteInput.prototype, "post_code", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "bachelor_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "hen_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "outdoor_area", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "outdoor_dinning", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutFavouriteInput.prototype, "outdoor_bar", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenueTypeCreateNestedOneWithoutVenuesInput_1.VenueTypeCreateNestedOneWithoutVenuesInput, {
        nullable: true
    }),
    __metadata("design:type", VenueTypeCreateNestedOneWithoutVenuesInput_1.VenueTypeCreateNestedOneWithoutVenuesInput)
], VenuesCreateWithoutFavouriteInput.prototype, "venueType", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCreateNestedManyWithoutVenuesInput_1.Upload_file_morphCreateNestedManyWithoutVenuesInput, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphCreateNestedManyWithoutVenuesInput_1.Upload_file_morphCreateNestedManyWithoutVenuesInput)
], VenuesCreateWithoutFavouriteInput.prototype, "uploadFileMorph", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesCreateNestedOneWithoutVenueInput_1.Itinerary_placesCreateNestedOneWithoutVenueInput, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesCreateNestedOneWithoutVenueInput_1.Itinerary_placesCreateNestedOneWithoutVenueInput)
], VenuesCreateWithoutFavouriteInput.prototype, "itinerary_places", void 0);
VenuesCreateWithoutFavouriteInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], VenuesCreateWithoutFavouriteInput);
exports.VenuesCreateWithoutFavouriteInput = VenuesCreateWithoutFavouriteInput;
