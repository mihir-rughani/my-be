import { GraphQLResolveInfo } from "graphql";
import { GroupByFavouritesArgs } from "./args/GroupByFavouritesArgs";
import { FavouritesGroupBy } from "../../outputs/FavouritesGroupBy";
export declare class GroupByFavouritesResolver {
    groupByFavourites(ctx: any, info: GraphQLResolveInfo, args: GroupByFavouritesArgs): Promise<FavouritesGroupBy[]>;
}
