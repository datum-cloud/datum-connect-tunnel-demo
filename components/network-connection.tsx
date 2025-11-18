'use client';

interface NetworkConnectionProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function NetworkConnection({
  x1,
  y1,
  x2,
  y2,
}: NetworkConnectionProps) {
  return (
    <g>
      {/* Background line */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#10b981"
        strokeWidth="2"
        opacity="0.2"
      />

      {/* Animated line */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#10b981"
        strokeWidth="3"
        strokeDasharray="10,5"
        opacity="0.6"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-15"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
    </g>
  );
}
