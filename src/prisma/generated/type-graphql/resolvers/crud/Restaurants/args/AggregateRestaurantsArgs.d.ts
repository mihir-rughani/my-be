import { RestaurantsOrderByInput } from "../../../inputs/RestaurantsOrderByInput";
import { RestaurantsWhereInput } from "../../../inputs/RestaurantsWhereInput";
import { RestaurantsWhereUniqueInput } from "../../../inputs/RestaurantsWhereUniqueInput";
export declare class AggregateRestaurantsArgs {
    where?: RestaurantsWhereInput | undefined;
    orderBy?: RestaurantsOrderByInput[] | undefined;
    cursor?: RestaurantsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
