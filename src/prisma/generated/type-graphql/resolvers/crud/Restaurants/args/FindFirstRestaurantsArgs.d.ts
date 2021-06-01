import { RestaurantsOrderByInput } from "../../../inputs/RestaurantsOrderByInput";
import { RestaurantsWhereInput } from "../../../inputs/RestaurantsWhereInput";
import { RestaurantsWhereUniqueInput } from "../../../inputs/RestaurantsWhereUniqueInput";
export declare class FindFirstRestaurantsArgs {
    where?: RestaurantsWhereInput | undefined;
    orderBy?: RestaurantsOrderByInput[] | undefined;
    cursor?: RestaurantsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "lat" | "lon" | "suburb" | "city" | "postCode" | "published_at" | "created_by" | "updated_by" | "created_at" | "updated_at" | "breakfast" | "lunch" | "dinner" | "bachelorParty" | "henParty" | "restaurant_image"> | undefined;
}
