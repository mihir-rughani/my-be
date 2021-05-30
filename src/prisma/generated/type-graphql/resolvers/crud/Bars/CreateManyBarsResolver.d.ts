import { GraphQLResolveInfo } from "graphql";
import { CreateManyBarsArgs } from "./args/CreateManyBarsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBarsResolver {
    createManyBars(ctx: any, info: GraphQLResolveInfo, args: CreateManyBarsArgs): Promise<AffectedRowsOutput>;
}
