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
exports.Venues = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
let Venues = class Venues {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], Venues.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Venues.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Venues.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Venues.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Venues.prototype, "suburb", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Venues.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Venues.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Venues.prototype, "lat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Venues.prototype, "lon", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Venues.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Venues.prototype, "venue_type", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "breakfast", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "lunch", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "dinner", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "visible", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Venues.prototype, "created_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Venues.prototype, "updated_by", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Venues.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Venues.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Venues.prototype, "test", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "cosy", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "romantic", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "weddings", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Venues.prototype, "post_code", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "bachelor_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "hen_party", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "outdoor_area", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "outdoor_dinning", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], Venues.prototype, "outdoor_bar", void 0);
Venues = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], Venues);
exports.Venues = Venues;
//# sourceMappingURL=Venues.js.map