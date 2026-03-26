export default function CustomMachineSVG({ width = 280, height = 360, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 280 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="customBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D47A1" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="customAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00ACC1" />
          <stop offset="100%" stopColor="#26C6DA" />
        </linearGradient>
        <linearGradient id="customGear" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#42A5F5" />
          <stop offset="100%" stopColor="#00ACC1" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="140" cy="340" rx="115" ry="13" fill="#0D47A1" fillOpacity="0.1" />

      {/* Body */}
      <rect x="35" y="25" width="210" height="305" rx="10" fill="url(#customBody)" />

      {/* Dashed outline — "blueprint" feel */}
      <rect x="45" y="35" width="190" height="285" rx="6" fill="none"
        stroke="#26C6DA" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />

      {/* Central gear icon */}
      <g transform="translate(140, 120)">
        <circle r="40" fill="#0a1628" fillOpacity="0.4" />
        <circle r="30" fill="none" stroke="url(#customGear)" strokeWidth="2" />
        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect key={angle} x="-4" y="-34" width="8" height="10" rx="2"
            fill="url(#customGear)" fillOpacity="0.7"
            transform={`rotate(${angle})`} />
        ))}
        <circle r="18" fill="#0a1628" fillOpacity="0.6" />
        <circle r="12" fill="none" stroke="#26C6DA" strokeWidth="1.5" opacity="0.5" />
        {/* Center bolt */}
        <circle r="4" fill="#26C6DA" fillOpacity="0.6" />
      </g>

      {/* "YOUR DESIGN" text block */}
      <rect x="55" y="175" width="170" height="36" rx="4" fill="#E3F2FD" fillOpacity="0.12" />
      <text x="140" y="192" textAnchor="middle" fontSize="10" fill="#26C6DA" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">YOUR DESIGN</text>
      <text x="140" y="205" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif" letterSpacing="1">BUILT TO SPEC</text>

      {/* Modular blocks — representing customizable slots */}
      <g>
        {/* Row 1 */}
        <rect x="55" y="222" width="50" height="30" rx="4" fill="#42A5F5" fillOpacity="0.2" stroke="#42A5F5" strokeWidth="0.7" />
        <text x="80" y="241" textAnchor="middle" fontSize="7" fill="#42A5F5" fontFamily="sans-serif" fontWeight="500">Module A</text>

        <rect x="115" y="222" width="50" height="30" rx="4" fill="#00ACC1" fillOpacity="0.2" stroke="#00ACC1" strokeWidth="0.7" />
        <text x="140" y="241" textAnchor="middle" fontSize="7" fill="#00ACC1" fontFamily="sans-serif" fontWeight="500">Module B</text>

        <rect x="175" y="222" width="50" height="30" rx="4" fill="#26C6DA" fillOpacity="0.2" stroke="#26C6DA" strokeWidth="0.7" />
        <text x="200" y="241" textAnchor="middle" fontSize="7" fill="#26C6DA" fontFamily="sans-serif" fontWeight="500">Module C</text>
      </g>

      {/* Row 2 */}
      <g>
        <rect x="55" y="260" width="80" height="26" rx="4" fill="#42A5F5" fillOpacity="0.15" stroke="#42A5F5" strokeWidth="0.7" />
        <text x="95" y="277" textAnchor="middle" fontSize="7" fill="#42A5F5" fontFamily="sans-serif" fontWeight="500">Payment</text>

        <rect x="145" y="260" width="80" height="26" rx="4" fill="#00ACC1" fillOpacity="0.15" stroke="#00ACC1" strokeWidth="0.7" />
        <text x="185" y="277" textAnchor="middle" fontSize="7" fill="#00ACC1" fontFamily="sans-serif" fontWeight="500">Display</text>
      </g>

      {/* Bottom bar */}
      <rect x="55" y="296" width="170" height="20" rx="4" fill="#0a1628" fillOpacity="0.5" />
      <text x="140" y="310" textAnchor="middle" fontSize="7" fill="#26C6DA" fontFamily="sans-serif" fontWeight="600" letterSpacing="2">CONFIGURABLE</text>

      {/* Corner markers — blueprint style */}
      {[{ x: 45, y: 35 }, { x: 225, y: 35 }, { x: 45, y: 310 }, { x: 225, y: 310 }].map((p, i) => (
        <g key={i}>
          <line x1={p.x - 6} y1={p.y} x2={p.x + 6} y2={p.y} stroke="#26C6DA" strokeWidth="1" opacity="0.5" />
          <line x1={p.x} y1={p.y - 6} x2={p.x} y2={p.y + 6} stroke="#26C6DA" strokeWidth="1" opacity="0.5" />
        </g>
      ))}

      {/* Wheels */}
      <circle cx="75" cy="338" r="6" fill="#132038" stroke="#1565C0" strokeWidth="1.5" />
      <circle cx="205" cy="338" r="6" fill="#132038" stroke="#1565C0" strokeWidth="1.5" />
    </svg>
  );
}
