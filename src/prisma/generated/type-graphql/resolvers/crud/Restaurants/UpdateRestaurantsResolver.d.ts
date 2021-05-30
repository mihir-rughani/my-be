import { GraphQLResolveInfo } from "graphql";
import { UpdateRestaurantsArgs } from "./args/UpdateRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
export declare class UpdateRestaurantsResolver {
    updateRestaurants(ctx: any, info: GraphQLResolveInfo, args: UpdateRestaurantsArgs): Promise<Restaurants | null>;
}
