import { GraphQLResolveInfo } from "graphql";
import { CreateManyItinerary_itemsArgs } from "./args/CreateManyItinerary_itemsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyItinerary_itemsResolver {
    createManyItinerary_items(ctx: any, info: GraphQLResolveInfo, args: CreateManyItinerary_itemsArgs): Promise<AffectedRowsOutput>;
}
