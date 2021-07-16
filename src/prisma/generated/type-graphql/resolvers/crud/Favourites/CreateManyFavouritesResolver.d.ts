import { GraphQLResolveInfo } from "graphql";
import { CreateManyFavouritesArgs } from "./args/CreateManyFavouritesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyFavouritesResolver {
    createManyFavourites(ctx: any, info: GraphQLResolveInfo, args: CreateManyFavouritesArgs): Promise<AffectedRowsOutput>;
}
