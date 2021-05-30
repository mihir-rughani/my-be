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
exports.BarsCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateBarsArgs_1 = require("./args/AggregateBarsArgs");
const CreateBarsArgs_1 = require("./args/CreateBarsArgs");
const CreateManyBarsArgs_1 = require("./args/CreateManyBarsArgs");
const DeleteBarsArgs_1 = require("./args/DeleteBarsArgs");
const DeleteManyBarsArgs_1 = require("./args/DeleteManyBarsArgs");
const FindFirstBarsArgs_1 = require("./args/FindFirstBarsArgs");
const FindManyBarsArgs_1 = require("./args/FindManyBarsArgs");
const FindUniqueBarsArgs_1 = require("./args/FindUniqueBarsArgs");
const GroupByBarsArgs_1 = require("./args/GroupByBarsArgs");
const UpdateBarsArgs_1 = require("./args/UpdateBarsArgs");
const UpdateManyBarsArgs_1 = require("./args/UpdateManyBarsArgs");
const UpsertBarsArgs_1 = require("./args/UpsertBarsArgs");
const helpers_1 = require("../../../helpers");
const Bars_1 = require("../../../models/Bars");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBars_1 = require("../../outputs/AggregateBars");
const BarsGroupBy_1 = require("../../outputs/BarsGroupBy");
let BarsCrudResolver = class BarsCrudResolver {
    async findUniqueBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findManyBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertBars(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateBars(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).bars.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByBars(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).bars.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Bars_1.Bars, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueBarsArgs_1.FindUniqueBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "findUniqueBars", null);
__decorate([
    TypeGraphQL.Query(_returns => Bars_1.Bars, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstBarsArgs_1.FindFirstBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "findFirstBars", null);
__decorate([
    TypeGraphQL.Query(_returns => [Bars_1.Bars], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyBarsArgs_1.FindManyBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "findManyBars", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Bars_1.Bars, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateBarsArgs_1.CreateBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "createBars", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyBarsArgs_1.CreateManyBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "createManyBars", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Bars_1.Bars, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteBarsArgs_1.DeleteBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "deleteBars", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Bars_1.Bars, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateBarsArgs_1.UpdateBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "updateBars", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyBarsArgs_1.DeleteManyBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "deleteManyBars", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyBarsArgs_1.UpdateManyBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "updateManyBars", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Bars_1.Bars, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertBarsArgs_1.UpsertBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "upsertBars", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateBars_1.AggregateBars, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateBarsArgs_1.AggregateBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "aggregateBars", null);
__decorate([
    TypeGraphQL.Query(_returns => [BarsGroupBy_1.BarsGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByBarsArgs_1.GroupByBarsArgs]),
    __metadata("design:returntype", Promise)
], BarsCrudResolver.prototype, "groupByBars", null);
BarsCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Bars_1.Bars)
], BarsCrudResolver);
exports.BarsCrudResolver = BarsCrudResolver;
