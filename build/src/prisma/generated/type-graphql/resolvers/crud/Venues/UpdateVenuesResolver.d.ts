import { GraphQLResolveInfo } from "graphql";
import { UpdateVenuesArgs } from "./args/UpdateVenuesArgs";
import { Venues } from "../../../models/Venues";
export declare class UpdateVenuesResolver {
    updateVenues(ctx: any, info: GraphQLResolveInfo, args: UpdateVenuesArgs): Promise<Venues | null>;
}
