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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Bars_1 = require("../../../models/Bars");
const Restaurants_1 = require("../../../models/Restaurants");
const Upload_file_1 = require("../../../models/Upload_file");
const Upload_file_morph_1 = require("../../../models/Upload_file_morph");
const helpers_1 = require("../../../helpers");
let Upload_file_morphRelationsResolver = class Upload_file_morphRelationsResolver {
    async uploadFile(upload_file_morph, ctx) {
        return helpers_1.getPrismaFromContext(ctx).upload_file_morph.findUnique({
            where: {
                id: upload_file_morph.id,
            },
        }).uploadFile({});
    }
    async bars(upload_file_morph, ctx) {
        return helpers_1.getPrismaFromContext(ctx).upload_file_morph.findUnique({
            where: {
                id: upload_file_morph.id,
            },
        }).bars({});
    }
    async restaurants(upload_file_morph, ctx) {
        return helpers_1.getPrismaFromContext(ctx).upload_file_morph.findUnique({
            where: {
                id: upload_file_morph.id,
            },
        }).restaurants({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Upload_file_1.Upload_file, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Upload_file_morph_1.Upload_file_morph, Object]),
    __metadata("design:returntype", Promise)
], Upload_file_morphRelationsResolver.prototype, "uploadFile", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Bars_1.Bars, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Upload_file_morph_1.Upload_file_morph, Object]),
    __metadata("design:returntype", Promise)
], Upload_file_morphRelationsResolver.prototype, "bars", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Restaurants_1.Restaurants, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Upload_file_morph_1.Upload_file_morph, Object]),
    __metadata("design:returntype", Promise)
], Upload_file_morphRelationsResolver.prototype, "restaurants", null);
Upload_file_morphRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Upload_file_morph_1.Upload_file_morph)
], Upload_file_morphRelationsResolver);
exports.Upload_file_morphRelationsResolver = Upload_file_morphRelationsResolver;
//# sourceMappingURL=Upload_file_morphRelationsResolver.js.map