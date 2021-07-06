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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateItineraryArgs_1 = require("./args/AggregateItineraryArgs");
const CreateItineraryArgs_1 = require("./args/CreateItineraryArgs");
const CreateManyItineraryArgs_1 = require("./args/CreateManyItineraryArgs");
const DeleteItineraryArgs_1 = require("./args/DeleteItineraryArgs");
const DeleteManyItineraryArgs_1 = require("./args/DeleteManyItineraryArgs");
const FindFirstItineraryArgs_1 = require("./args/FindFirstItineraryArgs");
const FindManyItineraryArgs_1 = require("./args/FindManyItineraryArgs");
const FindUniqueItineraryArgs_1 = require("./args/FindUniqueItineraryArgs");
const GroupByItineraryArgs_1 = require("./args/GroupByItineraryArgs");
const UpdateItineraryArgs_1 = require("./args/UpdateItineraryArgs");
const UpdateManyItineraryArgs_1 = require("./args/UpdateManyItineraryArgs");
const UpsertItineraryArgs_1 = require("./args/UpsertItineraryArgs");
const helpers_1 = require("../../../helpers");
const Itinerary_1 = require("../../../models/Itinerary");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateItinerary_1 = require("../../outputs/AggregateItinerary");
const ItineraryGroupBy_1 = require("../../outputs/ItineraryGroupBy");
let ItineraryCrudResolver = class ItineraryCrudResolver {
    async itinerary(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstItinerary(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async itineraries(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createItinerary(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyItinerary(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteItinerary(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateItinerary(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyItinerary(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyItinerary(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertItinerary(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateItinerary(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).itinerary.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByItinerary(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Itinerary_1.Itinerary, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueItineraryArgs_1.FindUniqueItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "itinerary", null);
__decorate([
    TypeGraphQL.Query(_returns => Itinerary_1.Itinerary, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstItineraryArgs_1.FindFirstItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "findFirstItinerary", null);
__decorate([
    TypeGraphQL.Query(_returns => [Itinerary_1.Itinerary], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyItineraryArgs_1.FindManyItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "itineraries", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_1.Itinerary, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateItineraryArgs_1.CreateItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "createItinerary", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyItineraryArgs_1.CreateManyItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "createManyItinerary", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_1.Itinerary, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteItineraryArgs_1.DeleteItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "deleteItinerary", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_1.Itinerary, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateItineraryArgs_1.UpdateItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "updateItinerary", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyItineraryArgs_1.DeleteManyItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "deleteManyItinerary", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyItineraryArgs_1.UpdateManyItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "updateManyItinerary", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_1.Itinerary, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertItineraryArgs_1.UpsertItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "upsertItinerary", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateItinerary_1.AggregateItinerary, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateItineraryArgs_1.AggregateItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "aggregateItinerary", null);
__decorate([
    TypeGraphQL.Query(_returns => [ItineraryGroupBy_1.ItineraryGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByItineraryArgs_1.GroupByItineraryArgs]),
    __metadata("design:returntype", Promise)
], ItineraryCrudResolver.prototype, "groupByItinerary", null);
ItineraryCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Itinerary_1.Itinerary)
], ItineraryCrudResolver);
exports.ItineraryCrudResolver = ItineraryCrudResolver;
