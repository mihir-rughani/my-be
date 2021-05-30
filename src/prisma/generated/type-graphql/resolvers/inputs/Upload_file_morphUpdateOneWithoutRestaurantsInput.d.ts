import { Upload_file_morphCreateOrConnectWithoutRestaurantsInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutRestaurantsInput";
import { Upload_file_morphCreateWithoutRestaurantsInput } from "../inputs/Upload_file_morphCreateWithoutRestaurantsInput";
import { Upload_file_morphUpdateWithoutRestaurantsInput } from "../inputs/Upload_file_morphUpdateWithoutRestaurantsInput";
import { Upload_file_morphUpsertWithoutRestaurantsInput } from "../inputs/Upload_file_morphUpsertWithoutRestaurantsInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphUpdateOneWithoutRestaurantsInput {
    create?: Upload_file_morphCreateWithoutRestaurantsInput | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutRestaurantsInput | undefined;
    upsert?: Upload_file_morphUpsertWithoutRestaurantsInput | undefined;
    connect?: Upload_file_morphWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: Upload_file_morphUpdateWithoutRestaurantsInput | undefined;
}
