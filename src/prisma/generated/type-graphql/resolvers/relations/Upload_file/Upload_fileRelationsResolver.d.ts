import { Upload_file } from "../../../models/Upload_file";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
export declare class Upload_fileRelationsResolver {
    image(upload_file: Upload_file, ctx: any): Promise<Upload_file_morph | null>;
}
