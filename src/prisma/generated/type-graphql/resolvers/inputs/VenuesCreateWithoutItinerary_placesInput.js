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
exports.VenuesCreateWithoutItinerary_placesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const FavouritesCreateNestedOneWithoutVenueInput_1 = require("../inputs/FavouritesCreateNestedOneWithoutVenueInput");
const Upload_file_morphCreateNestedManyWithoutVenuesInput_1 = require("../inputs/Upload_file_morphCreateNestedManyWithoutVenuesInput");
const VenueTypeCreateNestedOneWithoutVenuesInput_1 = require("../inputs/VenueTypeCreateNestedOneWithoutVenuesInput");
let VenuesCreateWithoutItinerary_placesInput = class VenuesCreateWithoutItinerary_placesInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutItinerary_placesInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutItinerary_placesInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutItinerary_placesInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutItinerary_placesInput.prototype, "suburb", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutItinerary_placesInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutItinerary_placesInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutItinerary_placesInput.prototype, "lat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutItinerary_placesInput.prototype, "lon", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutItinerary_placesInput.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "breakfast", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "lunch", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "dinner", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "visible", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutItinerary_placesInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutItinerary_placesInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], VenuesCreateWithoutItinerary_placesInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], VenuesCreateWithoutItinerary_placesInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutItinerary_placesInput.prototype, "test", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "cosy", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "romantic", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "weddings", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutItinerary_placesInput.prototype, "post_code", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "bachelor_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "hen_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "outdoor_area", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "outdoor_dinning", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutItinerary_placesInput.prototype, "outdoor_bar", void 0);
__decorate([
    TypeGraphQL.Field(_type => VenueTypeCreateNestedOneWithoutVenuesInput_1.VenueTypeCreateNestedOneWithoutVenuesInput, {
        nullable: true
    }),
    __metadata("design:type", VenueTypeCreateNestedOneWithoutVenuesInput_1.VenueTypeCreateNestedOneWithoutVenuesInput)
], VenuesCreateWithoutItinerary_placesInput.prototype, "venueType", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCreateNestedManyWithoutVenuesInput_1.Upload_file_morphCreateNestedManyWithoutVenuesInput, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphCreateNestedManyWithoutVenuesInput_1.Upload_file_morphCreateNestedManyWithoutVenuesInput)
], VenuesCreateWithoutItinerary_placesInput.prototype, "uploadFileMorph", void 0);
__decorate([
    TypeGraphQL.Field(_type => FavouritesCreateNestedOneWithoutVenueInput_1.FavouritesCreateNestedOneWithoutVenueInput, {
        nullable: true
    }),
    __metadata("design:type", FavouritesCreateNestedOneWithoutVenueInput_1.FavouritesCreateNestedOneWithoutVenueInput)
], VenuesCreateWithoutItinerary_placesInput.prototype, "favourite", void 0);
VenuesCreateWithoutItinerary_placesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], VenuesCreateWithoutItinerary_placesInput);
exports.VenuesCreateWithoutItinerary_placesInput = VenuesCreateWithoutItinerary_placesInput;
