import { Upload_fileOrderByInput } from "../../../inputs/Upload_fileOrderByInput";
import { Upload_fileWhereInput } from "../../../inputs/Upload_fileWhereInput";
import { Upload_fileWhereUniqueInput } from "../../../inputs/Upload_fileWhereUniqueInput";
export declare class AggregateUpload_fileArgs {
    where?: Upload_fileWhereInput | undefined;
    orderBy?: Upload_fileOrderByInput[] | undefined;
    cursor?: Upload_fileWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
