import { Upload_file_morphCreateManyVenuesInputEnvelope } from "../inputs/Upload_file_morphCreateManyVenuesInputEnvelope";
import { Upload_file_morphCreateOrConnectWithoutVenuesInput } from "../inputs/Upload_file_morphCreateOrConnectWithoutVenuesInput";
import { Upload_file_morphCreateWithoutVenuesInput } from "../inputs/Upload_file_morphCreateWithoutVenuesInput";
import { Upload_file_morphWhereUniqueInput } from "../inputs/Upload_file_morphWhereUniqueInput";
export declare class Upload_file_morphCreateNestedManyWithoutVenuesInput {
    create?: Upload_file_morphCreateWithoutVenuesInput[] | undefined;
    connectOrCreate?: Upload_file_morphCreateOrConnectWithoutVenuesInput[] | undefined;
    createMany?: Upload_file_morphCreateManyVenuesInputEnvelope | undefined;
    connect?: Upload_file_morphWhereUniqueInput[] | undefined;
}
