import { GraphQLResolveInfo } from "graphql";
import { UpsertVenueTypeArgs } from "./args/UpsertVenueTypeArgs";
import { VenueType } from "../../../models/VenueType";
export declare class UpsertVenueTypeResolver {
    upsertVenueType(ctx: any, info: GraphQLResolveInfo, args: UpsertVenueTypeArgs): Promise<VenueType>;
}
