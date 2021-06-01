import { Upload_file_morphCreateManyUploadFileInputEnvelope } from "../inputs/Upload_file_morphCreateManyUploadFileInputEnvelope";
import { Upload_file_morphCreateOrConnectWithoutUploadFileInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutUploadFileInput";
import { Upload_file_morphCreateWithoutUploadFileInput } from "../inputs/Upload_file_morphCreateWithoutUploadFileInput";
import { Upload_file_morphScalarWhereInput } from "../inputs/Upload_file_morphScalarWhereInput";
import { Upload_file_morphUpdateManyWithWhereWithoutUploadFileInput } from "../inputs/Upload_file_morphUpdateManyWithWhereWithoutUploadFileInput";
import { Upload_file_morphUpdateWithWhereUniqueWithoutUploadFileInput } from "../inputs/Upload_file_morphUpdateWithWhereUniqueWithoutUploadFileInput";
import { Upload_file_morphUpsertWithWhereUniqueWithoutUploadFileInput } from "../inputs/Upload_file_morphUpsertWithWhereUniqueWithoutUploadFileInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphUpdateManyWithoutUploadFileInput {
    create?: Upload_file_morphCreateWithoutUploadFileInput[] | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutUploadFileInput[] | undefined;
    upsert?: Upload_file_morphUpsertWithWhereUniqueWithoutUploadFileInput[] | undefined;
    createMany?: Upload_file_morphCreateManyUploadFileInputEnvelope | undefined;
    connect?: Upload_file_morphWhereUniqueInput[] | undefined;
    set?: Upload_file_morphWhereUniqueInput[] | undefined;
    disconnect?: Upload_file_morphWhereUniqueInput[] | undefined;
    delete?: Upload_file_morphWhereUniqueInput[] | undefined;
    update?: Upload_file_morphUpdateWithWhereUniqueWithoutUploadFileInput[] | undefined;
    updateMany?: Upload_file_morphUpdateManyWithWhereWithoutUploadFileInput[] | undefined;
    deleteMany?: Upload_file_morphScalarWhereInput[] | undefined;
}
