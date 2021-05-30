import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBarsArgs } from "./args/UpdateManyBarsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBarsResolver {
    updateManyBars(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBarsArgs): Promise<AffectedRowsOutput>;
}
