import { GraphQLResolveInfo } from "graphql";
import { CreateRestaurantsArgs } from "./args/CreateRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
export declare class CreateRestaurantsResolver {
    createRestaurants(ctx: any, info: GraphQLResolveInfo, args: CreateRestaurantsArgs): Promise<Restaurants>;
}
