import { GraphQLResolveInfo } from "graphql";
import { DeleteRestaurantsArgs } from "./args/DeleteRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
export declare class DeleteRestaurantsResolver {
    deleteRestaurants(ctx: any, info: GraphQLResolveInfo, args: DeleteRestaurantsArgs): Promise<Restaurants | null>;
}
