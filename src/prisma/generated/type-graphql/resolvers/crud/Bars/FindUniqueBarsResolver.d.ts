import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBarsArgs } from "./args/FindUniqueBarsArgs";
import { Bars } from "../../../models/Bars";
export declare class FindUniqueBarsResolver {
    findUniqueBars(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBarsArgs): Promise<Bars | null>;
}
