import { VenuesCreateOrConnectWithoutUploadFileMorphInput } from "../inputs/VenuesCreateOrConnectWithoutUploadFileMorphInput";
import { VenuesCreateWithoutUploadFileMorphInput } from "../inputs/VenuesCreateWithoutUploadFileMorphInput";
import { VenuesWhereUniqueInput } from "../inputs/VenuesWhereUniqueInput";
export declare class VenuesCreateNestedOneWithoutUploadFileMorphInput {
    create?: VenuesCreateWithoutUploadFileMorphInput | undefined;
    connectOrCreate?: VenuesCreateOrConnectWithoutUploadFileMorphInput | undefined;
    connect?: VenuesWhereUniqueInput | undefined;
}
