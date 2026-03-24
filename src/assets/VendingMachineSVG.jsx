export default function VendingMachineSVG({ width = 320, height = 400, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D47A1" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E3F2FD" />
          <stop offset="100%" stopColor="#BBDEFB" />
        </linearGradient>
        <linearGradient id="shelfGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00ACC1" />
          <stop offset="100%" stopColor="#26C6DA" />
        </linearGradient>
        <linearGradient id="glowGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00ACC1" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Glow behind machine */}
      <ellipse cx="160" cy="360" rx="140" ry="20" fill="url(#glowGrad)" />

      {/* Machine body */}
      <rect x="40" y="30" width="240" height="340" rx="12" fill="url(#bodyGrad)" />
      <rect x="40" y="30" width="240" height="340" rx="12" fill="white" fillOpacity="0.03" />

      {/* Glass window */}
      <rect x="56" y="46" width="148" height="260" rx="6" fill="#0a1628" fillOpacity="0.6" />
      <rect x="56" y="46" width="148" height="260" rx="6" stroke="#26C6DA" strokeWidth="1" strokeOpacity="0.3" />

      {/* Shelves */}
      {[72, 132, 192, 252].map((y, i) => (
        <g key={i}>
          <rect x="62" y={y} width="136" height="2" fill="url(#shelfGrad)" opacity="0.6" />
          {/* Products on shelves */}
          {[74, 100, 126, 152].map((px, j) => (
            <rect key={j} x={px} y={y - 48 + 4} width="20" height="44" rx="4"
              fill={['#42A5F5', '#26C6DA', '#00ACC1', '#1565C0'][j]}
              fillOpacity={0.7 + (i * 0.05)}
            />
          ))}
        </g>
      ))}

      {/* Touch screen panel */}
      <rect x="216" y="56" width="52" height="80" rx="4" fill="url(#screenGrad)" />
      <rect x="220" y="60" width="44" height="52" rx="2" fill="#0D47A1" fillOpacity="0.1" />
      {/* Screen content lines */}
      <rect x="226" y="66" width="32" height="3" rx="1" fill="#1565C0" fillOpacity="0.4" />
      <rect x="226" y="74" width="24" height="3" rx="1" fill="#00ACC1" fillOpacity="0.4" />
      <rect x="226" y="82" width="28" height="3" rx="1" fill="#1565C0" fillOpacity="0.3" />
      <rect x="226" y="90" width="20" height="3" rx="1" fill="#00ACC1" fillOpacity="0.3" />
      {/* Keypad dots */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle key={`${r}-${c}`} cx={228 + c * 14} cy={120 + r * 10} r="3" fill="#26C6DA" fillOpacity="0.5" />
        ))
      )}

      {/* Dispense slot */}
      <rect x="56" y="316" width="148" height="40" rx="6" fill="#0a1628" fillOpacity="0.8" />
      <rect x="70" y="326" width="120" height="20" rx="4" fill="#132038" />
      <text x="130" y="340" textAnchor="middle" fontSize="9" fill="#26C6DA" fontFamily="sans-serif" fontWeight="600" letterSpacing="2">PUSH</text>

      {/* Payment area */}
      <rect x="216" y="156" width="52" height="24" rx="4" fill="#00ACC1" fillOpacity="0.2" stroke="#26C6DA" strokeWidth="1" />
      <text x="242" y="172" textAnchor="middle" fontSize="7" fill="#26C6DA" fontFamily="sans-serif">TAP</text>

      {/* WiFi / IoT indicator */}
      <g transform="translate(242, 200)" opacity="0.6">
        <path d="M-8,6 A12,12 0 0 1 8,6" stroke="#26C6DA" strokeWidth="1.5" fill="none" />
        <path d="M-5,3 A8,8 0 0 1 5,3" stroke="#26C6DA" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="8" r="2" fill="#26C6DA" />
      </g>

      {/* LED strip at top */}
      <rect x="56" y="38" width="148" height="3" rx="1" fill="#00E5FF" fillOpacity="0.6" />

      {/* Advikon badge */}
      <rect x="216" y="240" width="52" height="52" rx="6" fill="white" fillOpacity="0.08" />
      <text x="242" y="264" textAnchor="middle" fontSize="11" fill="#26C6DA" fontFamily="sans-serif" fontWeight="700">A</text>
      <text x="242" y="280" textAnchor="middle" fontSize="5.5" fill="white" fontFamily="sans-serif" letterSpacing="1.5" fillOpacity="0.5">ADVIKON</text>

      {/* Wheels */}
      <circle cx="80" cy="378" r="8" fill="#132038" stroke="#1565C0" strokeWidth="2" />
      <circle cx="240" cy="378" r="8" fill="#132038" stroke="#1565C0" strokeWidth="2" />
    </svg>
  );
}
