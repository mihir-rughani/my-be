import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRestaurantsArgs } from "./args/DeleteManyRestaurantsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRestaurantsResolver {
    deleteManyRestaurants(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRestaurantsArgs): Promise<AffectedRowsOutput>;
}
