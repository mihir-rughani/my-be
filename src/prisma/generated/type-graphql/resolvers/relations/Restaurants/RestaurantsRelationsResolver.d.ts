import { Restaurants } from "../../../models/Restaurants";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { RestaurantsUploadFileMorphArgs } from "./args/RestaurantsUploadFileMorphArgs";
export declare class RestaurantsRelationsResolver {
    uploadFileMorph(restaurants: Restaurants, ctx: any, args: RestaurantsUploadFileMorphArgs): Promise<Upload_file_morph[]>;
}
