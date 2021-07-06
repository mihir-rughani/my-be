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
exports.ItineraryUpdateOneWithoutItinerary_itemsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ItineraryCreateOrConnectWithoutItinerary_itemsInput_1 = require("../inputs/ItineraryCreateOrConnectWithoutItinerary_itemsInput");
const ItineraryCreateWithoutItinerary_itemsInput_1 = require("../inputs/ItineraryCreateWithoutItinerary_itemsInput");
const ItineraryUpdateWithoutItinerary_itemsInput_1 = require("../inputs/ItineraryUpdateWithoutItinerary_itemsInput");
const ItineraryUpsertWithoutItinerary_itemsInput_1 = require("../inputs/ItineraryUpsertWithoutItinerary_itemsInput");
const ItineraryWhereUniqueInput_1 = require("../inputs/ItineraryWhereUniqueInput");
let ItineraryUpdateOneWithoutItinerary_itemsInput = class ItineraryUpdateOneWithoutItinerary_itemsInput {
};
__decorate([
    TypeGraphQL.Field(_type => ItineraryCreateWithoutItinerary_itemsInput_1.ItineraryCreateWithoutItinerary_itemsInput, {
        nullable: true
    }),
    __metadata("design:type", ItineraryCreateWithoutItinerary_itemsInput_1.ItineraryCreateWithoutItinerary_itemsInput)
], ItineraryUpdateOneWithoutItinerary_itemsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryCreateOrConnectWithoutItinerary_itemsInput_1.ItineraryCreateOrConnectWithoutItinerary_itemsInput, {
        nullable: true
    }),
    __metadata("design:type", ItineraryCreateOrConnectWithoutItinerary_itemsInput_1.ItineraryCreateOrConnectWithoutItinerary_itemsInput)
], ItineraryUpdateOneWithoutItinerary_itemsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryUpsertWithoutItinerary_itemsInput_1.ItineraryUpsertWithoutItinerary_itemsInput, {
        nullable: true
    }),
    __metadata("design:type", ItineraryUpsertWithoutItinerary_itemsInput_1.ItineraryUpsertWithoutItinerary_itemsInput)
], ItineraryUpdateOneWithoutItinerary_itemsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryWhereUniqueInput_1.ItineraryWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", ItineraryWhereUniqueInput_1.ItineraryWhereUniqueInput)
], ItineraryUpdateOneWithoutItinerary_itemsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ItineraryUpdateOneWithoutItinerary_itemsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ItineraryUpdateOneWithoutItinerary_itemsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => ItineraryUpdateWithoutItinerary_itemsInput_1.ItineraryUpdateWithoutItinerary_itemsInput, {
        nullable: true
    }),
    __metadata("design:type", ItineraryUpdateWithoutItinerary_itemsInput_1.ItineraryUpdateWithoutItinerary_itemsInput)
], ItineraryUpdateOneWithoutItinerary_itemsInput.prototype, "update", void 0);
ItineraryUpdateOneWithoutItinerary_itemsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ItineraryUpdateOneWithoutItinerary_itemsInput);
exports.ItineraryUpdateOneWithoutItinerary_itemsInput = ItineraryUpdateOneWithoutItinerary_itemsInput;
