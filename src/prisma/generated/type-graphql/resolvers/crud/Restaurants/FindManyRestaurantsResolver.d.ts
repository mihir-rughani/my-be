import { GraphQLResolveInfo } from "graphql";
import { FindManyRestaurantsArgs } from "./args/FindManyRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
export declare class FindManyRestaurantsResolver {
    findManyRestaurants(ctx: any, info: GraphQLResolveInfo, args: FindManyRestaurantsArgs): Promise<Restaurants[]>;
}
