import { BarsOrderByInput } from "../../../inputs/BarsOrderByInput";
import { BarsWhereInput } from "../../../inputs/BarsWhereInput";
import { BarsWhereUniqueInput } from "../../../inputs/BarsWhereUniqueInput";
export declare class AggregateBarsArgs {
    where?: BarsWhereInput | undefined;
    orderBy?: BarsOrderByInput[] | undefined;
    cursor?: BarsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
