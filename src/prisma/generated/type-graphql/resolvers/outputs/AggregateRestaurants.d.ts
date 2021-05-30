import { RestaurantsAvgAggregate } from "../outputs/RestaurantsAvgAggregate";
import { RestaurantsCountAggregate } from "../outputs/RestaurantsCountAggregate";
import { RestaurantsMaxAggregate } from "../outputs/RestaurantsMaxAggregate";
import { RestaurantsMinAggregate } from "../outputs/RestaurantsMinAggregate";
import { RestaurantsSumAggregate } from "../outputs/RestaurantsSumAggregate";
export declare class AggregateRestaurants {
    _count: RestaurantsCountAggregate | null;
    _avg: RestaurantsAvgAggregate | null;
    _sum: RestaurantsSumAggregate | null;
    _min: RestaurantsMinAggregate | null;
    _max: RestaurantsMaxAggregate | null;
}
