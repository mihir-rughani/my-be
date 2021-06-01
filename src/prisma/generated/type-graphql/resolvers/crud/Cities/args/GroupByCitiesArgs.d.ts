import { CitiesOrderByInput } from "../../../inputs/CitiesOrderByInput";
import { CitiesScalarWhereWithAggregatesInput } from "../../../inputs/CitiesScalarWhereWithAggregatesInput";
import { CitiesWhereInput } from "../../../inputs/CitiesWhereInput";
export declare class GroupByCitiesArgs {
    where?: CitiesWhereInput | undefined;
    orderBy?: CitiesOrderByInput[] | undefined;
    by: Array<"cityId" | "name">;
    having?: CitiesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
