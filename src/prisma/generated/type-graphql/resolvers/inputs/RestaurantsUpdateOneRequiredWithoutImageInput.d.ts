import { RestaurantsCreateOrConnectWithoutImageInput } from "../inputs/RestaurantsCreateOrConnectWithoutImageInput";
import { RestaurantsCreateWithoutImageInput } from "../inputs/RestaurantsCreateWithoutImageInput";
import { RestaurantsUpdateWithoutImageInput } from "../inputs/RestaurantsUpdateWithoutImageInput";
import { RestaurantsUpsertWithoutImageInput } from "../inputs/RestaurantsUpsertWithoutImageInput";
import { RestaurantsWhereUniqueInput } from "../inputs/RestaurantsWhereUniqueInput";
export declare class RestaurantsUpdateOneRequiredWithoutImageInput {
    create?: RestaurantsCreateWithoutImageInput | undefined;
    connectOrCreate?: RestaurantsCreateOrConnectWithoutImageInput | undefined;
    upsert?: RestaurantsUpsertWithoutImageInput | undefined;
    connect?: RestaurantsWhereUniqueInput | undefined;
    update?: RestaurantsUpdateWithoutImageInput | undefined;
}
