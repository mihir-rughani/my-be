import { Upload_file_morphCreateManyBarsInputEnvelope } from "../inputs/Upload_file_morphCreateManyBarsInputEnvelope";
import { Upload_file_morphCreateOrConnectWithoutBarsInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutBarsInput";
import { Upload_file_morphCreateWithoutBarsInput } from "../inputs/Upload_file_morphCreateWithoutBarsInput";
import { Upload_file_morphScalarWhereInput } from "../inputs/Upload_file_morphScalarWhereInput";
import { Upload_file_morphUpdateManyWithWhereWithoutBarsInput } from "../inputs/Upload_file_morphUpdateManyWithWhereWithoutBarsInput";
import { Upload_file_morphUpdateWithWhereUniqueWithoutBarsInput } from "../inputs/Upload_file_morphUpdateWithWhereUniqueWithoutBarsInput";
import { Upload_file_morphUpsertWithWhereUniqueWithoutBarsInput } from "../inputs/Upload_file_morphUpsertWithWhereUniqueWithoutBarsInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphUpdateManyWithoutBarsInput {
    create?: Upload_file_morphCreateWithoutBarsInput[] | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutBarsInput[] | undefined;
    upsert?: Upload_file_morphUpsertWithWhereUniqueWithoutBarsInput[] | undefined;
    createMany?: Upload_file_morphCreateManyBarsInputEnvelope | undefined;
    connect?: Upload_file_morphWhereUniqueInput[] | undefined;
    set?: Upload_file_morphWhereUniqueInput[] | undefined;
    disconnect?: Upload_file_morphWhereUniqueInput[] | undefined;
    delete?: Upload_file_morphWhereUniqueInput[] | undefined;
    update?: Upload_file_morphUpdateWithWhereUniqueWithoutBarsInput[] | undefined;
    updateMany?: Upload_file_morphUpdateManyWithWhereWithoutBarsInput[] | undefined;
    deleteMany?: Upload_file_morphScalarWhereInput[] | undefined;
}
