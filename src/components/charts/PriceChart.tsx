import { useEffect, useRef } from "react";
import {
  AreaSeries,
  CandlestickSeries,
  ColorType,
  CrosshairMode,
  LineSeries,
  createChart,
} from "lightweight-charts";
import type { IChartApi, ISeriesApi, UTCTimestamp } from "lightweight-charts";
import type { Bar } from "src/domain/providers/types.ts";

export type ChartKind = "candles" | "line" | "area";

export type Ohlc = { open: number; high: number; low: number; close: number };

type Props = {
  bars: Bar[];
  digits: number;
  kind: ChartKind;
  onOhlc: (value: Ohlc) => void;
};

export default function PriceChart({ bars, digits, kind, onOhlc }: Props) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = host.current;
    if (!node) return;

    const chart: IChartApi = createChart(node, {
      autoSize: true,
      layout: {
        background: { type: ColorType.Solid, color: "#0c1424" },
        textColor: "#8b98ad",
        fontFamily: "Outfit, sans-serif",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.04)" },
        horzLines: { color: "rgba(255,255,255,0.04)" },
      },
      crosshair: { mode: CrosshairMode.Normal },
      rightPriceScale: { borderColor: "rgba(255,255,255,0.08)" },
      timeScale: { borderColor: "rgba(255,255,255,0.08)", timeVisible: true, secondsVisible: false },
      handleScroll: true,
      handleScale: true,
    });

    const priceFormat = { type: "price" as const, precision: digits, minMove: 1 / 10 ** digits };
    let series: ISeriesApi<"Candlestick"> | ISeriesApi<"Line"> | ISeriesApi<"Area">;

    if (kind === "line") {
      series = chart.addSeries(LineSeries, { color: "#3ee0b0", lineWidth: 2, priceFormat });
      series.setData(bars.map((bar) => ({ time: (bar.time / 1000) as UTCTimestamp, value: bar.close })));
    } else if (kind === "area") {
      series = chart.addSeries(AreaSeries, {
        lineColor: "#3ee0b0",
        topColor: "rgba(62,224,176,0.28)",
        bottomColor: "rgba(62,224,176,0.02)",
        priceFormat,
      });
      series.setData(bars.map((bar) => ({ time: (bar.time / 1000) as UTCTimestamp, value: bar.close })));
    } else {
      series = chart.addSeries(CandlestickSeries, {
        upColor: "#2ebd85",
        downColor: "#f6465d",
        borderVisible: false,
        wickUpColor: "#2ebd85",
        wickDownColor: "#f6465d",
        priceFormat,
      });
      series.setData(
        bars.map((bar) => ({
          time: (bar.time / 1000) as UTCTimestamp,
          open: bar.open,
          high: bar.high,
          low: bar.low,
          close: bar.close,
        })),
      );
    }

    chart.timeScale().fitContent();
    const last = bars[bars.length - 1];
    if (last) onOhlc(last);

    chart.subscribeCrosshairMove((param) => {
      const point = param.seriesData.get(series);
      if (!point) return;
      if ("close" in point) {
        onOhlc({ open: point.open, high: point.high, low: point.low, close: point.close });
      } else if ("value" in point) {
        onOhlc({ open: point.value, high: point.value, low: point.value, close: point.value });
      }
    });

    return () => chart.remove();
  }, [bars, digits, kind, onOhlc]);

  return <div ref={host} className="absolute inset-0" />;
}
