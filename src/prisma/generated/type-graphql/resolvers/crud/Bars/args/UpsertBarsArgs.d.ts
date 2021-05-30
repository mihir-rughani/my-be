import { BarsCreateInput } from "../../../inputs/BarsCreateInput";
import { BarsUpdateInput } from "../../../inputs/BarsUpdateInput";
import { BarsWhereUniqueInput } from "../../../inputs/BarsWhereUniqueInput";
export declare class UpsertBarsArgs {
    where: BarsWhereUniqueInput;
    create: BarsCreateInput;
    update: BarsUpdateInput;
}
