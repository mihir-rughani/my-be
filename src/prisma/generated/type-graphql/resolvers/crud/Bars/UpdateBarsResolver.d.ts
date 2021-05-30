import { GraphQLResolveInfo } from "graphql";
import { UpdateBarsArgs } from "./args/UpdateBarsArgs";
import { Bars } from "../../../models/Bars";
export declare class UpdateBarsResolver {
    updateBars(ctx: any, info: GraphQLResolveInfo, args: UpdateBarsArgs): Promise<Bars | null>;
}
