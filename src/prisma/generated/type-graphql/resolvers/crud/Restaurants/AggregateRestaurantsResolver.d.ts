import { GraphQLResolveInfo } from "graphql";
import { AggregateRestaurantsArgs } from "./args/AggregateRestaurantsArgs";
import { AggregateRestaurants } from "../../outputs/AggregateRestaurants";
export declare class AggregateRestaurantsResolver {
    aggregateRestaurants(ctx: any, info: GraphQLResolveInfo, args: AggregateRestaurantsArgs): Promise<AggregateRestaurants>;
}
