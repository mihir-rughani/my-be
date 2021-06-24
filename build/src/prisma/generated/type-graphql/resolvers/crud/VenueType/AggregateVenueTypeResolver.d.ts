import { GraphQLResolveInfo } from "graphql";
import { AggregateVenueTypeArgs } from "./args/AggregateVenueTypeArgs";
import { AggregateVenueType } from "../../outputs/AggregateVenueType";
export declare class AggregateVenueTypeResolver {
    aggregateVenueType(ctx: any, info: GraphQLResolveInfo, args: AggregateVenueTypeArgs): Promise<AggregateVenueType>;
}
