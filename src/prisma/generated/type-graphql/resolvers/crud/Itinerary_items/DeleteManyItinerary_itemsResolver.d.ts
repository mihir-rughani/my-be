import { GraphQLResolveInfo } from "graphql";
import { DeleteManyItinerary_itemsArgs } from "./args/DeleteManyItinerary_itemsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyItinerary_itemsResolver {
    deleteManyItinerary_items(ctx: any, info: GraphQLResolveInfo, args: DeleteManyItinerary_itemsArgs): Promise<AffectedRowsOutput>;
}
