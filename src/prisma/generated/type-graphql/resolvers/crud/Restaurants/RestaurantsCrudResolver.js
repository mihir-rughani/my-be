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
exports.RestaurantsCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateRestaurantsArgs_1 = require("./args/AggregateRestaurantsArgs");
const CreateManyRestaurantsArgs_1 = require("./args/CreateManyRestaurantsArgs");
const CreateRestaurantsArgs_1 = require("./args/CreateRestaurantsArgs");
const DeleteManyRestaurantsArgs_1 = require("./args/DeleteManyRestaurantsArgs");
const DeleteRestaurantsArgs_1 = require("./args/DeleteRestaurantsArgs");
const FindFirstRestaurantsArgs_1 = require("./args/FindFirstRestaurantsArgs");
const FindManyRestaurantsArgs_1 = require("./args/FindManyRestaurantsArgs");
const FindUniqueRestaurantsArgs_1 = require("./args/FindUniqueRestaurantsArgs");
const GroupByRestaurantsArgs_1 = require("./args/GroupByRestaurantsArgs");
const UpdateManyRestaurantsArgs_1 = require("./args/UpdateManyRestaurantsArgs");
const UpdateRestaurantsArgs_1 = require("./args/UpdateRestaurantsArgs");
const UpsertRestaurantsArgs_1 = require("./args/UpsertRestaurantsArgs");
const helpers_1 = require("../../../helpers");
const Restaurants_1 = require("../../../models/Restaurants");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRestaurants_1 = require("../../outputs/AggregateRestaurants");
const RestaurantsGroupBy_1 = require("../../outputs/RestaurantsGroupBy");
let RestaurantsCrudResolver = class RestaurantsCrudResolver {
    async findUniqueRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findManyRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertRestaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateRestaurants(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurants.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByRestaurants(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurants.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Restaurants_1.Restaurants, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueRestaurantsArgs_1.FindUniqueRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "findUniqueRestaurants", null);
__decorate([
    TypeGraphQL.Query(_returns => Restaurants_1.Restaurants, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstRestaurantsArgs_1.FindFirstRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "findFirstRestaurants", null);
__decorate([
    TypeGraphQL.Query(_returns => [Restaurants_1.Restaurants], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyRestaurantsArgs_1.FindManyRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "findManyRestaurants", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Restaurants_1.Restaurants, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateRestaurantsArgs_1.CreateRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "createRestaurants", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyRestaurantsArgs_1.CreateManyRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "createManyRestaurants", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Restaurants_1.Restaurants, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteRestaurantsArgs_1.DeleteRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "deleteRestaurants", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Restaurants_1.Restaurants, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateRestaurantsArgs_1.UpdateRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "updateRestaurants", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyRestaurantsArgs_1.DeleteManyRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "deleteManyRestaurants", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyRestaurantsArgs_1.UpdateManyRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "updateManyRestaurants", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Restaurants_1.Restaurants, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertRestaurantsArgs_1.UpsertRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "upsertRestaurants", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateRestaurants_1.AggregateRestaurants, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateRestaurantsArgs_1.AggregateRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "aggregateRestaurants", null);
__decorate([
    TypeGraphQL.Query(_returns => [RestaurantsGroupBy_1.RestaurantsGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByRestaurantsArgs_1.GroupByRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsCrudResolver.prototype, "groupByRestaurants", null);
RestaurantsCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Restaurants_1.Restaurants)
], RestaurantsCrudResolver);
exports.RestaurantsCrudResolver = RestaurantsCrudResolver;
