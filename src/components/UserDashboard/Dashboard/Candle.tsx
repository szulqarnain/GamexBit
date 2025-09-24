import React from "react";

interface CandlePayload {
  open: number;
  close: number;
  highY: number;
  lowY: number;
  openY: number;
  closeY: number;
}

interface CandleProps {
  x: number;
  width: number;
  payload: CandlePayload;
}

const Candle: React.FC<CandleProps> = ({ x, width, payload }) => {
  const fillColor =
    payload.close > payload.open ? "#953BFF" : "rgb(var(--primary-text))";

  const candleWidth = 13; // fixed candle body width

  const bodyY = Math.min(payload.openY, payload.closeY);
  const bodyHeight = Math.max(1, Math.abs(payload.openY - payload.closeY));

  const wickX = x + width / 2;

  return (
    <g>
      {/* Wick */}
      <line
        x1={wickX}
        y1={payload.highY}
        x2={wickX}
        y2={payload.lowY}
        stroke={fillColor}
        strokeWidth={1}
      />

      {/* Body */}
      <rect
        x={x + (width - candleWidth) / 2}
        y={bodyY}
        width={candleWidth}
        height={bodyHeight}
        fill={fillColor}
        rx={100}
        ry={8}
      />
    </g>
  );
};

export default Candle;
