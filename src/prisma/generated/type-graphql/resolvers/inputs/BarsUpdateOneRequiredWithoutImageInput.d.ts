import { BarsCreateOrConnectWithoutImageInput } from "../inputs/BarsCreateOrConnectWithoutImageInput";
import { BarsCreateWithoutImageInput } from "../inputs/BarsCreateWithoutImageInput";
import { BarsUpdateWithoutImageInput } from "../inputs/BarsUpdateWithoutImageInput";
import { BarsUpsertWithoutImageInput } from "../inputs/BarsUpsertWithoutImageInput";
import { BarsWhereUniqueInput } from "../inputs/BarsWhereUniqueInput";
export declare class BarsUpdateOneRequiredWithoutImageInput {
    create?: BarsCreateWithoutImageInput | undefined;
    connectOrCreate?: BarsCreateOrConnectWithoutImageInput | undefined;
    upsert?: BarsUpsertWithoutImageInput | undefined;
    connect?: BarsWhereUniqueInput | undefined;
    update?: BarsUpdateWithoutImageInput | undefined;
}
