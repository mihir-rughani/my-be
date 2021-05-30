import { BarsCreateNestedOneWithoutImageInput } from "../inputs/BarsCreateNestedOneWithoutImageInput";
import { RestaurantsCreateNestedOneWithoutImageInput } from "../inputs/RestaurantsCreateNestedOneWithoutImageInput";
import { Upload_fileCreateNestedOneWithoutImageInput } from "../inputs/Upload_fileCreateNestedOneWithoutImageInput";
export declare class Upload_file_morphCreateInput {
    related_type?: string | undefined;
    field?: string | undefined;
    order?: number | undefined;
    image: Upload_fileCreateNestedOneWithoutImageInput;
    bars: BarsCreateNestedOneWithoutImageInput;
    restaurants: RestaurantsCreateNestedOneWithoutImageInput;
}
