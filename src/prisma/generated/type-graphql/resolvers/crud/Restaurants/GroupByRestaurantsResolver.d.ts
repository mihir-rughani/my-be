import { GraphQLResolveInfo } from "graphql";
import { GroupByRestaurantsArgs } from "./args/GroupByRestaurantsArgs";
import { RestaurantsGroupBy } from "../../outputs/RestaurantsGroupBy";
export declare class GroupByRestaurantsResolver {
    groupByRestaurants(ctx: any, info: GraphQLResolveInfo, args: GroupByRestaurantsArgs): Promise<RestaurantsGroupBy[]>;
}
