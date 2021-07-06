import { GraphQLResolveInfo } from "graphql";
import { FindUniqueItinerary_itemsArgs } from "./args/FindUniqueItinerary_itemsArgs";
import { Itinerary_items } from "../../../models/Itinerary_items";
export declare class FindUniqueItinerary_itemsResolver {
    findUniqueItinerary_items(ctx: any, info: GraphQLResolveInfo, args: FindUniqueItinerary_itemsArgs): Promise<Itinerary_items | null>;
}
