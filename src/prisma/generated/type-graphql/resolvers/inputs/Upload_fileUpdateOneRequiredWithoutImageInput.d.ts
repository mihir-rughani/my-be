import { Upload_fileCreateOrConnectWithoutImageInput } from "../inputs/Upload_fileCreateOrConnectWithoutImageInput";
import { Upload_fileCreateWithoutImageInput } from "../inputs/Upload_fileCreateWithoutImageInput";
import { Upload_fileUpdateWithoutImageInput } from "../inputs/Upload_fileUpdateWithoutImageInput";
import { Upload_fileUpsertWithoutImageInput } from "../inputs/Upload_fileUpsertWithoutImageInput";
import { Upload_fileWhereUniqueInput } from "../inputs/Upload_fileWhereUniqueInput";
export declare class Upload_fileUpdateOneRequiredWithoutImageInput {
    create?: Upload_fileCreateWithoutImageInput | undefined;
    connectOrCreate?: Upload_fileCreateOrConnectWithoutImageInput | undefined;
    upsert?: Upload_fileUpsertWithoutImageInput | undefined;
    connect?: Upload_fileWhereUniqueInput | undefined;
    update?: Upload_fileUpdateWithoutImageInput | undefined;
}
