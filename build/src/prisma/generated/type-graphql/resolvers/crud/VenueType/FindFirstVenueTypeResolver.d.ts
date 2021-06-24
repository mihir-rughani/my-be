import { GraphQLResolveInfo } from "graphql";
import { FindFirstVenueTypeArgs } from "./args/FindFirstVenueTypeArgs";
import { VenueType } from "../../../models/VenueType";
export declare class FindFirstVenueTypeResolver {
    findFirstVenueType(ctx: any, info: GraphQLResolveInfo, args: FindFirstVenueTypeArgs): Promise<VenueType | null>;
}
