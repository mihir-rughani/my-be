import { GraphQLResolveInfo } from "graphql";
import { FindFirstBarsArgs } from "./args/FindFirstBarsArgs";
import { Bars } from "../../../models/Bars";
export declare class FindFirstBarsResolver {
    findFirstBars(ctx: any, info: GraphQLResolveInfo, args: FindFirstBarsArgs): Promise<Bars | null>;
}
