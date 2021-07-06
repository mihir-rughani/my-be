import { ItineraryCreateOrConnectWithoutPlacesInput } from "../inputs/ItineraryCreateOrConnectWithoutPlacesInput";
import { ItineraryCreateWithoutPlacesInput } from "../inputs/ItineraryCreateWithoutPlacesInput";
import { ItineraryWhereUniqueInput } from "../inputs/ItineraryWhereUniqueInput";
export declare class ItineraryCreateNestedOneWithoutPlacesInput {
    create?: ItineraryCreateWithoutPlacesInput | undefined;
    connectOrCreate?: ItineraryCreateOrConnectWithoutPlacesInput | undefined;
    connect?: ItineraryWhereUniqueInput | undefined;
}
