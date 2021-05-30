import { GraphQLResolveInfo } from "graphql";
import { CreateBarsArgs } from "./args/CreateBarsArgs";
import { Bars } from "../../../models/Bars";
export declare class CreateBarsResolver {
    createBars(ctx: any, info: GraphQLResolveInfo, args: CreateBarsArgs): Promise<Bars>;
}
