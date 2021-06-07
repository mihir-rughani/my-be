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
exports.VenueTypeCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateVenueTypeArgs_1 = require("./args/AggregateVenueTypeArgs");
const CreateManyVenueTypeArgs_1 = require("./args/CreateManyVenueTypeArgs");
const CreateVenueTypeArgs_1 = require("./args/CreateVenueTypeArgs");
const DeleteManyVenueTypeArgs_1 = require("./args/DeleteManyVenueTypeArgs");
const DeleteVenueTypeArgs_1 = require("./args/DeleteVenueTypeArgs");
const FindFirstVenueTypeArgs_1 = require("./args/FindFirstVenueTypeArgs");
const FindManyVenueTypeArgs_1 = require("./args/FindManyVenueTypeArgs");
const FindUniqueVenueTypeArgs_1 = require("./args/FindUniqueVenueTypeArgs");
const GroupByVenueTypeArgs_1 = require("./args/GroupByVenueTypeArgs");
const UpdateManyVenueTypeArgs_1 = require("./args/UpdateManyVenueTypeArgs");
const UpdateVenueTypeArgs_1 = require("./args/UpdateVenueTypeArgs");
const UpsertVenueTypeArgs_1 = require("./args/UpsertVenueTypeArgs");
const helpers_1 = require("../../../helpers");
const VenueType_1 = require("../../../models/VenueType");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVenueType_1 = require("../../outputs/AggregateVenueType");
const VenueTypeGroupBy_1 = require("../../outputs/VenueTypeGroupBy");
let VenueTypeCrudResolver = class VenueTypeCrudResolver {
    async venueType(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstVenueType(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async venueTypes(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createVenueType(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyVenueType(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteVenueType(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateVenueType(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyVenueType(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyVenueType(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertVenueType(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateVenueType(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).venueType.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByVenueType(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venueType.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => VenueType_1.VenueType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueVenueTypeArgs_1.FindUniqueVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "venueType", null);
__decorate([
    TypeGraphQL.Query(_returns => VenueType_1.VenueType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstVenueTypeArgs_1.FindFirstVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "findFirstVenueType", null);
__decorate([
    TypeGraphQL.Query(_returns => [VenueType_1.VenueType], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyVenueTypeArgs_1.FindManyVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "venueTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => VenueType_1.VenueType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateVenueTypeArgs_1.CreateVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "createVenueType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyVenueTypeArgs_1.CreateManyVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "createManyVenueType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => VenueType_1.VenueType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteVenueTypeArgs_1.DeleteVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "deleteVenueType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => VenueType_1.VenueType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateVenueTypeArgs_1.UpdateVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "updateVenueType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyVenueTypeArgs_1.DeleteManyVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "deleteManyVenueType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyVenueTypeArgs_1.UpdateManyVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "updateManyVenueType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => VenueType_1.VenueType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertVenueTypeArgs_1.UpsertVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "upsertVenueType", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateVenueType_1.AggregateVenueType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateVenueTypeArgs_1.AggregateVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "aggregateVenueType", null);
__decorate([
    TypeGraphQL.Query(_returns => [VenueTypeGroupBy_1.VenueTypeGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByVenueTypeArgs_1.GroupByVenueTypeArgs]),
    __metadata("design:returntype", Promise)
], VenueTypeCrudResolver.prototype, "groupByVenueType", null);
VenueTypeCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => VenueType_1.VenueType)
], VenueTypeCrudResolver);
exports.VenueTypeCrudResolver = VenueTypeCrudResolver;
