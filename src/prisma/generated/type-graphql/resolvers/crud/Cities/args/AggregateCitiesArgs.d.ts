import { CitiesOrderByInput } from "../../../inputs/CitiesOrderByInput";
import { CitiesWhereInput } from "../../../inputs/CitiesWhereInput";
import { CitiesWhereUniqueInput } from "../../../inputs/CitiesWhereUniqueInput";
export declare class AggregateCitiesArgs {
    where?: CitiesWhereInput | undefined;
    orderBy?: CitiesOrderByInput[] | undefined;
    cursor?: CitiesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
