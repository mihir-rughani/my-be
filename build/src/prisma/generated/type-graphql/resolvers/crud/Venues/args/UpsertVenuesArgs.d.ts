import { VenuesCreateInput } from "../../../inputs/VenuesCreateInput";
import { VenuesUpdateInput } from "../../../inputs/VenuesUpdateInput";
import { VenuesWhereUniqueInput } from "../../../inputs/VenuesWhereUniqueInput";
export declare class UpsertVenuesArgs {
    where: VenuesWhereUniqueInput;
    create: VenuesCreateInput;
    update: VenuesUpdateInput;
}
