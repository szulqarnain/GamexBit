import React from "react";

interface CandleData {
  low: number;
}

interface TrendLineProps {
  data: CandleData[];
  mapY: (price: number) => number;
  gap?: number;
  candleWidth?: number;
  chartWidth?: number;
}

const TrendLine: React.FC<TrendLineProps> = ({
  data,
  mapY,
  gap = 20,
  candleWidth = 16,
  chartWidth,
}) => {
  if (!data || !chartWidth) return null;

  const padding = 16; // px to remove from both sides
  const effectiveWidth = chartWidth - padding * 2;

  const spacing = effectiveWidth / data.length;

  // Y positions: slightly below each candle's low
  const points = data.map(
    (d, i) => `${i * spacing + candleWidth / 2},${mapY(d.low) + gap}`
  );

  // Last candle position
  const lastCandleIndex = data.length - 1;
  const lastCandle = data[lastCandleIndex];
  const lastX = lastCandleIndex * spacing + candleWidth / 2;
  const lastY = mapY(lastCandle.low) + gap + 1; // 1px below the candle

  // Arrow dimensions
  const arrowLength = 20; // horizontal length
  const arrowHeight = 16; // vertical height of base

  return (
    <g>
      {/* Trend polyline */}
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="rgb(var(--trend-line))"
        strokeWidth={4}
      />

      {/* Horizontal arrow exactly below last candle */}
      <polygon
        points={`
          ${lastX},${lastY - arrowHeight / 2} 
          ${lastX},${lastY + arrowHeight / 2} 
          ${lastX + arrowLength},${lastY}
        `}
        fill="rgb(var(--trend-line))"
      />
    </g>
  );
};

export default TrendLine;
