import { Upload_file } from "../../../models/Upload_file";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { Upload_fileUploadFileMorphArgs } from "./args/Upload_fileUploadFileMorphArgs";
export declare class Upload_fileRelationsResolver {
    uploadFileMorph(upload_file: Upload_file, ctx: any, args: Upload_fileUploadFileMorphArgs): Promise<Upload_file_morph[]>;
}
