import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBarsArgs } from "./args/DeleteManyBarsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBarsResolver {
    deleteManyBars(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBarsArgs): Promise<AffectedRowsOutput>;
}
