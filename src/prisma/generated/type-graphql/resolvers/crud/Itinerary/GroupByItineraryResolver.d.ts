import { GraphQLResolveInfo } from "graphql";
import { GroupByItineraryArgs } from "./args/GroupByItineraryArgs";
import { ItineraryGroupBy } from "../../outputs/ItineraryGroupBy";
export declare class GroupByItineraryResolver {
    groupByItinerary(ctx: any, info: GraphQLResolveInfo, args: GroupByItineraryArgs): Promise<ItineraryGroupBy[]>;
}
