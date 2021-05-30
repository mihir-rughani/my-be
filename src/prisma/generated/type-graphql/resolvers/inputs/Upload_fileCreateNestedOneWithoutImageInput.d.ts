import { Upload_fileCreateOrConnectWithoutImageInput } from "../inputs/Upload_fileCreateOrConnectWithoutImageInput";
import { Upload_fileCreateWithoutImageInput } from "../inputs/Upload_fileCreateWithoutImageInput";
import { Upload_fileWhereUniqueInput } from "../inputs/Upload_fileWhereUniqueInput";
export declare class Upload_fileCreateNestedOneWithoutImageInput {
    create?: Upload_fileCreateWithoutImageInput | undefined;
    connectOrCreate?: Upload_fileCreateOrConnectWithoutImageInput | undefined;
    connect?: Upload_fileWhereUniqueInput | undefined;
}
