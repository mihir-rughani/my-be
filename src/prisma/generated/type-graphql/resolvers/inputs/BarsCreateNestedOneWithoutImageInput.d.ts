import { BarsCreateOrConnectWithoutImageInput } from "../inputs/BarsCreateOrConnectWithoutImageInput";
import { BarsCreateWithoutImageInput } from "../inputs/BarsCreateWithoutImageInput";
import { BarsWhereUniqueInput } from "../inputs/BarsWhereUniqueInput";
export declare class BarsCreateNestedOneWithoutImageInput {
    create?: BarsCreateWithoutImageInput | undefined;
    connectOrCreate?: BarsCreateOrConnectWithoutImageInput | undefined;
    connect?: BarsWhereUniqueInput | undefined;
}
