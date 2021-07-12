import { GraphQLResolveInfo } from "graphql";
import { AggregateFavouritesArgs } from "./args/AggregateFavouritesArgs";
import { AggregateFavourites } from "../../outputs/AggregateFavourites";
export declare class AggregateFavouritesResolver {
    aggregateFavourites(ctx: any, info: GraphQLResolveInfo, args: AggregateFavouritesArgs): Promise<AggregateFavourites>;
}
