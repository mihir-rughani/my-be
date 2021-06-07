import { Upload_file } from "../../../models/Upload_file";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { Venues } from "../../../models/Venues";
export declare class Upload_file_morphRelationsResolver {
    uploadFile(upload_file_morph: Upload_file_morph, ctx: any): Promise<Upload_file | null>;
    venues(upload_file_morph: Upload_file_morph, ctx: any): Promise<Venues | null>;
}
