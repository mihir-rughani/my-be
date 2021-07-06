import { GraphQLResolveInfo } from "graphql";
import { UpsertItinerary_itemsArgs } from "./args/UpsertItinerary_itemsArgs";
import { Itinerary_items } from "../../../models/Itinerary_items";
export declare class UpsertItinerary_itemsResolver {
    upsertItinerary_items(ctx: any, info: GraphQLResolveInfo, args: UpsertItinerary_itemsArgs): Promise<Itinerary_items>;
}
