import { Bars } from "../models/Bars";
import { Restaurants } from "../models/Restaurants";
import { Upload_file } from "../models/Upload_file";
export declare class Upload_file_morph {
    upload_file_id: number;
    related_id: number;
    related_type?: string | null;
    field?: string | null;
    order?: number | null;
    image?: Upload_file;
    bars?: Bars;
    restaurants?: Restaurants;
}
