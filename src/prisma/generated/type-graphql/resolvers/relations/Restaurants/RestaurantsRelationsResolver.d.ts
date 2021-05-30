import { Restaurants } from "../../../models/Restaurants";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
export declare class RestaurantsRelationsResolver {
    image(restaurants: Restaurants, ctx: any): Promise<Upload_file_morph | null>;
}
