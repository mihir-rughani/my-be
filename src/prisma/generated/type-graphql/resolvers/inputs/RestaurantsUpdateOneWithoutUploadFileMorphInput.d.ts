import { RestaurantsCreateOrConnectWithoutUploadFileMorphInput } from "../inputs/RestaurantsCreateOrConnectWithoutUploadFileMorphInput";
import { RestaurantsCreateWithoutUploadFileMorphInput } from "../inputs/RestaurantsCreateWithoutUploadFileMorphInput";
import { RestaurantsUpdateWithoutUploadFileMorphInput } from "../inputs/RestaurantsUpdateWithoutUploadFileMorphInput";
import { RestaurantsUpsertWithoutUploadFileMorphInput } from "../inputs/RestaurantsUpsertWithoutUploadFileMorphInput";
import { RestaurantsWhereUniqueInput } from "../inputs/RestaurantsWhereUniqueInput";
export declare class RestaurantsUpdateOneWithoutUploadFileMorphInput {
    create?: RestaurantsCreateWithoutUploadFileMorphInput | undefined;
    connectOrCreate?: RestaurantsCreateOrConnectWithoutUploadFileMorphInput | undefined;
    upsert?: RestaurantsUpsertWithoutUploadFileMorphInput | undefined;
    connect?: RestaurantsWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantsUpdateWithoutUploadFileMorphInput | undefined;
}
