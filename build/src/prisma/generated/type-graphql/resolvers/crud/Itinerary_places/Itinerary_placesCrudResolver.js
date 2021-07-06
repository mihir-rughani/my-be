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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itinerary_placesCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateItinerary_placesArgs_1 = require("./args/AggregateItinerary_placesArgs");
const CreateItinerary_placesArgs_1 = require("./args/CreateItinerary_placesArgs");
const CreateManyItinerary_placesArgs_1 = require("./args/CreateManyItinerary_placesArgs");
const DeleteItinerary_placesArgs_1 = require("./args/DeleteItinerary_placesArgs");
const DeleteManyItinerary_placesArgs_1 = require("./args/DeleteManyItinerary_placesArgs");
const FindFirstItinerary_placesArgs_1 = require("./args/FindFirstItinerary_placesArgs");
const FindManyItinerary_placesArgs_1 = require("./args/FindManyItinerary_placesArgs");
const FindUniqueItinerary_placesArgs_1 = require("./args/FindUniqueItinerary_placesArgs");
const GroupByItinerary_placesArgs_1 = require("./args/GroupByItinerary_placesArgs");
const UpdateItinerary_placesArgs_1 = require("./args/UpdateItinerary_placesArgs");
const UpdateManyItinerary_placesArgs_1 = require("./args/UpdateManyItinerary_placesArgs");
const UpsertItinerary_placesArgs_1 = require("./args/UpsertItinerary_placesArgs");
const helpers_1 = require("../../../helpers");
const Itinerary_places_1 = require("../../../models/Itinerary_places");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateItinerary_places_1 = require("../../outputs/AggregateItinerary_places");
const Itinerary_placesGroupBy_1 = require("../../outputs/Itinerary_placesGroupBy");
let Itinerary_placesCrudResolver = class Itinerary_placesCrudResolver {
    async findUniqueItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findManyItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertItinerary_places(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateItinerary_places(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByItinerary_places(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_places.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Itinerary_places_1.Itinerary_places, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueItinerary_placesArgs_1.FindUniqueItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "findUniqueItinerary_places", null);
__decorate([
    TypeGraphQL.Query(_returns => Itinerary_places_1.Itinerary_places, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstItinerary_placesArgs_1.FindFirstItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "findFirstItinerary_places", null);
__decorate([
    TypeGraphQL.Query(_returns => [Itinerary_places_1.Itinerary_places], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyItinerary_placesArgs_1.FindManyItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "findManyItinerary_places", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_places_1.Itinerary_places, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateItinerary_placesArgs_1.CreateItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "createItinerary_places", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyItinerary_placesArgs_1.CreateManyItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "createManyItinerary_places", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_places_1.Itinerary_places, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteItinerary_placesArgs_1.DeleteItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "deleteItinerary_places", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_places_1.Itinerary_places, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateItinerary_placesArgs_1.UpdateItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "updateItinerary_places", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyItinerary_placesArgs_1.DeleteManyItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "deleteManyItinerary_places", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyItinerary_placesArgs_1.UpdateManyItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "updateManyItinerary_places", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_places_1.Itinerary_places, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertItinerary_placesArgs_1.UpsertItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "upsertItinerary_places", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateItinerary_places_1.AggregateItinerary_places, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateItinerary_placesArgs_1.AggregateItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "aggregateItinerary_places", null);
__decorate([
    TypeGraphQL.Query(_returns => [Itinerary_placesGroupBy_1.Itinerary_placesGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByItinerary_placesArgs_1.GroupByItinerary_placesArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_placesCrudResolver.prototype, "groupByItinerary_places", null);
Itinerary_placesCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Itinerary_places_1.Itinerary_places)
], Itinerary_placesCrudResolver);
exports.Itinerary_placesCrudResolver = Itinerary_placesCrudResolver;
//# sourceMappingURL=Itinerary_placesCrudResolver.js.map