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
exports.CitiesCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateCitiesArgs_1 = require("./args/AggregateCitiesArgs");
const CreateCitiesArgs_1 = require("./args/CreateCitiesArgs");
const CreateManyCitiesArgs_1 = require("./args/CreateManyCitiesArgs");
const DeleteCitiesArgs_1 = require("./args/DeleteCitiesArgs");
const DeleteManyCitiesArgs_1 = require("./args/DeleteManyCitiesArgs");
const FindFirstCitiesArgs_1 = require("./args/FindFirstCitiesArgs");
const FindManyCitiesArgs_1 = require("./args/FindManyCitiesArgs");
const FindUniqueCitiesArgs_1 = require("./args/FindUniqueCitiesArgs");
const GroupByCitiesArgs_1 = require("./args/GroupByCitiesArgs");
const UpdateCitiesArgs_1 = require("./args/UpdateCitiesArgs");
const UpdateManyCitiesArgs_1 = require("./args/UpdateManyCitiesArgs");
const UpsertCitiesArgs_1 = require("./args/UpsertCitiesArgs");
const helpers_1 = require("../../../helpers");
const Cities_1 = require("../../../models/Cities");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCities_1 = require("../../outputs/AggregateCities");
const CitiesGroupBy_1 = require("../../outputs/CitiesGroupBy");
let CitiesCrudResolver = class CitiesCrudResolver {
    async findUniqueCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findManyCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertCities(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateCities(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).cities.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByCities(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cities.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Cities_1.Cities, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCitiesArgs_1.FindUniqueCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "findUniqueCities", null);
__decorate([
    TypeGraphQL.Query(_returns => Cities_1.Cities, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCitiesArgs_1.FindFirstCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "findFirstCities", null);
__decorate([
    TypeGraphQL.Query(_returns => [Cities_1.Cities], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyCitiesArgs_1.FindManyCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "findManyCities", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateCitiesArgs_1.CreateCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "createCities", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyCitiesArgs_1.CreateManyCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "createManyCities", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteCitiesArgs_1.DeleteCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "deleteCities", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateCitiesArgs_1.UpdateCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "updateCities", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyCitiesArgs_1.DeleteManyCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "deleteManyCities", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyCitiesArgs_1.UpdateManyCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "updateManyCities", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertCitiesArgs_1.UpsertCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "upsertCities", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCities_1.AggregateCities, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCitiesArgs_1.AggregateCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "aggregateCities", null);
__decorate([
    TypeGraphQL.Query(_returns => [CitiesGroupBy_1.CitiesGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByCitiesArgs_1.GroupByCitiesArgs]),
    __metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "groupByCities", null);
CitiesCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], CitiesCrudResolver);
exports.CitiesCrudResolver = CitiesCrudResolver;
//# sourceMappingURL=CitiesCrudResolver.js.map