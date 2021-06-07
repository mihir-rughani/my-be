import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVenueTypeArgs } from "./args/FindUniqueVenueTypeArgs";
import { VenueType } from "../../../models/VenueType";
export declare class FindUniqueVenueTypeResolver {
    venueType(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVenueTypeArgs): Promise<VenueType | null>;
}
