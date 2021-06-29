import { GraphQLResolveInfo } from "graphql";
import { FindFirstVenuesArgs } from "./args/FindFirstVenuesArgs";
import { Venues } from "../../../models/Venues";
export declare class FindFirstVenuesResolver {
    findFirstVenues(ctx: any, info: GraphQLResolveInfo, args: FindFirstVenuesArgs): Promise<Venues | null>;
}
