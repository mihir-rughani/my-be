"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Resolver = void 0;
const type_graphql_1 = require("type-graphql");
const core_1 = require("../../../core");
const enums_1 = require("../../../types/enums");
const s3Types_1 = require("./s3Types");
const s3Service_1 = require("./s3Service");
const log = core_1.Logger("S3Resolver");
let S3Resolver = class S3Resolver {
    async s3SignedUrl(operation, s3Params) {
        log.info("=== START OF S3Resolver ===");
        return await s3Service_1.getS3SignedUrl(operation, s3Params);
    }
    async sign(operation, s3Params) {
        log.info("=== START OF S3Resolver ===");
        return await s3Service_1.getS3SignedUrl(operation, s3Params);
    }
};
__decorate([
    type_graphql_1.Authorized(enums_1.RolesEnum.Admin, enums_1.RolesEnum.User, enums_1.RolesEnum.AnonymousAuth),
    type_graphql_1.Query(returns => s3Types_1.S3SignedUrl, { nullable: true }),
    __param(0, type_graphql_1.Arg("operation")),
    __param(1, type_graphql_1.Arg("s3Params")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, s3Types_1.S3SignedUrlInputType]),
    __metadata("design:returntype", Promise)
], S3Resolver.prototype, "s3SignedUrl", null);
__decorate([
    type_graphql_1.Authorized(enums_1.RolesEnum.Admin, enums_1.RolesEnum.User, enums_1.RolesEnum.AnonymousAuth),
    type_graphql_1.Query(returns => s3Types_1.S3SignedUrl, { nullable: true }),
    __param(0, type_graphql_1.Arg("operation")),
    __param(1, type_graphql_1.Arg("s3Params")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, s3Types_1.S3SignedUrlInputType]),
    __metadata("design:returntype", Promise)
], S3Resolver.prototype, "sign", null);
S3Resolver = __decorate([
    type_graphql_1.Resolver()
], S3Resolver);
exports.S3Resolver = S3Resolver;
//# sourceMappingURL=s3Resolver.js.map