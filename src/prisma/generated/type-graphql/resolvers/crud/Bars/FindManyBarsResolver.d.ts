import { GraphQLResolveInfo } from "graphql";
import { FindManyBarsArgs } from "./args/FindManyBarsArgs";
import { Bars } from "../../../models/Bars";
export declare class FindManyBarsResolver {
    findManyBars(ctx: any, info: GraphQLResolveInfo, args: FindManyBarsArgs): Promise<Bars[]>;
}
