import {
  ComposedChart,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Customized,
  Tooltip,
} from "recharts";
import TrendLine from "./TrendLine";
import Candle from "./Candle";
import { useEffect, useRef, useState } from "react";
import CandleTooltip from "./CandleTooltip";

const generateCandles = (count = 20, startPrice = 200) => {
  const candles = [];
  let price = startPrice;

  for (let i = 0; i < count; i++) {
    const open = price;

    // big body: 15–40 units
    const bodyChange = Math.floor(Math.random() * 26 + 15); // 15–40
    const direction = Math.random() > 0.5 ? 1 : -1; // bullish or bearish
    const close = open + direction * bodyChange;

    const bodyHigh = Math.max(open, close);
    const bodyLow = Math.min(open, close);

    // slightly longer wicks: 3–8 units above/below
    const high = bodyHigh + Math.floor(Math.random() * 6 + 3); // +3 to +8
    const low = bodyLow - Math.floor(Math.random() * 6 + 3); // -3 to -8

    candles.push({
      time: `T${i}`,
      open,
      high,
      low,
      close,
    });

    price = close; // next candle starts from previous close
  }

  return candles;
};

const Graph = () => {
  const [candlesCount, setCandlesCount] = useState(13);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) {
        // md breakpoint (Tailwind default: 768px)
        setCandlesCount(8);
      } else {
        setCandlesCount(13);
      }
    };

    updateCount(); // set initial value
    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const dummyCandles = generateCandles(candlesCount);

  const chartHeight = 257;
  const candleWidth = 16;

  const bottomGap = 30; // adjust as needed
  const yMin = Math.min(...dummyCandles.map((d) => d.low)) - bottomGap;
  const yMax = Math.max(...dummyCandles.map((d) => d.high)) + 5; // small top buffer

  const mapY = (price: number) =>
    ((yMax - price) / (yMax - yMin)) * chartHeight;

  const dataWithY = dummyCandles.map((d) => ({
    ...d,
    openY: mapY(d.open),
    closeY: mapY(d.close),
    highY: mapY(d.high),
    lowY: mapY(d.low),
  }));

  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: 257 }}>
      <ResponsiveContainer
        className="pointer-events-auto"
        width="100%"
        height="100%"
      >
        <ComposedChart data={dataWithY} margin={{ top: 20, bottom: 20 }}>
          <CartesianGrid
            horizontal
            vertical={false}
            stroke="rgb(var(--border))"
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            orientation="right"
            width={35}
            tick={{ fill: "rgb(var(--secondary-text))" }}
            tickCount={6}
          />

          {/* Trend line below candles */}
          <Customized
            component={(props: any) => (
              <TrendLine
                {...props}
                data={dataWithY}
                mapY={mapY}
                candleWidth={candleWidth}
                chartWidth={width}
              />
            )}
          />

          <Tooltip
            cursor={false}
            position={undefined}
            content={({ active, payload, coordinate }) => {
              if (active && payload && payload.length) {
                const candle = payload[0].payload;

                const x = coordinate?.x ?? 0;
                const isBullish = candle.close >= candle.open;
                const y = isBullish ? mapY(candle.high) : mapY(candle.low);

                return <CandleTooltip x={x} y={y} isBullish={isBullish} />;
              }
              return null;
            }}
          />

          {/* Candles on top */}
          <Bar
            dataKey="close"
            shape={(props: any) => <Candle {...props} />}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
