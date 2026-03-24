export default function BeverageMachineSVG({ width = 240, height = 360, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 240 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="bevBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00838F" />
          <stop offset="100%" stopColor="#00ACC1" />
        </linearGradient>
        <linearGradient id="coolGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#E0F7FA" />
          <stop offset="100%" stopColor="#B2EBF2" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="120" cy="340" rx="100" ry="12" fill="#00ACC1" fillOpacity="0.1" />

      {/* Body */}
      <rect x="20" y="20" width="200" height="310" rx="10" fill="url(#bevBody)" />

      {/* Glass window */}
      <rect x="34" y="34" width="172" height="220" rx="4" fill="#0a1628" fillOpacity="0.5" />

      {/* Bottles - 5 columns x 4 rows */}
      {[46, 100, 154, 208].map((y, row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <g key={`${row}-${col}`}>
            {/* Bottle body */}
            <rect x={42 + col * 32} y={y + 8} width="22" height="36" rx="4"
              fill={['#1E88E5', '#00ACC1', '#26C6DA', '#42A5F5', '#0D47A1'][(row + col) % 5]}
              fillOpacity="0.8"
            />
            {/* Bottle cap */}
            <rect x={45 + col * 32} y={y} width="16" height="10" rx="2"
              fill={['#1E88E5', '#00ACC1', '#26C6DA', '#42A5F5', '#0D47A1'][(row + col) % 5]}
              fillOpacity="0.6"
            />
            {/* Label */}
            <rect x={45 + col * 32} y={y + 18} width="16" height="8" rx="1" fill="white" fillOpacity="0.2" />
          </g>
        ))
      )}

      {/* Shelf lines */}
      {[98, 152, 206].map((y) => (
        <rect key={y} x="34" y={y} width="172" height="2" fill="#26C6DA" opacity="0.3" />
      ))}

      {/* Cooling indicator */}
      <g transform="translate(120, 270)">
        <rect x="-70" y="-4" width="140" height="24" rx="4" fill="#E0F7FA" fillOpacity="0.15" />
        {/* Snowflake icons */}
        {[-40, 0, 40].map((x) => (
          <g key={x} transform={`translate(${x}, 8)`}>
            <line x1="0" y1="-6" x2="0" y2="6" stroke="#00E5FF" strokeWidth="1.5" />
            <line x1="-5" y1="-3" x2="5" y2="3" stroke="#00E5FF" strokeWidth="1.5" />
            <line x1="-5" y1="3" x2="5" y2="-3" stroke="#00E5FF" strokeWidth="1.5" />
          </g>
        ))}
        <text x="0" y="12" textAnchor="middle" fontSize="6" fill="#00E5FF" fontFamily="sans-serif" opacity="0.7">COOLED</text>
      </g>

      {/* Dispense area */}
      <rect x="34" y="292" width="172" height="28" rx="4" fill="#0a1628" fillOpacity="0.7" />
      <rect x="60" y="298" width="120" height="16" rx="3" fill="#132038" />
      <text x="120" y="310" textAnchor="middle" fontSize="8" fill="#26C6DA" fontFamily="sans-serif" fontWeight="600" letterSpacing="2">PUSH</text>

      {/* LED strip */}
      <rect x="34" y="32" width="172" height="2" rx="1" fill="#00E5FF" fillOpacity="0.6" />

      {/* Wheels */}
      <circle cx="60" cy="338" r="6" fill="#004D40" stroke="#00ACC1" strokeWidth="1.5" />
      <circle cx="180" cy="338" r="6" fill="#004D40" stroke="#00ACC1" strokeWidth="1.5" />
    </svg>
  );
}
