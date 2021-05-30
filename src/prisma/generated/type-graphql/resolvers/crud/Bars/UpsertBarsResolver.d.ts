import { GraphQLResolveInfo } from "graphql";
import { UpsertBarsArgs } from "./args/UpsertBarsArgs";
import { Bars } from "../../../models/Bars";
export declare class UpsertBarsResolver {
    upsertBars(ctx: any, info: GraphQLResolveInfo, args: UpsertBarsArgs): Promise<Bars>;
}
