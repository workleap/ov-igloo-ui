import { useLocale } from "@igloo-ui/provider";
import cx from "classnames";
import { DateTime, Settings } from "luxon";
import * as React from "react";
import {
    Area,
    CartesianGrid,
    AreaChart as RechartsAreaChart,
    ReferenceArea,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    type DotProps,
    type LabelProps,
    type XAxisProps,
    type YAxisProps
} from "recharts";
import type { CurveType } from "recharts/types/shape/Curve";
import type { CartesianViewBox } from "recharts/types/util/types";

import ChartTooltip from "./ChartTooltip";
import {
    getFakeScore,
    getNullSequenceRanges,
    getUniqueKeys
} from "./helper/unavailableData";
import useDynamicYAxisWidth from "./hooks/useDynamicYAxisWidth";

import "./area-chart.scss";

export interface DataSet {
    /** Date/time in ISO format */
    dateTimeStamp: string;
    /** The score displayed on the y axis */
    score: number | null;
    /** The secondary score that is displayed inside the tooltip */
    secondaryScore?: number;
    /** The text displayed beside the score in the tooltip */
    name?: string;
    /** The text displayed beside the secondary score in the tooltip */
    secondaryName?: string;
}

interface AreaChartData {
    /** Date/time displayed as a number */
    dateTimeStamp: number;
    /** The score displayed on the y axis */
    score: number | null;
    /** The secondary score that is displayed inside the tooltip */
    secondaryScore?: number;
    /** The text displayed beside the score in the tooltip */
    name?: string;
    /** The text displayed beside the secondary score in the tooltip */
    secondaryName?: string;
}
interface EmptyLabelProps extends LabelProps {
    message?: string;
}

interface DataRange {
    /** The min value of the y axis score
   * (Possible values: number, 'auto', 'dataMin' or 'dataMax')
   */
    min: number | "auto" | "dataMin" | "dataMax";
    /** The min value of the y axis score
   * (Possible values: number, 'auto', 'dataMin' or 'dataMax')
   */
    max: number | "auto" | "dataMin" | "dataMax";
}

interface DateTimeRange {
    /** Start date/time in ISO format */
    start: string;
    /** End date/time in ISO format */
    end: string;
}

export interface AreaChartProps extends React.ComponentProps<"div"> {
    /** Add a specific class to the area chart component */
    className?: string;
    /** The data object that will be used for the area chart */
    dataSet: DataSet[];
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** The start date and end date for the x axis */
    dateRange: DateTimeRange;
    /** Whether or not the chart should resize */
    isResponsive?: boolean;
    /** Update the default locale
     * @deprecated This prop is deprecated and will be removed
     * in the next major version in favor of Igloo's provider
     */
    locale?: string;
    /** The min and max value of the y-axis
   * (Possible values: number, 'auto', 'dataMin' or 'dataMax')
   */
    range?: DataRange;
    /** The maximum elements of the x-axis */
    xAxisTickCount?: number;
    /** The formatter function for the y-axis */
    scoreFormatter?: (score: number) => string;
    /** The formatter function for the score on the tooltip */
    tooltipScoreFormatter?: (score: number) => string;
    /** The message that is displayed when data is unavailable */
    unavailableDataMessage?: string;
    /** Replaces AreaChart label with a skeleton */
    loading?: boolean;
}

const DEFAULT_SKELETON_WIDTH = 24;
const DEFAULT_SKELETON_HEIGHT = 8;

const AreaChart: React.FunctionComponent<AreaChartProps> = ({
    className,
    dataSet,
    dataTest,
    dateRange,
    loading = false,
    isResponsive = true,
    locale,
    range = { max: "auto", min: 0 },
    xAxisTickCount = 7,
    scoreFormatter,
    tooltipScoreFormatter,
    unavailableDataMessage
}: AreaChartProps) => {
    const localeMapping: Record<string, string> = {
        "en": "en-US",
        "fr": "fr-CA"
    };
    const providerLocale = useLocale();
    let actualLocale = providerLocale.locale;
    if (locale && localeMapping[locale]) {
        actualLocale = localeMapping[locale];
    } else if (locale) {
        actualLocale = locale;
    }

    Settings.defaultLocale = actualLocale;

    const SkeletonAxisTick = ({
        x,
        y,
        className: skeletonClassName,
        payload,
        skeletonWidth = DEFAULT_SKELETON_WIDTH,
        skeletonHeight = DEFAULT_SKELETON_HEIGHT,
        orientation
    }: {
        x?: number;
        y?: number;
        className?: string;
        payload?: { offset: number };
        skeletonWidth?: number;
        skeletonHeight?: number;
        orientation?: string;
    }): React.ReactElement => {
        let positionX;
        let positionY;

        if (x && y && payload) {
            const positionBottomCenter = x - skeletonWidth / 2 + payload.offset / 2;
            const positionLeft = x - skeletonWidth;

            positionX =
        orientation === "bottom" ? positionBottomCenter : positionLeft;
            positionY = y - skeletonHeight / 2 + payload.offset / 2;
        }

        return (
            <g>
                <rect
                    x={positionX}
                    y={positionY}
                    className={cx("ids-area-chart-skeleton-animation", skeletonClassName)}
                    width={skeletonWidth}
                    height={skeletonHeight}
                    rx="4"
                />
            </g>
        );
    };

    const classes = cx("ids-area-chart", className);

    const startDate = DateTime.fromISO(dateRange.start, { zone: "utc" })
        .endOf("day")
        .toUTC();
    const endDate = DateTime.fromISO(dateRange.end, { zone: "utc" })
        .endOf("day")
        .toUTC();

    const [areaChartData, setAreaChartData] = React.useState<AreaChartData[]>();

    const formatSpecialMonth = (date: DateTime): string => {
        if (date.locale !== "en-US") {
            return date.toLocaleString({
                month: "short",
                day: "numeric",
                timeZone: "utc"
            });
        }

        const utcDate = date.toUTC();
        const { month } = utcDate;
        let monthString = "";
        switch (month) {
            case 5:
                monthString = "May";
                break;
            case 6:
                monthString = "June";
                break;
            case 7:
                monthString = "July";
                break;
            case 9:
                monthString = "Sept.";
                break;
            default:
                monthString = utcDate.toFormat("MMM.");
        }

        return `${monthString} ${utcDate.day}`;
    };

    const dateFormatter = (date: number): string => {
        const newDatefromMillis = DateTime.fromMillis(date);

        return formatSpecialMonth(newDatefromMillis);
    };

    const tooltipDateFormatter = (date: number): string => {
        return DateTime.fromMillis(date).toLocaleString({
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "utc"
        });
    };

    const getNumberOfTicks = (linePoints: number, maxTicks: number): number => {
        let bestTick = 0;
        let bestScore = 0;

        for (let i = maxTicks; i > 2; i -= 1) {
            const score = ((linePoints - i) / (i - 1)) % 1;
            if (score === 0) {
                bestTick = i;
                break;
            }

            if (!bestScore || score > bestScore) {
                bestTick = i;
                bestScore = score;
            }
        }

        return bestTick;
    };

    const getTicks = (): number[] => {
        const numberOfDays = endDate.diff(startDate, ["days"]).days + 1;
        const numberOfTicks = getNumberOfTicks(numberOfDays, xAxisTickCount);
        const ticksArr = [];
        const daysBetween = Math.ceil(numberOfDays / numberOfTicks);
        let currentDate = endDate;

        ticksArr.push(endDate.valueOf());
        for (let i = numberOfTicks; i > 0; i -= 1) {
            currentDate = currentDate.minus({ days: daysBetween });
            if (currentDate.valueOf() <= startDate.valueOf()) {
                break;
            }
            ticksArr.push(currentDate.valueOf());
        }

        ticksArr.push(startDate.valueOf());

        return ticksArr;
    };

    const geYtTicks = (): number[] => {
        let ticks: number[] = [];
        if (
            range &&
      typeof range.min === "number" &&
      typeof range.max === "number"
        ) {
            ticks = Array.from(
                { length: range.max + 1 },
                (_, i) => i + (range.min as number)
            );
        } else {
            ticks = [1, 2, 3, 4, 5];
        }

        return ticks;
    };

    const { yAxisWidth, setChartRef } = useDynamicYAxisWidth({
        yAxisWidthModifier: x => x + 20,
        loading,
        areaChartData
    });

    const cartesianGridConfig = {
        stroke: "var(--ids-area-chart-grid-color)",
        strokeOpacity: 1,
        vertical: false
    };

    const tickStyle = {
        fill: "var(--ids-area-chart-color)",
        fontSize: "var(--ids-area-chart-font-size)",
        fillOpacity: 1
    };

    const xAxisConfig: XAxisProps = {
        dataKey: "dateTimeStamp",
        scale: "time",
        tickFormatter: dateFormatter,
        type: "number",
        domain: [startDate.valueOf(), endDate.valueOf()],
        interval: "preserveStartEnd",
        ticks: getTicks(),
        tick: tickStyle,
        tickLine: false,
        minTickGap: 20,
        tickMargin: 10,
        allowDataOverflow: true,
        axisLine: {
            stroke: "var(--ids-area-chart-axis-color)"
        }
    };

    const yAxisConfig: YAxisProps = {
        allowDecimals: true,
        type: "number",
        tickFormatter: scoreFormatter,
        tickLine: false,
        tickMargin: 10,
        tick: tickStyle,
        domain: [range.min, range.max],
        axisLine: {
            stroke: "var(--ids-area-chart-axis-color)"
        },
        width: yAxisWidth
    };

    if (!dataSet.length) {
        yAxisConfig.ticks = geYtTicks();
    }

    if (loading) {
        yAxisConfig.ticks = geYtTicks();
        yAxisConfig.tick = <SkeletonAxisTick />;
        xAxisConfig.tick = <SkeletonAxisTick skeletonWidth={32} />;
    }

    const dotConfig: DotProps = {
        r: 4,
        strokeWidth: 1,
        stroke: "var(--ids-area-chart-dot-stroke-color)",
        fill: "var(--ids-area-chart-line-color)"
    };

    const commonAreaConfig = {
        type: "monotone" as CurveType,
        strokeWidth: 3,
        fill: "none",
        fillOpacity: 1
    };

    const areaConfig = {
        ...commonAreaConfig,
        dataKey: "score",
        connectNulls: false,
        stroke: "var(--ids-area-chart-line-color)",
        dot: false,
        activeDot: {
            ...dotConfig
        }
    };

    const unavailableDataConfig = {
        ...commonAreaConfig,
        dataKey: "score",
        connectNulls: true,
        stroke: "var(--ids-area-chart-null-line-color)",
        strokeWidth: "3",
        strokeDasharray: "1,9",
        dot: false,
        activeDot: false
    };

    const onlyUnavailableDataConfig = {
        type: "basis",
        stroke: "none",
        fill: "none"
    };

    React.useEffect(() => {
        let updatedAreaChartData = [];

        if (dataSet.length) {
            const sequenceRanges = getNullSequenceRanges(dataSet);
            const dataWithFakeScore = getFakeScore(dataSet, sequenceRanges);

            updatedAreaChartData = dataWithFakeScore.map((fakeScoreDataSet: DataSet) => {
                const currentScore: number | null = fakeScoreDataSet.score;

                return {
                    ...fakeScoreDataSet,
                    dateTimeStamp: DateTime.fromISO(fakeScoreDataSet.dateTimeStamp)
                        .toUTC()
                        .endOf("day")
                        .valueOf(),
                    score: currentScore
                };
            });
        } else {
            const dates = getTicks();
            updatedAreaChartData = dates
                .map(date => {
                    return {
                        dateTimeStamp: date,
                        score: 0
                    };
                })
                .reverse();
        }

        setAreaChartData(updatedAreaChartData);
    // If getTicks() is added to dependency array, it creates an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataSet]);

    const uniqueKeysOfNulls = getUniqueKeys(dataSet);
    const renderAreaForNulls = dataSet.find(data => data.score === null);

    const areaForNulls = uniqueKeysOfNulls.map(key => {
        return (
            <Area
                {...unavailableDataConfig}
                strokeLinecap="round"
                dataKey={`render.${key}`}
                fill="none"
                key={key + "null"}
            />
        );
    });

    const buildArea = (): JSX.Element => {
        if (renderAreaForNulls) {
            return (
                <>
                    <Area
                        {...areaConfig}
                        style={{ transform: "translateY(1px)" }}
                        stroke="transparent"
                        connectNulls
                        dataKey="render.uiScoreBackground"
                    />
                    <Area {...areaConfig} dataKey="score" fill="none" />
                    {areaForNulls}
                </>
            );
        }

        return <Area {...areaConfig} />;
    };

    const CustomEmptyLabel = (props: EmptyLabelProps): JSX.Element | null => {
        const { message, viewBox } = props;
        const { x, y, width, height } = viewBox as CartesianViewBox;
        if (!message) {
            return null;
        }

        return (
            <foreignObject x={x} y={y} width={width} height={height}>
                <div className="ids-area-chart__empty-label">
                    <div className="ids-area-chart__empty-label-text">{message}</div>
                </div>
            </foreignObject>
        );
    };

    const areaChart = (
        <RechartsAreaChart
            data={areaChartData}
            margin={{ right: 26, top: 10, bottom: 10, left: 0 }}
            ref={setChartRef}
        >
            <CartesianGrid {...cartesianGridConfig} />
            <XAxis {...xAxisConfig} />
            <YAxis {...yAxisConfig} />
            {dataSet.length && !loading ? (
                buildArea()
            ) : (
                <>
                    <ReferenceArea
                        x1={startDate.valueOf()}
                        x2={endDate.valueOf()}
                        {...onlyUnavailableDataConfig}
                        label={<CustomEmptyLabel message={unavailableDataMessage} />}
                    />
                </>
            )}
            {dataSet.length ? (
                <Tooltip
                    filterNull={false}
                    cursor={false}
                    content={
                        <ChartTooltip
                            dateFormatter={tooltipDateFormatter}
                            scoreFormatter={tooltipScoreFormatter}
                            unavailableDataMessage={unavailableDataMessage}
                        />
                    }
                />
            ) : (
                ""
            )}
        </RechartsAreaChart>
    );

    return (
        <div className={classes} data-test={dataTest}>
            {isResponsive ? (
                <ResponsiveContainer width="100%" height={220}>
                    {areaChart}
                </ResponsiveContainer>
            ) : (
                areaChart
            )}
        </div>
    );
};

export default AreaChart;
