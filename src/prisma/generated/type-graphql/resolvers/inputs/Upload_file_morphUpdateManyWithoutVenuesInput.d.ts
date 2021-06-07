import { Upload_file_morphCreateManyVenuesInputEnvelope } from "../inputs/Upload_file_morphCreateManyVenuesInputEnvelope";
import { Upload_file_morphCreateOrConnectWithoutVenuesInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutVenuesInput";
import { Upload_file_morphCreateWithoutVenuesInput } from "../inputs/Upload_file_morphCreateWithoutVenuesInput";
import { Upload_file_morphScalarWhereInput } from "../inputs/Upload_file_morphScalarWhereInput";
import { Upload_file_morphUpdateManyWithWhereWithoutVenuesInput } from "../inputs/Upload_file_morphUpdateManyWithWhereWithoutVenuesInput";
import { Upload_file_morphUpdateWithWhereUniqueWithoutVenuesInput } from "../inputs/Upload_file_morphUpdateWithWhereUniqueWithoutVenuesInput";
import { Upload_file_morphUpsertWithWhereUniqueWithoutVenuesInput } from "../inputs/Upload_file_morphUpsertWithWhereUniqueWithoutVenuesInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphUpdateManyWithoutVenuesInput {
    create?: Upload_file_morphCreateWithoutVenuesInput[] | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutVenuesInput[] | undefined;
    upsert?: Upload_file_morphUpsertWithWhereUniqueWithoutVenuesInput[] | undefined;
    createMany?: Upload_file_morphCreateManyVenuesInputEnvelope | undefined;
    connect?: Upload_file_morphWhereUniqueInput[] | undefined;
    set?: Upload_file_morphWhereUniqueInput[] | undefined;
    disconnect?: Upload_file_morphWhereUniqueInput[] | undefined;
    delete?: Upload_file_morphWhereUniqueInput[] | undefined;
    update?: Upload_file_morphUpdateWithWhereUniqueWithoutVenuesInput[] | undefined;
    updateMany?: Upload_file_morphUpdateManyWithWhereWithoutVenuesInput[] | undefined;
    deleteMany?: Upload_file_morphScalarWhereInput[] | undefined;
}
