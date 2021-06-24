import { Upload_fileCreateOrConnectWithoutUploadFileMorphInput } from "../inputs/Upload_fileCreateOrConnectWithoutUploadFileMorphInput";
import { Upload_fileCreateWithoutUploadFileMorphInput } from "../inputs/Upload_fileCreateWithoutUploadFileMorphInput";
import { Upload_fileUpdateWithoutUploadFileMorphInput } from "../inputs/Upload_fileUpdateWithoutUploadFileMorphInput";
import { Upload_fileUpsertWithoutUploadFileMorphInput } from "../inputs/Upload_fileUpsertWithoutUploadFileMorphInput";
import { Upload_fileWhereUniqueInput } from "../inputs/Upload_fileWhereUniqueInput";
export declare class Upload_fileUpdateOneWithoutUploadFileMorphInput {
    create?: Upload_fileCreateWithoutUploadFileMorphInput | undefined;
    connectOrCreate?: Upload_fileCreateOrConnectWithoutUploadFileMorphInput | undefined;
    upsert?: Upload_fileUpsertWithoutUploadFileMorphInput | undefined;
    connect?: Upload_fileWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: Upload_fileUpdateWithoutUploadFileMorphInput | undefined;
}
