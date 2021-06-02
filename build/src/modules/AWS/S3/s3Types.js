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
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3SignedUrlInputType = exports.S3SignedUrl = void 0;
const type_graphql_1 = require("type-graphql");
let S3SignedUrl = class S3SignedUrl {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], S3SignedUrl.prototype, "signedUrl", void 0);
S3SignedUrl = __decorate([
    type_graphql_1.ObjectType()
], S3SignedUrl);
exports.S3SignedUrl = S3SignedUrl;
let S3SignedUrlInputType = class S3SignedUrlInputType {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], S3SignedUrlInputType.prototype, "Bucket", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], S3SignedUrlInputType.prototype, "Key", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], S3SignedUrlInputType.prototype, "Expires", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], S3SignedUrlInputType.prototype, "ContentType", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], S3SignedUrlInputType.prototype, "ACL", void 0);
S3SignedUrlInputType = __decorate([
    type_graphql_1.InputType()
], S3SignedUrlInputType);
exports.S3SignedUrlInputType = S3SignedUrlInputType;
//# sourceMappingURL=s3Types.js.map