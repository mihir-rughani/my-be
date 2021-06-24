import { GraphQLResolveInfo } from "graphql";
import { DeleteVenueTypeArgs } from "./args/DeleteVenueTypeArgs";
import { VenueType } from "../../../models/VenueType";
export declare class DeleteVenueTypeResolver {
    deleteVenueType(ctx: any, info: GraphQLResolveInfo, args: DeleteVenueTypeArgs): Promise<VenueType | null>;
}
