import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRestaurantsArgs } from "./args/UpdateManyRestaurantsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRestaurantsResolver {
    updateManyRestaurants(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRestaurantsArgs): Promise<AffectedRowsOutput>;
}
