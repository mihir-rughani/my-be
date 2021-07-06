import { GraphQLResolveInfo } from "graphql";
import { UpdateItinerary_itemsArgs } from "./args/UpdateItinerary_itemsArgs";
import { Itinerary_items } from "../../../models/Itinerary_items";
export declare class UpdateItinerary_itemsResolver {
    updateItinerary_items(ctx: any, info: GraphQLResolveInfo, args: UpdateItinerary_itemsArgs): Promise<Itinerary_items | null>;
}
