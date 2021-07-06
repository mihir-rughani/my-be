import { ItineraryCreateOrConnectWithoutPlacesInput } from "../inputs/ItineraryCreateOrConnectWithoutPlacesInput";
import { ItineraryCreateWithoutPlacesInput } from "../inputs/ItineraryCreateWithoutPlacesInput";
import { ItineraryUpdateWithoutPlacesInput } from "../inputs/ItineraryUpdateWithoutPlacesInput";
import { ItineraryUpsertWithoutPlacesInput } from "../inputs/ItineraryUpsertWithoutPlacesInput";
import { ItineraryWhereUniqueInput } from "../inputs/ItineraryWhereUniqueInput";
export declare class ItineraryUpdateOneWithoutPlacesInput {
    create?: ItineraryCreateWithoutPlacesInput | undefined;
    connectOrCreate?: ItineraryCreateOrConnectWithoutPlacesInput | undefined;
    upsert?: ItineraryUpsertWithoutPlacesInput | undefined;
    connect?: ItineraryWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: ItineraryUpdateWithoutPlacesInput | undefined;
}
