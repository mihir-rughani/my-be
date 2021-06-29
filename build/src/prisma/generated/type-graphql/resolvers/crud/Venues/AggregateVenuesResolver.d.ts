import { GraphQLResolveInfo } from "graphql";
import { AggregateVenuesArgs } from "./args/AggregateVenuesArgs";
import { AggregateVenues } from "../../outputs/AggregateVenues";
export declare class AggregateVenuesResolver {
    aggregateVenues(ctx: any, info: GraphQLResolveInfo, args: AggregateVenuesArgs): Promise<AggregateVenues>;
}
