import { GraphQLResolveInfo } from "graphql";
import { UpdateManyItinerary_itemsArgs } from "./args/UpdateManyItinerary_itemsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyItinerary_itemsResolver {
    updateManyItinerary_items(ctx: any, info: GraphQLResolveInfo, args: UpdateManyItinerary_itemsArgs): Promise<AffectedRowsOutput>;
}
