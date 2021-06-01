import { BarsCreateOrConnectWithoutUploadFileMorphInput } from "../inputs/BarsCreateOrConnectWithoutUploadFileMorphInput";
import { BarsCreateWithoutUploadFileMorphInput } from "../inputs/BarsCreateWithoutUploadFileMorphInput";
import { BarsUpdateWithoutUploadFileMorphInput } from "../inputs/BarsUpdateWithoutUploadFileMorphInput";
import { BarsUpsertWithoutUploadFileMorphInput } from "../inputs/BarsUpsertWithoutUploadFileMorphInput";
import { BarsWhereUniqueInput } from "../inputs/BarsWhereUniqueInput";
export declare class BarsUpdateOneWithoutUploadFileMorphInput {
    create?: BarsCreateWithoutUploadFileMorphInput | undefined;
    connectOrCreate?: BarsCreateOrConnectWithoutUploadFileMorphInput | undefined;
    upsert?: BarsUpsertWithoutUploadFileMorphInput | undefined;
    connect?: BarsWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: BarsUpdateWithoutUploadFileMorphInput | undefined;
}
