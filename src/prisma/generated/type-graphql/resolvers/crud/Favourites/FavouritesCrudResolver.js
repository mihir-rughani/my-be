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
exports.FavouritesCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateFavouritesArgs_1 = require("./args/AggregateFavouritesArgs");
const CreateFavouritesArgs_1 = require("./args/CreateFavouritesArgs");
const CreateManyFavouritesArgs_1 = require("./args/CreateManyFavouritesArgs");
const DeleteFavouritesArgs_1 = require("./args/DeleteFavouritesArgs");
const DeleteManyFavouritesArgs_1 = require("./args/DeleteManyFavouritesArgs");
const FindFirstFavouritesArgs_1 = require("./args/FindFirstFavouritesArgs");
const FindManyFavouritesArgs_1 = require("./args/FindManyFavouritesArgs");
const FindUniqueFavouritesArgs_1 = require("./args/FindUniqueFavouritesArgs");
const GroupByFavouritesArgs_1 = require("./args/GroupByFavouritesArgs");
const UpdateFavouritesArgs_1 = require("./args/UpdateFavouritesArgs");
const UpdateManyFavouritesArgs_1 = require("./args/UpdateManyFavouritesArgs");
const UpsertFavouritesArgs_1 = require("./args/UpsertFavouritesArgs");
const helpers_1 = require("../../../helpers");
const Favourites_1 = require("../../../models/Favourites");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateFavourites_1 = require("../../outputs/AggregateFavourites");
const FavouritesGroupBy_1 = require("../../outputs/FavouritesGroupBy");
let FavouritesCrudResolver = class FavouritesCrudResolver {
    async findUniqueFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findManyFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertFavourites(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateFavourites(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).favourites.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByFavourites(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).favourites.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Favourites_1.Favourites, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueFavouritesArgs_1.FindUniqueFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "findUniqueFavourites", null);
__decorate([
    TypeGraphQL.Query(_returns => Favourites_1.Favourites, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstFavouritesArgs_1.FindFirstFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "findFirstFavourites", null);
__decorate([
    TypeGraphQL.Query(_returns => [Favourites_1.Favourites], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyFavouritesArgs_1.FindManyFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "findManyFavourites", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Favourites_1.Favourites, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateFavouritesArgs_1.CreateFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "createFavourites", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyFavouritesArgs_1.CreateManyFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "createManyFavourites", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Favourites_1.Favourites, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteFavouritesArgs_1.DeleteFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "deleteFavourites", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Favourites_1.Favourites, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateFavouritesArgs_1.UpdateFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "updateFavourites", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyFavouritesArgs_1.DeleteManyFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "deleteManyFavourites", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyFavouritesArgs_1.UpdateManyFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "updateManyFavourites", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Favourites_1.Favourites, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertFavouritesArgs_1.UpsertFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "upsertFavourites", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateFavourites_1.AggregateFavourites, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateFavouritesArgs_1.AggregateFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "aggregateFavourites", null);
__decorate([
    TypeGraphQL.Query(_returns => [FavouritesGroupBy_1.FavouritesGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByFavouritesArgs_1.GroupByFavouritesArgs]),
    __metadata("design:returntype", Promise)
], FavouritesCrudResolver.prototype, "groupByFavourites", null);
FavouritesCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Favourites_1.Favourites)
], FavouritesCrudResolver);
exports.FavouritesCrudResolver = FavouritesCrudResolver;
