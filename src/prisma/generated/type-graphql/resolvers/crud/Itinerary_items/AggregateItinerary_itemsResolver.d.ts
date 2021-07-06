import { GraphQLResolveInfo } from "graphql";
import { AggregateItinerary_itemsArgs } from "./args/AggregateItinerary_itemsArgs";
import { AggregateItinerary_items } from "../../outputs/AggregateItinerary_items";
export declare class AggregateItinerary_itemsResolver {
    aggregateItinerary_items(ctx: any, info: GraphQLResolveInfo, args: AggregateItinerary_itemsArgs): Promise<AggregateItinerary_items>;
}
