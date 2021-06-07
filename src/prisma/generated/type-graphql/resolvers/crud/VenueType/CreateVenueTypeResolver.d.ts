import { GraphQLResolveInfo } from "graphql";
import { CreateVenueTypeArgs } from "./args/CreateVenueTypeArgs";
import { VenueType } from "../../../models/VenueType";
export declare class CreateVenueTypeResolver {
    createVenueType(ctx: any, info: GraphQLResolveInfo, args: CreateVenueTypeArgs): Promise<VenueType>;
}
