import { Bars } from "../../../models/Bars";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { BarsUploadFileMorphArgs } from "./args/BarsUploadFileMorphArgs";
export declare class BarsRelationsResolver {
    uploadFileMorph(bars: Bars, ctx: any, args: BarsUploadFileMorphArgs): Promise<Upload_file_morph[]>;
}
