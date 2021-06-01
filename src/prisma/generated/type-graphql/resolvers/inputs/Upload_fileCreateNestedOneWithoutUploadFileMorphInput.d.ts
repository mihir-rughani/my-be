import { Upload_fileCreateOrConnectWithoutUploadFileMorphInput } from "../inputs/Upload_fileCreateOrConnectWithoutUploadFileMorphInput";
import { Upload_fileCreateWithoutUploadFileMorphInput } from "../inputs/Upload_fileCreateWithoutUploadFileMorphInput";
import { Upload_fileWhereUniqueInput } from "../inputs/Upload_fileWhereUniqueInput";
export declare class Upload_fileCreateNestedOneWithoutUploadFileMorphInput {
    create?: Upload_fileCreateWithoutUploadFileMorphInput | undefined;
    connectOrCreate?: Upload_fileCreateOrConnectWithoutUploadFileMorphInput | undefined;
    connect?: Upload_fileWhereUniqueInput | undefined;
}
