import { GraphQLResolveInfo } from "graphql";
import { UpdateManyFavouritesArgs } from "./args/UpdateManyFavouritesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyFavouritesResolver {
    updateManyFavourites(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFavouritesArgs): Promise<AffectedRowsOutput>;
}
