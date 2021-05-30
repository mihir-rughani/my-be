import { GraphQLResolveInfo } from "graphql";
import { GroupByBarsArgs } from "./args/GroupByBarsArgs";
import { BarsGroupBy } from "../../outputs/BarsGroupBy";
export declare class GroupByBarsResolver {
    groupByBars(ctx: any, info: GraphQLResolveInfo, args: GroupByBarsArgs): Promise<BarsGroupBy[]>;
}
