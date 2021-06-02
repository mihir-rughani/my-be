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
exports.AggregateCities = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CitiesAvgAggregate_1 = require("../outputs/CitiesAvgAggregate");
const CitiesCountAggregate_1 = require("../outputs/CitiesCountAggregate");
const CitiesMaxAggregate_1 = require("../outputs/CitiesMaxAggregate");
const CitiesMinAggregate_1 = require("../outputs/CitiesMinAggregate");
const CitiesSumAggregate_1 = require("../outputs/CitiesSumAggregate");
let AggregateCities = class AggregateCities {
};
__decorate([
    TypeGraphQL.Field(_type => CitiesCountAggregate_1.CitiesCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", CitiesCountAggregate_1.CitiesCountAggregate)
], AggregateCities.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CitiesAvgAggregate_1.CitiesAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", CitiesAvgAggregate_1.CitiesAvgAggregate)
], AggregateCities.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CitiesSumAggregate_1.CitiesSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", CitiesSumAggregate_1.CitiesSumAggregate)
], AggregateCities.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => CitiesMinAggregate_1.CitiesMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", CitiesMinAggregate_1.CitiesMinAggregate)
], AggregateCities.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CitiesMaxAggregate_1.CitiesMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", CitiesMaxAggregate_1.CitiesMaxAggregate)
], AggregateCities.prototype, "_max", void 0);
AggregateCities = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateCities);
exports.AggregateCities = AggregateCities;
//# sourceMappingURL=AggregateCities.js.map