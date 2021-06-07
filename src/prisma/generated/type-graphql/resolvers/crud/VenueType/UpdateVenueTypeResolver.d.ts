import { GraphQLResolveInfo } from "graphql";
import { UpdateVenueTypeArgs } from "./args/UpdateVenueTypeArgs";
import { VenueType } from "../../../models/VenueType";
export declare class UpdateVenueTypeResolver {
    updateVenueType(ctx: any, info: GraphQLResolveInfo, args: UpdateVenueTypeArgs): Promise<VenueType | null>;
}
