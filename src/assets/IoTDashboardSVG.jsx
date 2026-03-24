export default function IoTDashboardSVG({ width = 400, height = 280, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="dashGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D47A1" />
          <stop offset="100%" stopColor="#132038" />
        </linearGradient>
        <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00ACC1" />
          <stop offset="100%" stopColor="#26C6DA" />
        </linearGradient>
        <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#42A5F5" />
        </linearGradient>
      </defs>

      {/* Window frame */}
      <rect x="0" y="0" width="400" height="280" rx="12" fill="url(#dashGrad)" />

      {/* Title bar */}
      <rect x="0" y="0" width="400" height="32" rx="12" fill="#0a1628" />
      <rect x="0" y="12" width="400" height="20" fill="#0a1628" />
      <circle cx="18" cy="16" r="5" fill="#EF5350" fillOpacity="0.8" />
      <circle cx="36" cy="16" r="5" fill="#FFC107" fillOpacity="0.8" />
      <circle cx="54" cy="16" r="5" fill="#66BB6A" fillOpacity="0.8" />
      <text x="200" y="20" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="sans-serif">Advikon IoT Dashboard</text>

      {/* Sidebar */}
      <rect x="0" y="32" width="80" height="248" fill="#0a1628" fillOpacity="0.5" />
      {['Overview', 'Machines', 'Alerts', 'Inventory', 'Reports'].map((label, i) => (
        <g key={label}>
          <rect x="8" y={44 + i * 36} width="64" height="28" rx="6"
            fill={i === 0 ? '#1565C0' : 'transparent'} fillOpacity={i === 0 ? 0.3 : 0} />
          <text x="40" y={62 + i * 36} textAnchor="middle" fontSize="8"
            fill={i === 0 ? '#42A5F5' : '#6b7280'} fontFamily="sans-serif">{label}</text>
        </g>
      ))}

      {/* Stat cards */}
      {[
        { x: 92, label: 'Active Machines', value: '148', color: '#42A5F5' },
        { x: 186, label: 'Today Sales', value: '₹24.5K', color: '#26C6DA' },
        { x: 280, label: 'Alerts', value: '3', color: '#FF7043' },
      ].map((card) => (
        <g key={card.label}>
          <rect x={card.x} y="44" width="82" height="48" rx="6" fill="white" fillOpacity="0.05" />
          <text x={card.x + 10} y="60" fontSize="7" fill="#9ca3af" fontFamily="sans-serif">{card.label}</text>
          <text x={card.x + 10} y="80" fontSize="16" fill={card.color} fontFamily="sans-serif" fontWeight="700">{card.value}</text>
        </g>
      ))}

      {/* Line chart */}
      <rect x="92" y="104" width="178" height="100" rx="6" fill="white" fillOpacity="0.03" />
      <text x="102" y="118" fontSize="8" fill="#9ca3af" fontFamily="sans-serif">Sales Trend (7 days)</text>

      {/* Grid lines */}
      {[140, 160, 180].map((y) => (
        <line key={y} x1="100" y1={y} x2="262" y2={y} stroke="white" strokeOpacity="0.05" />
      ))}

      {/* Chart line */}
      <polyline
        points="108,185 130,170 152,178 174,155 196,148 218,160 240,140 256,145"
        stroke="url(#chartLine)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Chart fill */}
      <polygon
        points="108,185 130,170 152,178 174,155 196,148 218,160 240,140 256,145 256,198 108,198"
        fill="#00ACC1" fillOpacity="0.08"
      />
      {/* Data points */}
      {[[108,185],[130,170],[152,178],[174,155],[196,148],[218,160],[240,140],[256,145]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#0D47A1" stroke="#26C6DA" strokeWidth="1.5" />
      ))}

      {/* Bar chart */}
      <rect x="282" y="104" width="106" height="100" rx="6" fill="white" fillOpacity="0.03" />
      <text x="292" y="118" fontSize="8" fill="#9ca3af" fontFamily="sans-serif">By Product</text>

      {[
        { y: 130, w: 65, label: 'Snacks' },
        { y: 148, w: 82, label: 'Drinks' },
        { y: 166, w: 50, label: 'Combo' },
        { y: 184, w: 72, label: 'Others' },
      ].map((bar) => (
        <g key={bar.label}>
          <text x="292" y={bar.y + 8} fontSize="7" fill="#9ca3af" fontFamily="sans-serif">{bar.label}</text>
          <rect x="330" y={bar.y} width={bar.w * 0.6} height="10" rx="2" fill="url(#barGrad)" fillOpacity="0.7" />
        </g>
      ))}

      {/* Machine status panel */}
      <rect x="92" y="214" width="296" height="56" rx="6" fill="white" fillOpacity="0.03" />
      <text x="102" y="230" fontSize="8" fill="#9ca3af" fontFamily="sans-serif">Machine Status</text>

      {['Online', 'Online', 'Refill', 'Online', 'Alert', 'Online'].map((status, i) => (
        <g key={i}>
          <rect x={102 + i * 46} y="238" width="40" height="24" rx="4" fill="white" fillOpacity="0.04" />
          <text x={122 + i * 46} y="248" textAnchor="middle" fontSize="7" fill="#9ca3af" fontFamily="monospace">M-{String(i + 1).padStart(2, '0')}</text>
          <circle cx={122 + i * 46} cy="256" r="3"
            fill={status === 'Online' ? '#66BB6A' : status === 'Refill' ? '#FFC107' : '#EF5350'} />
        </g>
      ))}
    </svg>
  );
}
