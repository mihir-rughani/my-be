import { BarsCreateNestedOneWithoutImageInput } from "../inputs/BarsCreateNestedOneWithoutImageInput";
import { Upload_fileCreateNestedOneWithoutImageInput } from "../inputs/Upload_fileCreateNestedOneWithoutImageInput";
export declare class Upload_file_morphCreateWithoutRestaurantsInput {
    related_type?: string | undefined;
    field?: string | undefined;
    order?: number | undefined;
    image: Upload_fileCreateNestedOneWithoutImageInput;
    bars: BarsCreateNestedOneWithoutImageInput;
}
