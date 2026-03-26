export default function SmartFridgeSVG({ width = 280, height = 360, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 280 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="fridgeBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D47A1" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="fridgeAI" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00ACC1" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="140" cy="342" rx="110" ry="13" fill="#0D47A1" fillOpacity="0.1" />

      {/* Body */}
      <rect x="40" y="20" width="200" height="315" rx="12" fill="url(#fridgeBody)" />

      {/* Glass door */}
      <rect x="52" y="32" width="176" height="230" rx="6" fill="#0a1628" fillOpacity="0.45" />

      {/* AI brain icon top-center */}
      <circle cx="140" cy="18" r="14" fill="#0D47A1" stroke="#00E5FF" strokeWidth="1.5" />
      <text x="140" y="22" textAnchor="middle" fontSize="12" fill="#00E5FF" fontFamily="sans-serif" fontWeight="700">AI</text>

      {/* Shelves with products */}
      {[48, 108, 168].map((y, row) => (
        <g key={row}>
          {/* Products */}
          {[0, 1, 2, 3, 4].map((col) => (
            <g key={col}>
              <rect x={60 + col * 32} y={y + 4} width="24" height={row === 2 ? 36 : 44} rx="3"
                fill={[
                  ['#29B6F6', '#EF5350', '#66BB6A', '#FF7043', '#42A5F5'],
                  ['#FFA726', '#26C6DA', '#AB47BC', '#29B6F6', '#EF5350'],
                  ['#66BB6A', '#42A5F5', '#FF7043', '#FFA726', '#26C6DA'],
                ][row][col]} fillOpacity="0.75" />
              <rect x={64 + col * 32} y={y + 8} width="16" height="6" rx="3" fill="white" fillOpacity="0.2" />
            </g>
          ))}
          {/* Shelf */}
          <rect x="52" y={y + (row === 2 ? 44 : 52)} width="176" height="2" fill="url(#fridgeAI)" opacity="0.3" />
        </g>
      ))}

      {/* Sensor indicators */}
      {[{ x: 60, y: 40 }, { x: 210, y: 40 }, { x: 60, y: 160 }, { x: 210, y: 160 }].map((pos, i) => (
        <g key={i}>
          <circle cx={pos.x} cy={pos.y} r="5" fill="#00E5FF" fillOpacity="0.15" />
          <circle cx={pos.x} cy={pos.y} r="2" fill="#00E5FF" fillOpacity="0.6" />
        </g>
      ))}

      {/* AI scan lines */}
      {[80, 140, 200].map((y) => (
        <line key={y} x1="52" y1={y} x2="228" y2={y} stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.3" />
      ))}

      {/* Smart display panel */}
      <rect x="52" y="272" width="176" height="52" rx="6" fill="#E3F2FD" fillOpacity="0.9" />

      {/* Dashboard mini-elements */}
      <rect x="62" y="280" width="50" height="4" rx="2" fill="#1565C0" fillOpacity="0.5" />
      <rect x="62" y="288" width="36" height="4" rx="2" fill="#00ACC1" fillOpacity="0.4" />
      <rect x="62" y="296" width="44" height="4" rx="2" fill="#1565C0" fillOpacity="0.3" />
      <rect x="62" y="304" width="28" height="4" rx="2" fill="#00ACC1" fillOpacity="0.3" />

      {/* Mini bar chart */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={140 + i * 14} y={310 - [18, 26, 14, 22, 30][i]} width="8"
          height={[18, 26, 14, 22, 30][i]} rx="2"
          fill="url(#fridgeAI)" fillOpacity={0.4 + i * 0.1} />
      ))}

      {/* Temp indicator */}
      <text x="130" y="290" textAnchor="end" fontSize="14" fill="#1565C0" fontFamily="sans-serif" fontWeight="700">4°C</text>

      {/* WiFi icon */}
      <g transform="translate(208, 278)">
        <path d="M4 10 Q8 4 12 10" stroke="#00ACC1" strokeWidth="1.5" fill="none" />
        <path d="M2 7 Q8 -1 14 7" stroke="#00ACC1" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="8" cy="12" r="1.5" fill="#00ACC1" />
      </g>

      {/* LED strips on sides */}
      <rect x="50" y="32" width="2" height="230" rx="1" fill="#00E5FF" fillOpacity="0.15" />
      <rect x="228" y="32" width="2" height="230" rx="1" fill="#00E5FF" fillOpacity="0.15" />

      {/* Feet */}
      <rect x="60" y="335" width="30" height="6" rx="3" fill="#132038" />
      <rect x="190" y="335" width="30" height="6" rx="3" fill="#132038" />
    </svg>
  );
}
