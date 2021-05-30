import { GraphQLResolveInfo } from "graphql";
import { FindFirstRestaurantsArgs } from "./args/FindFirstRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
export declare class FindFirstRestaurantsResolver {
    findFirstRestaurants(ctx: any, info: GraphQLResolveInfo, args: FindFirstRestaurantsArgs): Promise<Restaurants | null>;
}
