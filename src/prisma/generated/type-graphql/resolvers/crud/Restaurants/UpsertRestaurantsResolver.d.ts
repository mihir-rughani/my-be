import { GraphQLResolveInfo } from "graphql";
import { UpsertRestaurantsArgs } from "./args/UpsertRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
export declare class UpsertRestaurantsResolver {
    upsertRestaurants(ctx: any, info: GraphQLResolveInfo, args: UpsertRestaurantsArgs): Promise<Restaurants>;
}
