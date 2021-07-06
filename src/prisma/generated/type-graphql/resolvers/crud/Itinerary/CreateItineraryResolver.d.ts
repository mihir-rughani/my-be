import { GraphQLResolveInfo } from "graphql";
import { CreateItineraryArgs } from "./args/CreateItineraryArgs";
import { Itinerary } from "../../../models/Itinerary";
export declare class CreateItineraryResolver {
    createItinerary(ctx: any, info: GraphQLResolveInfo, args: CreateItineraryArgs): Promise<Itinerary>;
}
