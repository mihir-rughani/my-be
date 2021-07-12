import { GraphQLResolveInfo } from "graphql";
import { DeleteManyFavouritesArgs } from "./args/DeleteManyFavouritesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyFavouritesResolver {
    deleteManyFavourites(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFavouritesArgs): Promise<AffectedRowsOutput>;
}
