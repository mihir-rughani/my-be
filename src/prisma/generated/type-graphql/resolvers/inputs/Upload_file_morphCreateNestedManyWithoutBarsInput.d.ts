import { Upload_file_morphCreateManyBarsInputEnvelope } from "../inputs/Upload_file_morphCreateManyBarsInputEnvelope";
import { Upload_file_morphCreateOrConnectWithoutBarsInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutBarsInput";
import { Upload_file_morphCreateWithoutBarsInput } from "../inputs/Upload_file_morphCreateWithoutBarsInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphCreateNestedManyWithoutBarsInput {
    create?: Upload_file_morphCreateWithoutBarsInput[] | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutBarsInput[] | undefined;
    createMany?: Upload_file_morphCreateManyBarsInputEnvelope | undefined;
    connect?: Upload_file_morphWhereUniqueInput[] | undefined;
}
