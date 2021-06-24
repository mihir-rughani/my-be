import { VenuesCreateOrConnectWithoutUploadFileMorphInput } from "../inputs/VenuesCreateOrConnectWithoutUploadFileMorphInput";
import { VenuesCreateWithoutUploadFileMorphInput } from "../inputs/VenuesCreateWithoutUploadFileMorphInput";
import { VenuesUpdateWithoutUploadFileMorphInput } from "../inputs/VenuesUpdateWithoutUploadFileMorphInput";
import { VenuesUpsertWithoutUploadFileMorphInput } from "../inputs/VenuesUpsertWithoutUploadFileMorphInput";
import { VenuesWhereUniqueInput } from "../inputs/VenuesWhereUniqueInput";
export declare class VenuesUpdateOneWithoutUploadFileMorphInput {
    create?: VenuesCreateWithoutUploadFileMorphInput | undefined;
    connectOrCreate?: VenuesCreateOrConnectWithoutUploadFileMorphInput | undefined;
    upsert?: VenuesUpsertWithoutUploadFileMorphInput | undefined;
    connect?: VenuesWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: VenuesUpdateWithoutUploadFileMorphInput | undefined;
}
