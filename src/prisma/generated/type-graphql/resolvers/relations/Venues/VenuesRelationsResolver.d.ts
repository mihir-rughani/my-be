import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { Venues } from "../../../models/Venues";
import { VenuesUploadFileMorphArgs } from "./args/VenuesUploadFileMorphArgs";
export declare class VenuesRelationsResolver {
    uploadFileMorph(venues: Venues, ctx: any, args: VenuesUploadFileMorphArgs): Promise<Upload_file_morph[]>;
}
