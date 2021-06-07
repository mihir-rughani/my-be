import { GraphQLResolveInfo } from "graphql";
import { GroupByVenuesArgs } from "./args/GroupByVenuesArgs";
import { VenuesGroupBy } from "../../outputs/VenuesGroupBy";
export declare class GroupByVenuesResolver {
    groupByVenues(ctx: any, info: GraphQLResolveInfo, args: GroupByVenuesArgs): Promise<VenuesGroupBy[]>;
}
