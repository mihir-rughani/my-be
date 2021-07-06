import { GraphQLResolveInfo } from "graphql";
import { DeleteItinerary_placesArgs } from "./args/DeleteItinerary_placesArgs";
import { Itinerary_places } from "../../../models/Itinerary_places";
export declare class DeleteItinerary_placesResolver {
    deleteItinerary_places(ctx: any, info: GraphQLResolveInfo, args: DeleteItinerary_placesArgs): Promise<Itinerary_places | null>;
}
