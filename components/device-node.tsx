'use client';

interface DeviceNodeProps {
  x: number;
  y: number;
  label: string;
  icon: string;
  isActive: boolean;
}

export function DeviceNode({
  x,
  y,
  label,
  icon,
  isActive,
}: DeviceNodeProps) {
  return (
    <g>
      {/* Outer pulse ring */}
      {isActive && (
        <circle
          cx={x}
          cy={y}
          r="70"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          opacity={0.3}
        >
          <animate
            attributeName="r"
            values="70;90"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      )}

      {/* Main container circle */}
      <circle
        cx={x}
        cy={y}
        r="50"
        fill="rgba(16, 185, 129, 0.1)"
        stroke="#10b981"
        strokeWidth="2"
      />

      {/* Inner gradient fill */}
      <circle
        cx={x}
        cy={y}
        r="45"
        fill="url(#containerGradient)"
        opacity="0.2"
      />

      {/* Icon */}
      <text
        x={x}
        y={y + 8}
        textAnchor="middle"
        fontSize="32"
      >
        {icon}
      </text>

      {/* Label */}
      <text
        x={x}
        y={y + 75}
        textAnchor="middle"
        fill="#10b981"
        fontSize="14"
        className="font-semibold"
      >
        {label}
      </text>

      {/* Status indicator */}
      {isActive && (
        <circle
          cx={x + 35}
          cy={y - 35}
          r="6"
          fill="#10b981"
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      )}

      <defs>
        <radialGradient id="containerGradient">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </radialGradient>
      </defs>
    </g>
  );
}
