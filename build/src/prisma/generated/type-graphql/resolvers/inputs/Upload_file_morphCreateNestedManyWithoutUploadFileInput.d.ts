import { Upload_file_morphCreateManyUploadFileInputEnvelope } from "../inputs/Upload_file_morphCreateManyUploadFileInputEnvelope";
import { Upload_file_morphCreateOrConnectWithoutUploadFileInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutUploadFileInput";
import { Upload_file_morphCreateWithoutUploadFileInput } from "../inputs/Upload_file_morphCreateWithoutUploadFileInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphCreateNestedManyWithoutUploadFileInput {
    create?: Upload_file_morphCreateWithoutUploadFileInput[] | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutUploadFileInput[] | undefined;
    createMany?: Upload_file_morphCreateManyUploadFileInputEnvelope | undefined;
    connect?: Upload_file_morphWhereUniqueInput[] | undefined;
}
