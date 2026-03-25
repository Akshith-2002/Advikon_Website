export default function MadeInIndiaSVG({ width = 300, height = 200, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="indiaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D47A1" />
          <stop offset="100%" stopColor="#00ACC1" />
        </linearGradient>
      </defs>

      {/* Shield shape */}
      <path d="M150 10 L260 50 L260 120 Q260 170 150 190 Q40 170 40 120 L40 50 Z"
        fill="url(#indiaGrad)" fillOpacity="0.1" stroke="url(#indiaGrad)" strokeWidth="2" />

      {/* Inner shield */}
      <path d="M150 26 L246 60 L246 118 Q246 160 150 178 Q54 160 54 118 L54 60 Z"
        fill="url(#indiaGrad)" fillOpacity="0.05" />

      {/* Checkmark */}
      <g transform="translate(150, 80)">
        <circle r="32" fill="#0D47A1" fillOpacity="0.12" />
        <circle r="24" fill="#0D47A1" fillOpacity="0.15" />
        <polyline points="-12,2 -4,10 14,-8" stroke="#00ACC1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Text */}
      <text x="150" y="134" textAnchor="middle" fontSize="11" fill="#0D47A1" fontFamily="sans-serif" fontWeight="700" letterSpacing="3">100% MADE IN</text>
      <text x="150" y="156" textAnchor="middle" fontSize="18" fill="#0D47A1" fontFamily="sans-serif" fontWeight="800" letterSpacing="4">INDIA</text>

      {/* Tri-color accent */}
      <rect x="110" y="164" width="26" height="3" rx="1.5" fill="#FF9933" />
      <rect x="137" y="164" width="26" height="3" rx="1.5" fill="white" stroke="#E0E0E0" strokeWidth="0.5" />
      <rect x="164" y="164" width="26" height="3" rx="1.5" fill="#138808" />

      {/* Decorative corner elements */}
      <circle cx="60" cy="50" r="3" fill="#26C6DA" fillOpacity="0.4" />
      <circle cx="240" cy="50" r="3" fill="#26C6DA" fillOpacity="0.4" />
      <circle cx="60" cy="140" r="2" fill="#42A5F5" fillOpacity="0.3" />
      <circle cx="240" cy="140" r="2" fill="#42A5F5" fillOpacity="0.3" />
    </svg>
  );
}
