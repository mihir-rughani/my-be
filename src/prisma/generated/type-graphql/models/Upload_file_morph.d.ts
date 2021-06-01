import { Bars } from "../models/Bars";
import { Restaurants } from "../models/Restaurants";
import { Upload_file } from "../models/Upload_file";
export declare class Upload_file_morph {
    id: number;
    upload_file_id?: number | null;
    related_id?: number | null;
    related_type?: string | null;
    field?: string | null;
    order?: number | null;
    uploadFile?: Upload_file | null;
    bars?: Bars | null;
    restaurants?: Restaurants | null;
}
