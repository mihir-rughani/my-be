import { GraphQLResolveInfo } from "graphql";
import { AggregateBarsArgs } from "./args/AggregateBarsArgs";
import { AggregateBars } from "../../outputs/AggregateBars";
export declare class AggregateBarsResolver {
    aggregateBars(ctx: any, info: GraphQLResolveInfo, args: AggregateBarsArgs): Promise<AggregateBars>;
}
