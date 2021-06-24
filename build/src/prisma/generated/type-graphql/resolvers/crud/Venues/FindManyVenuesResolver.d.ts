import { GraphQLResolveInfo } from "graphql";
import { FindManyVenuesArgs } from "./args/FindManyVenuesArgs";
import { Venues } from "../../../models/Venues";
export declare class FindManyVenuesResolver {
    findManyVenues(ctx: any, info: GraphQLResolveInfo, args: FindManyVenuesArgs): Promise<Venues[]>;
}
