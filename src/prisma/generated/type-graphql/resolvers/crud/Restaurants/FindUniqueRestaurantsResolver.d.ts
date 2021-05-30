import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRestaurantsArgs } from "./args/FindUniqueRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
export declare class FindUniqueRestaurantsResolver {
    findUniqueRestaurants(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRestaurantsArgs): Promise<Restaurants | null>;
}
