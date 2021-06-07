import { GraphQLResolveInfo } from "graphql";
import { DeleteVenuesArgs } from "./args/DeleteVenuesArgs";
import { Venues } from "../../../models/Venues";
export declare class DeleteVenuesResolver {
    deleteVenues(ctx: any, info: GraphQLResolveInfo, args: DeleteVenuesArgs): Promise<Venues | null>;
}
