import { GraphQLResolveInfo } from "graphql";
import { GroupByItinerary_itemsArgs } from "./args/GroupByItinerary_itemsArgs";
import { Itinerary_itemsGroupBy } from "../../outputs/Itinerary_itemsGroupBy";
export declare class GroupByItinerary_itemsResolver {
    groupByItinerary_items(ctx: any, info: GraphQLResolveInfo, args: GroupByItinerary_itemsArgs): Promise<Itinerary_itemsGroupBy[]>;
}
