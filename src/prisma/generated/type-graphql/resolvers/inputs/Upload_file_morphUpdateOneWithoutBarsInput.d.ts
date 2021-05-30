import { Upload_file_morphCreateOrConnectWithoutBarsInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutBarsInput";
import { Upload_file_morphCreateWithoutBarsInput } from "../inputs/Upload_file_morphCreateWithoutBarsInput";
import { Upload_file_morphUpdateWithoutBarsInput } from "../inputs/Upload_file_morphUpdateWithoutBarsInput";
import { Upload_file_morphUpsertWithoutBarsInput } from "../inputs/Upload_file_morphUpsertWithoutBarsInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphUpdateOneWithoutBarsInput {
    create?: Upload_file_morphCreateWithoutBarsInput | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutBarsInput | undefined;
    upsert?: Upload_file_morphUpsertWithoutBarsInput | undefined;
    connect?: Upload_file_morphWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: Upload_file_morphUpdateWithoutBarsInput | undefined;
}
