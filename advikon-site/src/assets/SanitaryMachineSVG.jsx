export default function SanitaryMachineSVG({ width = 280, height = 360, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 280 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="sanBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D47A1" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="sanAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E91E63" />
          <stop offset="100%" stopColor="#F06292" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="140" cy="340" rx="100" ry="12" fill="#0D47A1" fillOpacity="0.1" />

      {/* Body - compact unit */}
      <rect x="50" y="40" width="180" height="290" rx="10" fill="url(#sanBody)" />

      {/* Top panel */}
      <rect x="62" y="52" width="156" height="40" rx="4" fill="#E3F2FD" fillOpacity="0.9" />
      <text x="140" y="68" textAnchor="middle" fontSize="9" fill="#E91E63" fontFamily="sans-serif" fontWeight="700" letterSpacing="1">SANITARY NAPKIN</text>
      <text x="140" y="82" textAnchor="middle" fontSize="7" fill="#1565C0" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">VENDING MACHINE</text>

      {/* Product slots */}
      {[108, 160, 212].map((y, row) => (
        <g key={row}>
          <rect x="62" y={y} width="156" height="42" rx="4" fill="#0a1628" fillOpacity="0.5" />
          {[0, 1, 2, 3].map((col) => (
            <g key={col}>
              <rect x={72 + col * 36} y={y + 6} width="28" height="30" rx="4"
                fill={['#F48FB1', '#CE93D8', '#F48FB1', '#CE93D8'][col]} fillOpacity="0.7" />
              <rect x={78 + col * 36} y={y + 10} width="16" height="4" rx="2" fill="white" fillOpacity="0.3" />
              <rect x={78 + col * 36} y={y + 18} width="12" height="3" rx="1.5" fill="white" fillOpacity="0.2" />
            </g>
          ))}
          {/* Shelf line */}
          <rect x="62" y={y + 42} width="156" height="1.5" fill="url(#sanAccent)" opacity="0.3" />
        </g>
      ))}

      {/* Coin slot & buttons */}
      <rect x="62" y="264" width="72" height="24" rx="4" fill="#E3F2FD" fillOpacity="0.15" />
      <circle cx="78" cy="276" r="6" fill="#F06292" fillOpacity="0.4" stroke="#F06292" strokeWidth="1" />
      <text x="78" y="279" textAnchor="middle" fontSize="5" fill="white" fontFamily="sans-serif">&#8377;</text>
      <rect x="92" y="270" width="32" height="12" rx="3" fill="#E91E63" fillOpacity="0.5" />
      <text x="108" y="279" textAnchor="middle" fontSize="6" fill="white" fontFamily="sans-serif" fontWeight="600">VEND</text>

      {/* QR / UPI */}
      <rect x="146" y="264" width="72" height="24" rx="4" fill="#E3F2FD" fillOpacity="0.15" />
      <rect x="154" y="269" width="14" height="14" rx="2" fill="white" fillOpacity="0.3" />
      <text x="195" y="279" textAnchor="middle" fontSize="6" fill="#26C6DA" fontFamily="sans-serif" fontWeight="600">UPI / QR</text>

      {/* Dispense area */}
      <rect x="62" y="296" width="156" height="24" rx="4" fill="#0a1628" fillOpacity="0.7" />
      <rect x="90" y="302" width="100" height="12" rx="3" fill="#132038" />
      <text x="140" y="311" textAnchor="middle" fontSize="7" fill="#F06292" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">COLLECT</text>

      {/* LED strip */}
      <rect x="62" y="50" width="156" height="2" rx="1" fill="#F06292" fillOpacity="0.5" />

      {/* Status LED */}
      <circle cx="222" cy="108" r="3" fill="#00E5FF" fillOpacity="0.8" />

      {/* Feet */}
      <rect x="70" y="330" width="24" height="6" rx="3" fill="#132038" />
      <rect x="186" y="330" width="24" height="6" rx="3" fill="#132038" />
    </svg>
  );
}
