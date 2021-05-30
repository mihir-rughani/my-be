import { BarsAvgAggregate } from "../outputs/BarsAvgAggregate";
import { BarsCountAggregate } from "../outputs/BarsCountAggregate";
import { BarsMaxAggregate } from "../outputs/BarsMaxAggregate";
import { BarsMinAggregate } from "../outputs/BarsMinAggregate";
import { BarsSumAggregate } from "../outputs/BarsSumAggregate";
export declare class AggregateBars {
    _count: BarsCountAggregate | null;
    _avg: BarsAvgAggregate | null;
    _sum: BarsSumAggregate | null;
    _min: BarsMinAggregate | null;
    _max: BarsMaxAggregate | null;
}
