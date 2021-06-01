import { BarsCreateOrConnectWithoutUploadFileMorphInput } from "../inputs/BarsCreateOrConnectWithoutUploadFileMorphInput";
import { BarsCreateWithoutUploadFileMorphInput } from "../inputs/BarsCreateWithoutUploadFileMorphInput";
import { BarsWhereUniqueInput } from "../inputs/BarsWhereUniqueInput";
export declare class BarsCreateNestedOneWithoutUploadFileMorphInput {
    create?: BarsCreateWithoutUploadFileMorphInput | undefined;
    connectOrCreate?: BarsCreateOrConnectWithoutUploadFileMorphInput | undefined;
    connect?: BarsWhereUniqueInput | undefined;
}
