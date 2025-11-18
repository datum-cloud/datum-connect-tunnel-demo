'use client';

import { useState, useEffect } from 'react';
import { DeviceNode } from './device-node';
import { NetworkConnection } from './network-connection';

export function InfrastructureDiagram() {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress((prev) => (prev + 1) % 100);
    }, 50); // Increased update frequency from 100ms to 50ms to speed up data packet movement
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-800/50 rounded-lg border border-slate-700/50 p-8 backdrop-blur-sm">
      <svg
        viewBox="0 0 1200 500"
        className="w-full h-auto"
        style={{ minHeight: '400px' }}
      >
        {/* Background grid effect */}
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(71, 85, 105, 0.1)"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Animated gradient for network */}
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <rect width="1200" height="500" fill="url(#grid)" />

        {/* Left side: Data Center with Virtual Machine with Container */}
        <g>
          {/* Data Center Box */}
          <rect
            x="20"
            y="30"
            width="340"
            height="420"
            rx="8"
            fill="none"
            stroke="#0891b2"
            strokeWidth="2"
            opacity="0.3"
          />
          <text
            x="60"
            y="20"
            className="font-semibold"
            fill="#06b6d4"
            fontSize="15"
          >
            Data center
          </text>

          {/* VM Box */}
          <rect
            x="50"
            y="100"
            width="280"
            height="300"
            rx="8"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            opacity="0.5"
          />
          <text
            x="190"
            y="85"
            textAnchor="middle"
            className="font-semibold"
            fill="#06b6d4"
            fontSize="16"
          >
            Virtual Machine (Linux)
          </text>

          {/* Container inside VM */}
          <DeviceNode
            x={190}
            y={220}
            label="Container"
            icon="📦"
            isActive={animationProgress % 3 < 1}
          />
        </g>

        {/* Center: Internet Connection */}
        <g>
          {/* Animated network line */}
          <defs>
            <pattern
              id="animatedDash"
              x="0"
              y="0"
              width="20"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="2"
                x2="10"
                y2="2"
                stroke="#10b981"
                strokeWidth="2"
              />
            </pattern>
          </defs>

          {/* Main connection line */}
          <line
            x1="330"
            y1="250"
            x2="870"
            y2="250"
            stroke="url(#networkGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Animated data packets */}
          <circle
            cx={330 + (540 * (animationProgress % 100)) / 100}
            cy={250}
            r="6"
            fill="#10b981"
            opacity="0.8"
          >
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="4s" // increased duration from 2s to 4s for slower pulsing
              repeatCount="indefinite"
            />
          </circle>

          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
            </marker>
          </defs>

          <path
            d="M 370 230 L 830 230"
            stroke="none"
            fill="none"
          />
          <path
            d="M 250 225 L 950 225"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />

          {/* Internet label */}
          <text
            x="575"
            y="215"
            textAnchor="middle"
            className="font-semibold"
            fill="#10b981"
            fontSize="14"
          >
            Internet
          </text>

          {/* Connection stats */}
          <text
            x="575"
            y="275"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="12"
            fontWeight="bold"
          >
            Iroh over QUIC
          </text>
        </g>

        {/* Right side: Meetup wifi with Laptop with Container */}
        <g>
          <rect
            x="840"
            y="30"
            width="340"
            height="420"
            rx="8"
            fill="none"
            stroke="#a855f7"
            strokeWidth="2"
            opacity="0.3"
          />
          <text
            x="860"
            y="20"
            className="font-semibold"
            fill="#ec4899"
            fontSize="15"
          >
            Meetup wifi
          </text>

          {/* Laptop Box */}
          <rect
            x="870"
            y="100"
            width="280"
            height="300"
            rx="8"
            fill="none"
            stroke="#ec4899"
            strokeWidth="2"
            opacity="0.5"
          />
          <text
            x="1010"
            y="85"
            textAnchor="middle"
            className="font-semibold"
            fill="#ec4899"
            fontSize="16"
          >
            Laptop (macOS/Windows)
          </text>

          {/* Container inside Laptop */}
          <DeviceNode
            x={1010}
            y={220}
            label="Container"
            icon="💻"
            isActive={animationProgress % 3 > 1}
          />
        </g>

        {/* Data flow indicators */}
        <g>
          {/* Arrows showing bidirectional communication */}
          {/*
          <path
            d="M 370 230 L 400 230"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 830 270 L 800 270"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead-blue)"
          />
          */}

          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
            </marker>
            <marker
              id="arrowhead-blue"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
            </marker>
          </defs>
        </g>
      </svg>

      {/* Legend */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <div className="w-4 h-4 rounded bg-cyan-500/30 border border-cyan-500"></div>
          <span>Virtual Machine</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <div className="w-4 h-4 rounded bg-emerald-500/30 border border-emerald-500"></div>
          <span>Network Connection</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <div className="w-4 h-4 rounded bg-pink-500/30 border border-pink-500"></div>
          <span>Laptop</span>
        </div>
      </div>
    </div>
  );
}
