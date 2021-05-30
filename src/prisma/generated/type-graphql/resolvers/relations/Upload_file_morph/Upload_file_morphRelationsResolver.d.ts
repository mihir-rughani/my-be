import { Bars } from "../../../models/Bars";
import { Restaurants } from "../../../models/Restaurants";
import { Upload_file } from "../../../models/Upload_file";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
export declare class Upload_file_morphRelationsResolver {
    image(upload_file_morph: Upload_file_morph, ctx: any): Promise<Upload_file>;
    bars(upload_file_morph: Upload_file_morph, ctx: any): Promise<Bars>;
    restaurants(upload_file_morph: Upload_file_morph, ctx: any): Promise<Restaurants>;
}
