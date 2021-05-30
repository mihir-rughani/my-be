import { RestaurantsCreateNestedOneWithoutImageInput } from "../inputs/RestaurantsCreateNestedOneWithoutImageInput";
import { Upload_fileCreateNestedOneWithoutImageInput } from "../inputs/Upload_fileCreateNestedOneWithoutImageInput";
export declare class Upload_file_morphCreateWithoutBarsInput {
    related_type?: string | undefined;
    field?: string | undefined;
    order?: number | undefined;
    image: Upload_fileCreateNestedOneWithoutImageInput;
    restaurants: RestaurantsCreateNestedOneWithoutImageInput;
}
