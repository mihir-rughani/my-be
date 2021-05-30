import { GraphQLResolveInfo } from "graphql";
import { DeleteBarsArgs } from "./args/DeleteBarsArgs";
import { Bars } from "../../../models/Bars";
export declare class DeleteBarsResolver {
    deleteBars(ctx: any, info: GraphQLResolveInfo, args: DeleteBarsArgs): Promise<Bars | null>;
}
