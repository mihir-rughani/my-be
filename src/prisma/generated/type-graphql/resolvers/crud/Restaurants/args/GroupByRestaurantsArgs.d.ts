import { RestaurantsOrderByInput } from "../../../inputs/RestaurantsOrderByInput";
import { RestaurantsScalarWhereWithAggregatesInput } from "../../../inputs/RestaurantsScalarWhereWithAggregatesInput";
import { RestaurantsWhereInput } from "../../../inputs/RestaurantsWhereInput";
export declare class GroupByRestaurantsArgs {
    where?: RestaurantsWhereInput | undefined;
    orderBy?: RestaurantsOrderByInput[] | undefined;
    by: Array<"id" | "title" | "description" | "lat" | "lon" | "suburb" | "city" | "postCode" | "published_at" | "created_by" | "updated_by" | "created_at" | "updated_at" | "breakfast" | "lunch" | "dinner" | "bachelorParty" | "henParty">;
    having?: RestaurantsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
