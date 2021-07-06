import { GraphQLResolveInfo } from "graphql";
import { FindUniqueItineraryArgs } from "./args/FindUniqueItineraryArgs";
import { Itinerary } from "../../../models/Itinerary";
export declare class FindUniqueItineraryResolver {
    itinerary(ctx: any, info: GraphQLResolveInfo, args: FindUniqueItineraryArgs): Promise<Itinerary | null>;
}
