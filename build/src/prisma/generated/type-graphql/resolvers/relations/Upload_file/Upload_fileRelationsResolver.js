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
exports.Upload_fileRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Upload_file_1 = require("../../../models/Upload_file");
const Upload_file_morph_1 = require("../../../models/Upload_file_morph");
const Upload_fileUploadFileMorphArgs_1 = require("./args/Upload_fileUploadFileMorphArgs");
const helpers_1 = require("../../../helpers");
let Upload_fileRelationsResolver = class Upload_fileRelationsResolver {
    async uploadFileMorph(upload_file, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).upload_file.findUnique({
            where: {
                id: upload_file.id,
            },
        }).uploadFileMorph(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Upload_file_morph_1.Upload_file_morph], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Upload_file_1.Upload_file, Object, Upload_fileUploadFileMorphArgs_1.Upload_fileUploadFileMorphArgs]),
    __metadata("design:returntype", Promise)
], Upload_fileRelationsResolver.prototype, "uploadFileMorph", null);
Upload_fileRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], Upload_fileRelationsResolver);
exports.Upload_fileRelationsResolver = Upload_fileRelationsResolver;
//# sourceMappingURL=Upload_fileRelationsResolver.js.map