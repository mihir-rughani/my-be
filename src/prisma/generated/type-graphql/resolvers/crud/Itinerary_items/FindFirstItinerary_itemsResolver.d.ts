import { GraphQLResolveInfo } from "graphql";
import { FindFirstItinerary_itemsArgs } from "./args/FindFirstItinerary_itemsArgs";
import { Itinerary_items } from "../../../models/Itinerary_items";
export declare class FindFirstItinerary_itemsResolver {
    findFirstItinerary_items(ctx: any, info: GraphQLResolveInfo, args: FindFirstItinerary_itemsArgs): Promise<Itinerary_items | null>;
}
