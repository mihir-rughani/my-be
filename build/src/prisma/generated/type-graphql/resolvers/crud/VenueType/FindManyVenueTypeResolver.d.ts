import { GraphQLResolveInfo } from "graphql";
import { FindManyVenueTypeArgs } from "./args/FindManyVenueTypeArgs";
import { VenueType } from "../../../models/VenueType";
export declare class FindManyVenueTypeResolver {
    venueTypes(ctx: any, info: GraphQLResolveInfo, args: FindManyVenueTypeArgs): Promise<VenueType[]>;
}
