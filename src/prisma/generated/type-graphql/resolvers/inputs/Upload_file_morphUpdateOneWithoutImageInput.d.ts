import { Upload_file_morphCreateOrConnectWithoutImageInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutImageInput";
import { Upload_file_morphCreateWithoutImageInput } from "../inputs/Upload_file_morphCreateWithoutImageInput";
import { Upload_file_morphUpdateWithoutImageInput } from "../inputs/Upload_file_morphUpdateWithoutImageInput";
import { Upload_file_morphUpsertWithoutImageInput } from "../inputs/Upload_file_morphUpsertWithoutImageInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphUpdateOneWithoutImageInput {
    create?: Upload_file_morphCreateWithoutImageInput | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutImageInput | undefined;
    upsert?: Upload_file_morphUpsertWithoutImageInput | undefined;
    connect?: Upload_file_morphWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: Upload_file_morphUpdateWithoutImageInput | undefined;
}
