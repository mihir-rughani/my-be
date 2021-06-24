import { GraphQLResolveInfo } from "graphql";
import { CreateVenuesArgs } from "./args/CreateVenuesArgs";
import { Venues } from "../../../models/Venues";
export declare class CreateVenuesResolver {
    createVenues(ctx: any, info: GraphQLResolveInfo, args: CreateVenuesArgs): Promise<Venues>;
}
