import { Upload_file_morphCreateManyRestaurantsInputEnvelope } from "../inputs/Upload_file_morphCreateManyRestaurantsInputEnvelope";
import { Upload_file_morphCreateOrConnectWithoutRestaurantsInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutRestaurantsInput";
import { Upload_file_morphCreateWithoutRestaurantsInput } from "../inputs/Upload_file_morphCreateWithoutRestaurantsInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphCreateNestedManyWithoutRestaurantsInput {
    create?: Upload_file_morphCreateWithoutRestaurantsInput[] | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutRestaurantsInput[] | undefined;
    createMany?: Upload_file_morphCreateManyRestaurantsInputEnvelope | undefined;
    connect?: Upload_file_morphWhereUniqueInput[] | undefined;
}
