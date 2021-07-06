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
exports.Itinerary_itemsUpdateManyWithoutItineraryInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Itinerary_itemsCreateManyItineraryInputEnvelope_1 = require("../inputs/Itinerary_itemsCreateManyItineraryInputEnvelope");
const Itinerary_itemsCreateOrConnectWithoutItineraryInput_1 = require("../inputs/Itinerary_itemsCreateOrConnectWithoutItineraryInput");
const Itinerary_itemsCreateWithoutItineraryInput_1 = require("../inputs/Itinerary_itemsCreateWithoutItineraryInput");
const Itinerary_itemsScalarWhereInput_1 = require("../inputs/Itinerary_itemsScalarWhereInput");
const Itinerary_itemsUpdateManyWithWhereWithoutItineraryInput_1 = require("../inputs/Itinerary_itemsUpdateManyWithWhereWithoutItineraryInput");
const Itinerary_itemsUpdateWithWhereUniqueWithoutItineraryInput_1 = require("../inputs/Itinerary_itemsUpdateWithWhereUniqueWithoutItineraryInput");
const Itinerary_itemsUpsertWithWhereUniqueWithoutItineraryInput_1 = require("../inputs/Itinerary_itemsUpsertWithWhereUniqueWithoutItineraryInput");
const Itinerary_itemsWhereUniqueInput_1 = require("../inputs/Itinerary_itemsWhereUniqueInput");
let Itinerary_itemsUpdateManyWithoutItineraryInput = class Itinerary_itemsUpdateManyWithoutItineraryInput {
};
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsCreateWithoutItineraryInput_1.Itinerary_itemsCreateWithoutItineraryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsCreateOrConnectWithoutItineraryInput_1.Itinerary_itemsCreateOrConnectWithoutItineraryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsUpsertWithWhereUniqueWithoutItineraryInput_1.Itinerary_itemsUpsertWithWhereUniqueWithoutItineraryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Itinerary_itemsCreateManyItineraryInputEnvelope_1.Itinerary_itemsCreateManyItineraryInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Itinerary_itemsCreateManyItineraryInputEnvelope_1.Itinerary_itemsCreateManyItineraryInputEnvelope)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsWhereUniqueInput_1.Itinerary_itemsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsWhereUniqueInput_1.Itinerary_itemsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsWhereUniqueInput_1.Itinerary_itemsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsWhereUniqueInput_1.Itinerary_itemsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsUpdateWithWhereUniqueWithoutItineraryInput_1.Itinerary_itemsUpdateWithWhereUniqueWithoutItineraryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsUpdateManyWithWhereWithoutItineraryInput_1.Itinerary_itemsUpdateManyWithWhereWithoutItineraryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Itinerary_itemsScalarWhereInput_1.Itinerary_itemsScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], Itinerary_itemsUpdateManyWithoutItineraryInput.prototype, "deleteMany", void 0);
Itinerary_itemsUpdateManyWithoutItineraryInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], Itinerary_itemsUpdateManyWithoutItineraryInput);
exports.Itinerary_itemsUpdateManyWithoutItineraryInput = Itinerary_itemsUpdateManyWithoutItineraryInput;
