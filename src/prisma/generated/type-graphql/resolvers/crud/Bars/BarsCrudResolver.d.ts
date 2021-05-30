import { GraphQLResolveInfo } from "graphql";
import { AggregateBarsArgs } from "./args/AggregateBarsArgs";
import { CreateBarsArgs } from "./args/CreateBarsArgs";
import { CreateManyBarsArgs } from "./args/CreateManyBarsArgs";
import { DeleteBarsArgs } from "./args/DeleteBarsArgs";
import { DeleteManyBarsArgs } from "./args/DeleteManyBarsArgs";
import { FindFirstBarsArgs } from "./args/FindFirstBarsArgs";
import { FindManyBarsArgs } from "./args/FindManyBarsArgs";
import { FindUniqueBarsArgs } from "./args/FindUniqueBarsArgs";
import { GroupByBarsArgs } from "./args/GroupByBarsArgs";
import { UpdateBarsArgs } from "./args/UpdateBarsArgs";
import { UpdateManyBarsArgs } from "./args/UpdateManyBarsArgs";
import { UpsertBarsArgs } from "./args/UpsertBarsArgs";
import { Bars } from "../../../models/Bars";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBars } from "../../outputs/AggregateBars";
import { BarsGroupBy } from "../../outputs/BarsGroupBy";
export declare class BarsCrudResolver {
    findUniqueBars(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBarsArgs): Promise<Bars | null>;
    findFirstBars(ctx: any, info: GraphQLResolveInfo, args: FindFirstBarsArgs): Promise<Bars | null>;
    findManyBars(ctx: any, info: GraphQLResolveInfo, args: FindManyBarsArgs): Promise<Bars[]>;
    createBars(ctx: any, info: GraphQLResolveInfo, args: CreateBarsArgs): Promise<Bars>;
    createManyBars(ctx: any, info: GraphQLResolveInfo, args: CreateManyBarsArgs): Promise<AffectedRowsOutput>;
    deleteBars(ctx: any, info: GraphQLResolveInfo, args: DeleteBarsArgs): Promise<Bars | null>;
    updateBars(ctx: any, info: GraphQLResolveInfo, args: UpdateBarsArgs): Promise<Bars | null>;
    deleteManyBars(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBarsArgs): Promise<AffectedRowsOutput>;
    updateManyBars(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBarsArgs): Promise<AffectedRowsOutput>;
    upsertBars(ctx: any, info: GraphQLResolveInfo, args: UpsertBarsArgs): Promise<Bars>;
    aggregateBars(ctx: any, info: GraphQLResolveInfo, args: AggregateBarsArgs): Promise<AggregateBars>;
    groupByBars(ctx: any, info: GraphQLResolveInfo, args: GroupByBarsArgs): Promise<BarsGroupBy[]>;
}
