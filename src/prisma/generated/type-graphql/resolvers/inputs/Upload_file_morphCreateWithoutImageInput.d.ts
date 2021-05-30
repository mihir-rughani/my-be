import { BarsCreateNestedOneWithoutImageInput } from "../inputs/BarsCreateNestedOneWithoutImageInput";
import { RestaurantsCreateNestedOneWithoutImageInput } from "../inputs/RestaurantsCreateNestedOneWithoutImageInput";
export declare class Upload_file_morphCreateWithoutImageInput {
    related_type?: string | undefined;
    field?: string | undefined;
    order?: number | undefined;
    bars: BarsCreateNestedOneWithoutImageInput;
    restaurants: RestaurantsCreateNestedOneWithoutImageInput;
}
