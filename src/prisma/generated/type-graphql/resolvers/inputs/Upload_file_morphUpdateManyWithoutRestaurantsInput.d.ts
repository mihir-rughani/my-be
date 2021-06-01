import { Upload_file_morphCreateManyRestaurantsInputEnvelope } from "../inputs/Upload_file_morphCreateManyRestaurantsInputEnvelope";
import { Upload_file_morphCreateOrConnectWithoutRestaurantsInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutRestaurantsInput";
import { Upload_file_morphCreateWithoutRestaurantsInput } from "../inputs/Upload_file_morphCreateWithoutRestaurantsInput";
import { Upload_file_morphScalarWhereInput } from "../inputs/Upload_file_morphScalarWhereInput";
import { Upload_file_morphUpdateManyWithWhereWithoutRestaurantsInput } from "../inputs/Upload_file_morphUpdateManyWithWhereWithoutRestaurantsInput";
import { Upload_file_morphUpdateWithWhereUniqueWithoutRestaurantsInput } from "../inputs/Upload_file_morphUpdateWithWhereUniqueWithoutRestaurantsInput";
import { Upload_file_morphUpsertWithWhereUniqueWithoutRestaurantsInput } from "../inputs/Upload_file_morphUpsertWithWhereUniqueWithoutRestaurantsInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphUpdateManyWithoutRestaurantsInput {
    create?: Upload_file_morphCreateWithoutRestaurantsInput[] | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutRestaurantsInput[] | undefined;
    upsert?: Upload_file_morphUpsertWithWhereUniqueWithoutRestaurantsInput[] | undefined;
    createMany?: Upload_file_morphCreateManyRestaurantsInputEnvelope | undefined;
    connect?: Upload_file_morphWhereUniqueInput[] | undefined;
    set?: Upload_file_morphWhereUniqueInput[] | undefined;
    disconnect?: Upload_file_morphWhereUniqueInput[] | undefined;
    delete?: Upload_file_morphWhereUniqueInput[] | undefined;
    update?: Upload_file_morphUpdateWithWhereUniqueWithoutRestaurantsInput[] | undefined;
    updateMany?: Upload_file_morphUpdateManyWithWhereWithoutRestaurantsInput[] | undefined;
    deleteMany?: Upload_file_morphScalarWhereInput[] | undefined;
}
