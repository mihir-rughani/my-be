import { RestaurantsCreateInput } from "../../../inputs/RestaurantsCreateInput";
import { RestaurantsUpdateInput } from "../../../inputs/RestaurantsUpdateInput";
import { RestaurantsWhereUniqueInput } from "../../../inputs/RestaurantsWhereUniqueInput";
export declare class UpsertRestaurantsArgs {
    where: RestaurantsWhereUniqueInput;
    create: RestaurantsCreateInput;
    update: RestaurantsUpdateInput;
}
