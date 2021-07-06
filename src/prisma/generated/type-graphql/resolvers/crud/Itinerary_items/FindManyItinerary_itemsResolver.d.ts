import { GraphQLResolveInfo } from "graphql";
import { FindManyItinerary_itemsArgs } from "./args/FindManyItinerary_itemsArgs";
import { Itinerary_items } from "../../../models/Itinerary_items";
export declare class FindManyItinerary_itemsResolver {
    findManyItinerary_items(ctx: any, info: GraphQLResolveInfo, args: FindManyItinerary_itemsArgs): Promise<Itinerary_items[]>;
}
