export default function SnackMachineSVG({ width = 260, height = 360, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 260 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="snackBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#0D47A1" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="130" cy="340" rx="110" ry="12" fill="#0D47A1" fillOpacity="0.1" />

      {/* Body */}
      <rect x="25" y="20" width="210" height="310" rx="10" fill="url(#snackBody)" />

      {/* Glass window */}
      <rect x="38" y="34" width="184" height="230" rx="4" fill="#0a1628" fillOpacity="0.5" />

      {/* Snack rows - spiral coils with products */}
      {[46, 96, 146, 196].map((y, row) => (
        <g key={row}>
          {/* Row label */}
          <text x="46" y={y + 10} fontSize="8" fill="#26C6DA" fontFamily="monospace" fillOpacity="0.6">
            {String.fromCharCode(65 + row)}
          </text>
          {/* Products */}
          {[0, 1, 2, 3, 4].map((col) => {
            const colors = [
              ['#EF5350', '#FF8A65', '#FFB74D', '#66BB6A', '#42A5F5'],
              ['#AB47BC', '#26C6DA', '#FFA726', '#EC407A', '#66BB6A'],
              ['#42A5F5', '#FF7043', '#FFEE58', '#26C6DA', '#EF5350'],
              ['#66BB6A', '#AB47BC', '#42A5F5', '#FF8A65', '#FFA726'],
            ];
            return (
              <g key={col}>
                {/* Spiral coil */}
                <line x1={60 + col * 34} y1={y + 38} x2={60 + col * 34 + 24} y2={y + 38}
                  stroke="#9E9E9E" strokeWidth="1" strokeOpacity="0.3" />
                {/* Snack packet */}
                <rect x={58 + col * 34} y={y + 2} width="26" height="34" rx="4"
                  fill={colors[row][col]} fillOpacity="0.75" />
                {/* Packet shine */}
                <rect x={62 + col * 34} y={y + 5} width="8" height="10" rx="2"
                  fill="white" fillOpacity="0.15" />
                {/* Packet label */}
                <rect x={61 + col * 34} y={y + 20} width="20" height="6" rx="1"
                  fill="white" fillOpacity="0.2" />
              </g>
            );
          })}
          {/* Shelf */}
          <rect x="38" y={y + 42} width="184" height="2" fill="#26C6DA" opacity="0.3" />
        </g>
      ))}

      {/* Keypad panel */}
      <rect x="38" y="272" width="84" height="50" rx="4" fill="#E3F2FD" fillOpacity="0.9" />
      {/* Number keys */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect key={`k-${r}-${c}`} x={48 + c * 24} y={280 + r * 14} width="18" height="10" rx="2"
            fill="#1565C0" fillOpacity="0.15" />
        ))
      )}

      {/* Display */}
      <rect x="132" y="272" width="90" height="22" rx="3" fill="#0a1628" fillOpacity="0.8" />
      <text x="177" y="286" textAnchor="middle" fontSize="9" fill="#00E5FF" fontFamily="monospace">A-03</text>

      {/* Dispense area */}
      <rect x="132" y="300" width="90" height="22" rx="3" fill="#0a1628" fillOpacity="0.7" />
      <text x="177" y="315" textAnchor="middle" fontSize="7" fill="#26C6DA" fontFamily="sans-serif" fontWeight="600" letterSpacing="2">PUSH</text>

      {/* LED strip */}
      <rect x="38" y="32" width="184" height="2" rx="1" fill="#00E5FF" fillOpacity="0.5" />

      {/* Capacity badge */}
      <g transform="translate(130, 350)">
        <rect x="-30" y="-8" width="60" height="16" rx="8" fill="#0D47A1" fillOpacity="0.15" />
        <text x="0" y="4" textAnchor="middle" fontSize="7" fill="#1565C0" fontFamily="sans-serif" fontWeight="600">100 Slots</text>
      </g>

      {/* Wheels */}
      <circle cx="65" cy="338" r="6" fill="#132038" stroke="#1565C0" strokeWidth="1.5" />
      <circle cx="195" cy="338" r="6" fill="#132038" stroke="#1565C0" strokeWidth="1.5" />
    </svg>
  );
}
