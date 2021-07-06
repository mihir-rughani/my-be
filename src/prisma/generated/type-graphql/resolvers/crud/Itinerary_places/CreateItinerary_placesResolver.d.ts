import { GraphQLResolveInfo } from "graphql";
import { CreateItinerary_placesArgs } from "./args/CreateItinerary_placesArgs";
import { Itinerary_places } from "../../../models/Itinerary_places";
export declare class CreateItinerary_placesResolver {
    createItinerary_places(ctx: any, info: GraphQLResolveInfo, args: CreateItinerary_placesArgs): Promise<Itinerary_places>;
}
