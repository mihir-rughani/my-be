import { GraphQLResolveInfo } from "graphql";
import { UpsertVenuesArgs } from "./args/UpsertVenuesArgs";
import { Venues } from "../../../models/Venues";
export declare class UpsertVenuesResolver {
    upsertVenues(ctx: any, info: GraphQLResolveInfo, args: UpsertVenuesArgs): Promise<Venues>;
}
