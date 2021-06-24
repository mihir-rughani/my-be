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
exports.VenuesCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateVenuesArgs_1 = require("./args/AggregateVenuesArgs");
const CreateManyVenuesArgs_1 = require("./args/CreateManyVenuesArgs");
const CreateVenuesArgs_1 = require("./args/CreateVenuesArgs");
const DeleteManyVenuesArgs_1 = require("./args/DeleteManyVenuesArgs");
const DeleteVenuesArgs_1 = require("./args/DeleteVenuesArgs");
const FindFirstVenuesArgs_1 = require("./args/FindFirstVenuesArgs");
const FindManyVenuesArgs_1 = require("./args/FindManyVenuesArgs");
const FindUniqueVenuesArgs_1 = require("./args/FindUniqueVenuesArgs");
const GroupByVenuesArgs_1 = require("./args/GroupByVenuesArgs");
const UpdateManyVenuesArgs_1 = require("./args/UpdateManyVenuesArgs");
const UpdateVenuesArgs_1 = require("./args/UpdateVenuesArgs");
const UpsertVenuesArgs_1 = require("./args/UpsertVenuesArgs");
const helpers_1 = require("../../../helpers");
const Venues_1 = require("../../../models/Venues");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVenues_1 = require("../../outputs/AggregateVenues");
const VenuesGroupBy_1 = require("../../outputs/VenuesGroupBy");
let VenuesCrudResolver = class VenuesCrudResolver {
    async findUniqueVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findManyVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertVenues(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateVenues(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).venues.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByVenues(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).venues.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Venues_1.Venues, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueVenuesArgs_1.FindUniqueVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "findUniqueVenues", null);
__decorate([
    TypeGraphQL.Query(_returns => Venues_1.Venues, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstVenuesArgs_1.FindFirstVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "findFirstVenues", null);
__decorate([
    TypeGraphQL.Query(_returns => [Venues_1.Venues], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyVenuesArgs_1.FindManyVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "findManyVenues", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Venues_1.Venues, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateVenuesArgs_1.CreateVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "createVenues", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyVenuesArgs_1.CreateManyVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "createManyVenues", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Venues_1.Venues, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteVenuesArgs_1.DeleteVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "deleteVenues", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Venues_1.Venues, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateVenuesArgs_1.UpdateVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "updateVenues", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyVenuesArgs_1.DeleteManyVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "deleteManyVenues", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyVenuesArgs_1.UpdateManyVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "updateManyVenues", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Venues_1.Venues, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertVenuesArgs_1.UpsertVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "upsertVenues", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateVenues_1.AggregateVenues, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateVenuesArgs_1.AggregateVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "aggregateVenues", null);
__decorate([
    TypeGraphQL.Query(_returns => [VenuesGroupBy_1.VenuesGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByVenuesArgs_1.GroupByVenuesArgs]),
    __metadata("design:returntype", Promise)
], VenuesCrudResolver.prototype, "groupByVenues", null);
VenuesCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Venues_1.Venues)
], VenuesCrudResolver);
exports.VenuesCrudResolver = VenuesCrudResolver;
