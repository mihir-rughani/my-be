import { RestaurantsCreateOrConnectWithoutUploadFileMorphInput } from "../inputs/RestaurantsCreateOrConnectWithoutUploadFileMorphInput";
import { RestaurantsCreateWithoutUploadFileMorphInput } from "../inputs/RestaurantsCreateWithoutUploadFileMorphInput";
import { RestaurantsWhereUniqueInput } from "../inputs/RestaurantsWhereUniqueInput";
export declare class RestaurantsCreateNestedOneWithoutUploadFileMorphInput {
    create?: RestaurantsCreateWithoutUploadFileMorphInput | undefined;
    connectOrCreate?: RestaurantsCreateOrConnectWithoutUploadFileMorphInput | undefined;
    connect?: RestaurantsWhereUniqueInput | undefined;
}
