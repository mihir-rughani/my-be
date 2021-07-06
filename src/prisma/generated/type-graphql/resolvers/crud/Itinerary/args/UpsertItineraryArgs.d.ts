import { ItineraryCreateInput } from "../../../inputs/ItineraryCreateInput";
import { ItineraryUpdateInput } from "../../../inputs/ItineraryUpdateInput";
import { ItineraryWhereUniqueInput } from "../../../inputs/ItineraryWhereUniqueInput";
export declare class UpsertItineraryArgs {
    where: ItineraryWhereUniqueInput;
    create: ItineraryCreateInput;
    update: ItineraryUpdateInput;
}
