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
exports.VenuesCreateWithoutVenueTypeInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const FavouritesCreateNestedOneWithoutVenueInput_1 = require("../inputs/FavouritesCreateNestedOneWithoutVenueInput");
const Itinerary_placesCreateNestedOneWithoutVenueInput_1 = require("../inputs/Itinerary_placesCreateNestedOneWithoutVenueInput");
const Upload_file_morphCreateNestedManyWithoutVenuesInput_1 = require("../inputs/Upload_file_morphCreateNestedManyWithoutVenuesInput");
let VenuesCreateWithoutVenueTypeInput = class VenuesCreateWithoutVenueTypeInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutVenueTypeInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutVenueTypeInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutVenueTypeInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutVenueTypeInput.prototype, "suburb", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutVenueTypeInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutVenueTypeInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutVenueTypeInput.prototype, "lat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutVenueTypeInput.prototype, "lon", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutVenueTypeInput.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "breakfast", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "lunch", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "dinner", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "visible", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutVenueTypeInput.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], VenuesCreateWithoutVenueTypeInput.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], VenuesCreateWithoutVenueTypeInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], VenuesCreateWithoutVenueTypeInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutVenueTypeInput.prototype, "test", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "cosy", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "romantic", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "weddings", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], VenuesCreateWithoutVenueTypeInput.prototype, "post_code", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "bachelor_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "hen_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "outdoor_area", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "outdoor_dinning", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], VenuesCreateWithoutVenueTypeInput.prototype, "outdoor_bar", void 0);
__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCreateNestedManyWithoutVenuesInput_1.Upload_file_morphCreateNestedManyWithoutVenuesInput, {
        nullable: true
    }),
    __metadata("design:type", Upload_file_morphCreateNestedManyWithoutVenuesInput_1.Upload_file_morphCreateNestedManyWithoutVenuesInput)
], VenuesCreateWithoutVenueTypeInput.prototype, "uploadFileMorph", void 0);
__decorate([
    TypeGraphQL.Field(_type => FavouritesCreateNestedOneWithoutVenueInput_1.FavouritesCreateNestedOneWithoutVenueInput, {
        nullable: true
    }),
    __metadata("design:type", FavouritesCreateNestedOneWithoutVenueInput_1.FavouritesCreateNestedOneWithoutVenueInput)
], VenuesCreateWithoutVenueTypeInput.prototype, "favourite", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_placesCreateNestedOneWithoutVenueInput_1.Itinerary_placesCreateNestedOneWithoutVenueInput, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_placesCreateNestedOneWithoutVenueInput_1.Itinerary_placesCreateNestedOneWithoutVenueInput)
], VenuesCreateWithoutVenueTypeInput.prototype, "itinerary_places", void 0);
VenuesCreateWithoutVenueTypeInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], VenuesCreateWithoutVenueTypeInput);
exports.VenuesCreateWithoutVenueTypeInput = VenuesCreateWithoutVenueTypeInput;
//# sourceMappingURL=VenuesCreateWithoutVenueTypeInput.js.map