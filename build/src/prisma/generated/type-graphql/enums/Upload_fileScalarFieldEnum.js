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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var Upload_fileScalarFieldEnum;
(function (Upload_fileScalarFieldEnum) {
    Upload_fileScalarFieldEnum["id"] = "id";
    Upload_fileScalarFieldEnum["name"] = "name";
    Upload_fileScalarFieldEnum["alternativeText"] = "alternativeText";
    Upload_fileScalarFieldEnum["caption"] = "caption";
    Upload_fileScalarFieldEnum["width"] = "width";
    Upload_fileScalarFieldEnum["height"] = "height";
    Upload_fileScalarFieldEnum["formats"] = "formats";
    Upload_fileScalarFieldEnum["hash"] = "hash";
    Upload_fileScalarFieldEnum["ext"] = "ext";
    Upload_fileScalarFieldEnum["mime"] = "mime";
    Upload_fileScalarFieldEnum["size"] = "size";
    Upload_fileScalarFieldEnum["url"] = "url";
    Upload_fileScalarFieldEnum["previewUrl"] = "previewUrl";
    Upload_fileScalarFieldEnum["provider"] = "provider";
    Upload_fileScalarFieldEnum["provider_metadata"] = "provider_metadata";
    Upload_fileScalarFieldEnum["created_by"] = "created_by";
    Upload_fileScalarFieldEnum["updated_by"] = "updated_by";
    Upload_fileScalarFieldEnum["created_at"] = "created_at";
    Upload_fileScalarFieldEnum["updated_at"] = "updated_at";
})(Upload_fileScalarFieldEnum = exports.Upload_fileScalarFieldEnum || (exports.Upload_fileScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Upload_fileScalarFieldEnum, {
    name: "Upload_fileScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=Upload_fileScalarFieldEnum.js.map