import { GraphQLResolveInfo } from "graphql";
import { CreateManyItineraryArgs } from "./args/CreateManyItineraryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyItineraryResolver {
    createManyItinerary(ctx: any, info: GraphQLResolveInfo, args: CreateManyItineraryArgs): Promise<AffectedRowsOutput>;
}
