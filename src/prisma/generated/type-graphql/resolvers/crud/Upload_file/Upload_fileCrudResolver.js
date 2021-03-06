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
exports.Upload_fileCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateUpload_fileArgs_1 = require("./args/AggregateUpload_fileArgs");
const CreateManyUpload_fileArgs_1 = require("./args/CreateManyUpload_fileArgs");
const CreateUpload_fileArgs_1 = require("./args/CreateUpload_fileArgs");
const DeleteManyUpload_fileArgs_1 = require("./args/DeleteManyUpload_fileArgs");
const DeleteUpload_fileArgs_1 = require("./args/DeleteUpload_fileArgs");
const FindFirstUpload_fileArgs_1 = require("./args/FindFirstUpload_fileArgs");
const FindManyUpload_fileArgs_1 = require("./args/FindManyUpload_fileArgs");
const FindUniqueUpload_fileArgs_1 = require("./args/FindUniqueUpload_fileArgs");
const GroupByUpload_fileArgs_1 = require("./args/GroupByUpload_fileArgs");
const UpdateManyUpload_fileArgs_1 = require("./args/UpdateManyUpload_fileArgs");
const UpdateUpload_fileArgs_1 = require("./args/UpdateUpload_fileArgs");
const UpsertUpload_fileArgs_1 = require("./args/UpsertUpload_fileArgs");
const helpers_1 = require("../../../helpers");
const Upload_file_1 = require("../../../models/Upload_file");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUpload_file_1 = require("../../outputs/AggregateUpload_file");
const Upload_fileGroupBy_1 = require("../../outputs/Upload_fileGroupBy");
let Upload_fileCrudResolver = class Upload_fileCrudResolver {
    async upload_file(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstUpload_file(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upload_files(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createUpload_file(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyUpload_file(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteUpload_file(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateUpload_file(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyUpload_file(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyUpload_file(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertUpload_file(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateUpload_file(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).upload_file.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByUpload_file(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).upload_file.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUpload_fileArgs_1.FindUniqueUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "upload_file", null);
__decorate([
    TypeGraphQL.Query(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUpload_fileArgs_1.FindFirstUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "findFirstUpload_file", null);
__decorate([
    TypeGraphQL.Query(_returns => [Upload_file_1.Upload_file], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUpload_fileArgs_1.FindManyUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "upload_files", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUpload_fileArgs_1.CreateUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "createUpload_file", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUpload_fileArgs_1.CreateManyUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "createManyUpload_file", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteUpload_fileArgs_1.DeleteUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "deleteUpload_file", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUpload_fileArgs_1.UpdateUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "updateUpload_file", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUpload_fileArgs_1.DeleteManyUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "deleteManyUpload_file", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUpload_fileArgs_1.UpdateManyUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "updateManyUpload_file", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertUpload_fileArgs_1.UpsertUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "upsertUpload_file", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUpload_file_1.AggregateUpload_file, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUpload_fileArgs_1.AggregateUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "aggregateUpload_file", null);
__decorate([
    TypeGraphQL.Query(_returns => [Upload_fileGroupBy_1.Upload_fileGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUpload_fileArgs_1.GroupByUpload_fileArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "groupByUpload_file", null);
Upload_fileCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], Upload_fileCrudResolver);
exports.Upload_fileCrudResolver = Upload_fileCrudResolver;
