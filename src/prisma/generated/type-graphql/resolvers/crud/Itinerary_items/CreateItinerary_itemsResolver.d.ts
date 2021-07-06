import { GraphQLResolveInfo } from "graphql";
import { CreateItinerary_itemsArgs } from "./args/CreateItinerary_itemsArgs";
import { Itinerary_items } from "../../../models/Itinerary_items";
export declare class CreateItinerary_itemsResolver {
    createItinerary_items(ctx: any, info: GraphQLResolveInfo, args: CreateItinerary_itemsArgs): Promise<Itinerary_items>;
}
