import { GraphQLResolveInfo } from "graphql";
import { DeleteItinerary_itemsArgs } from "./args/DeleteItinerary_itemsArgs";
import { Itinerary_items } from "../../../models/Itinerary_items";
export declare class DeleteItinerary_itemsResolver {
    deleteItinerary_items(ctx: any, info: GraphQLResolveInfo, args: DeleteItinerary_itemsArgs): Promise<Itinerary_items | null>;
}
