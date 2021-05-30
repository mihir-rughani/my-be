import { GraphQLResolveInfo } from "graphql";
import { CreateManyRestaurantsArgs } from "./args/CreateManyRestaurantsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRestaurantsResolver {
    createManyRestaurants(ctx: any, info: GraphQLResolveInfo, args: CreateManyRestaurantsArgs): Promise<AffectedRowsOutput>;
}
