import { GraphQLResolveInfo } from "graphql";
import { GroupByVenueTypeArgs } from "./args/GroupByVenueTypeArgs";
import { VenueTypeGroupBy } from "../../outputs/VenueTypeGroupBy";
export declare class GroupByVenueTypeResolver {
    groupByVenueType(ctx: any, info: GraphQLResolveInfo, args: GroupByVenueTypeArgs): Promise<VenueTypeGroupBy[]>;
}
