import { GraphQLResolveInfo } from "graphql";
import { GroupByItinerary_placesArgs } from "./args/GroupByItinerary_placesArgs";
import { Itinerary_placesGroupBy } from "../../outputs/Itinerary_placesGroupBy";
export declare class GroupByItinerary_placesResolver {
    groupByItinerary_places(ctx: any, info: GraphQLResolveInfo, args: GroupByItinerary_placesArgs): Promise<Itinerary_placesGroupBy[]>;
}
