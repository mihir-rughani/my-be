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
exports.Itinerary_itemsCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateItinerary_itemsArgs_1 = require("./args/AggregateItinerary_itemsArgs");
const CreateItinerary_itemsArgs_1 = require("./args/CreateItinerary_itemsArgs");
const CreateManyItinerary_itemsArgs_1 = require("./args/CreateManyItinerary_itemsArgs");
const DeleteItinerary_itemsArgs_1 = require("./args/DeleteItinerary_itemsArgs");
const DeleteManyItinerary_itemsArgs_1 = require("./args/DeleteManyItinerary_itemsArgs");
const FindFirstItinerary_itemsArgs_1 = require("./args/FindFirstItinerary_itemsArgs");
const FindManyItinerary_itemsArgs_1 = require("./args/FindManyItinerary_itemsArgs");
const FindUniqueItinerary_itemsArgs_1 = require("./args/FindUniqueItinerary_itemsArgs");
const GroupByItinerary_itemsArgs_1 = require("./args/GroupByItinerary_itemsArgs");
const UpdateItinerary_itemsArgs_1 = require("./args/UpdateItinerary_itemsArgs");
const UpdateManyItinerary_itemsArgs_1 = require("./args/UpdateManyItinerary_itemsArgs");
const UpsertItinerary_itemsArgs_1 = require("./args/UpsertItinerary_itemsArgs");
const helpers_1 = require("../../../helpers");
const Itinerary_items_1 = require("../../../models/Itinerary_items");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateItinerary_items_1 = require("../../outputs/AggregateItinerary_items");
const Itinerary_itemsGroupBy_1 = require("../../outputs/Itinerary_itemsGroupBy");
let Itinerary_itemsCrudResolver = class Itinerary_itemsCrudResolver {
    async findUniqueItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findManyItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertItinerary_items(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateItinerary_items(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByItinerary_items(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).itinerary_items.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Itinerary_items_1.Itinerary_items, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueItinerary_itemsArgs_1.FindUniqueItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "findUniqueItinerary_items", null);
__decorate([
    TypeGraphQL.Query(_returns => Itinerary_items_1.Itinerary_items, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstItinerary_itemsArgs_1.FindFirstItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "findFirstItinerary_items", null);
__decorate([
    TypeGraphQL.Query(_returns => [Itinerary_items_1.Itinerary_items], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyItinerary_itemsArgs_1.FindManyItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "findManyItinerary_items", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_items_1.Itinerary_items, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateItinerary_itemsArgs_1.CreateItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "createItinerary_items", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyItinerary_itemsArgs_1.CreateManyItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "createManyItinerary_items", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_items_1.Itinerary_items, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteItinerary_itemsArgs_1.DeleteItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "deleteItinerary_items", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_items_1.Itinerary_items, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateItinerary_itemsArgs_1.UpdateItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "updateItinerary_items", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyItinerary_itemsArgs_1.DeleteManyItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "deleteManyItinerary_items", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyItinerary_itemsArgs_1.UpdateManyItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "updateManyItinerary_items", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Itinerary_items_1.Itinerary_items, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertItinerary_itemsArgs_1.UpsertItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "upsertItinerary_items", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateItinerary_items_1.AggregateItinerary_items, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateItinerary_itemsArgs_1.AggregateItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "aggregateItinerary_items", null);
__decorate([
    TypeGraphQL.Query(_returns => [Itinerary_itemsGroupBy_1.Itinerary_itemsGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByItinerary_itemsArgs_1.GroupByItinerary_itemsArgs]),
    __metadata("design:returntype", Promise)
], Itinerary_itemsCrudResolver.prototype, "groupByItinerary_items", null);
Itinerary_itemsCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Itinerary_items_1.Itinerary_items)
], Itinerary_itemsCrudResolver);
exports.Itinerary_itemsCrudResolver = Itinerary_itemsCrudResolver;
