import {
  ComposedChart,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Customized,
} from "recharts";
import TrendLine from "./TrendLine";
import Candle from "./Candle";
import { useEffect, useRef, useState } from "react";

const generateCandles = (count = 20, startPrice = 200) => {
  const candles = [];
  let price = startPrice;
  for (let i = 0; i < count; i++) {
    const open = price;
    const close = open + Math.floor(Math.random() * 10 - 5); // +/- 5
    const high = Math.max(open, close) + Math.floor(Math.random() * 5);
    const low = Math.min(open, close) - Math.floor(Math.random() * 5);
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

  const chartHeight = 300;
  const candleWidth = 16;

  const yMin = Math.min(...dummyCandles.map((d) => d.low)) - 5;
  const yMax = Math.max(...dummyCandles.map((d) => d.high)) + 5;

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
    <div ref={containerRef} style={{ width: "100%", height: 300 }}>
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
