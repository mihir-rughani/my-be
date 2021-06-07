import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVenuesArgs } from "./args/FindUniqueVenuesArgs";
import { Venues } from "../../../models/Venues";
export declare class FindUniqueVenuesResolver {
    findUniqueVenues(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVenuesArgs): Promise<Venues | null>;
}
