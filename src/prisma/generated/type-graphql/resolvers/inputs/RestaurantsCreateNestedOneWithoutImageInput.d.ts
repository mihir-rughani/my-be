import { RestaurantsCreateOrConnectWithoutImageInput } from "../inputs/RestaurantsCreateOrConnectWithoutImageInput";
import { RestaurantsCreateWithoutImageInput } from "../inputs/RestaurantsCreateWithoutImageInput";
import { RestaurantsWhereUniqueInput } from "../inputs/RestaurantsWhereUniqueInput";
export declare class RestaurantsCreateNestedOneWithoutImageInput {
    create?: RestaurantsCreateWithoutImageInput | undefined;
    connectOrCreate?: RestaurantsCreateOrConnectWithoutImageInput | undefined;
    connect?: RestaurantsWhereUniqueInput | undefined;
}
