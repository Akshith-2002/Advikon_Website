export default function ComboMachineSVG({ width = 280, height = 360, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 280 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="comboBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D47A1" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="comboAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00ACC1" />
          <stop offset="100%" stopColor="#26C6DA" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="140" cy="340" rx="120" ry="14" fill="#0D47A1" fillOpacity="0.1" />

      {/* Body */}
      <rect x="30" y="20" width="220" height="310" rx="10" fill="url(#comboBody)" />

      {/* Glass - Snack side */}
      <rect x="42" y="34" width="100" height="200" rx="4" fill="#0a1628" fillOpacity="0.5" />
      <text x="92" y="28" textAnchor="middle" fontSize="7" fill="#26C6DA" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">SNACKS</text>

      {/* Snack spirals */}
      {[52, 100, 148].map((y, row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`s-${row}-${col}`}>
            <rect x={50 + col * 22} y={y} width="18" height="38" rx="3"
              fill={['#FF7043', '#FFB74D', '#4FC3F7', '#81C784'][col]} fillOpacity="0.75" />
            <rect x={55 + col * 22} y={y + 2} width="8" height="8" rx="4" fill="white" fillOpacity="0.2" />
          </g>
        ))
      )}

      {/* Glass - Beverage side */}
      <rect x="152" y="34" width="88" height="200" rx="4" fill="#0a1628" fillOpacity="0.5" />
      <text x="196" y="28" textAnchor="middle" fontSize="7" fill="#26C6DA" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">BEVERAGES</text>

      {/* Bottles */}
      {[48, 96, 144].map((y, row) =>
        [0, 1, 2].map((col) => (
          <g key={`b-${row}-${col}`}>
            <rect x={162 + col * 26} y={y + 10} width="16" height="34" rx="3"
              fill={['#29B6F6', '#26C6DA', '#42A5F5'][col]} fillOpacity="0.8" />
            <rect x={164 + col * 26} y={y} width="12" height="12" rx="2"
              fill={['#29B6F6', '#26C6DA', '#42A5F5'][col]} fillOpacity="0.6" />
          </g>
        ))
      )}

      {/* Shelf dividers */}
      {[90, 138, 186].map((y) => (
        <rect key={y} x="42" y={y} width="198" height="2" fill="url(#comboAccent)" opacity="0.4" />
      ))}

      {/* Touch Screen */}
      <rect x="42" y="244" width="196" height="36" rx="4" fill="#E3F2FD" fillOpacity="0.9" />
      <rect x="50" y="250" width="80" height="4" rx="2" fill="#1565C0" fillOpacity="0.4" />
      <rect x="50" y="258" width="56" height="4" rx="2" fill="#00ACC1" fillOpacity="0.3" />
      <rect x="50" y="266" width="68" height="4" rx="2" fill="#1565C0" fillOpacity="0.3" />
      {/* Touch indicator */}
      <circle cx="212" cy="262" r="10" fill="#00ACC1" fillOpacity="0.2" />
      <circle cx="212" cy="262" r="5" fill="#00ACC1" fillOpacity="0.4" />

      {/* Dispense area */}
      <rect x="42" y="290" width="196" height="30" rx="4" fill="#0a1628" fillOpacity="0.7" />
      <rect x="80" y="298" width="120" height="14" rx="3" fill="#132038" />
      <text x="140" y="308" textAnchor="middle" fontSize="8" fill="#26C6DA" fontFamily="sans-serif" fontWeight="600" letterSpacing="2">PUSH</text>

      {/* LED strip */}
      <rect x="42" y="32" width="196" height="2" rx="1" fill="#00E5FF" fillOpacity="0.5" />

      {/* Status LED */}
      <circle cx="245" cy="244" r="3" fill="#00E5FF" fillOpacity="0.8" />

      {/* Wheels */}
      <circle cx="70" cy="338" r="6" fill="#132038" stroke="#1565C0" strokeWidth="1.5" />
      <circle cx="210" cy="338" r="6" fill="#132038" stroke="#1565C0" strokeWidth="1.5" />
    </svg>
  );
}
