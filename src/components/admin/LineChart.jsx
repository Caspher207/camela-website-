import { useState } from 'react'
import { formatPrice } from '../../utils/formatters'

const W = 600
const H = 200
const PAD = { top: 10, right: 10, bottom: 30, left: 50 }

const scaleX = (i, total) => PAD.left + (i / (total - 1)) * (W - PAD.left - PAD.right)
const scaleY = (val, min, max) => PAD.top + (1 - (val - min) / (max - min)) * (H - PAD.top - PAD.bottom)

const smoothPath = (points) => {
  if (points.length < 2) return ''
  const d = [`M ${points[0].x} ${points[0].y}`]
  for (let i = 1; i < points.length; i++) {
    const mx = (points[i - 1].x + points[i].x) / 2
    d.push(`C ${mx} ${points[i - 1].y} ${mx} ${points[i].y} ${points[i].x} ${points[i].y}`)
  }
  return d.join(' ')
}

const LineChart = ({ data = [], dataKey = 'revenue', color = '#e11d48', gradientId = 'lineGrad', isCurrency = true }) => {
  const [tooltip, setTooltip] = useState(null)

  const values = data.map((d) => d[dataKey])
  const min = Math.min(...values) * 0.9
  const max = Math.max(...values) * 1.05

  const points = data.map((d, i) => ({
    x: scaleX(i, data.length),
    y: scaleY(d[dataKey], min, max),
    value: d[dataKey],
    label: d.month || d.day,
  }))

  const linePath = smoothPath(points)
  const areaPath = linePath
    + ` L ${points[points.length - 1].x} ${H - PAD.bottom}`
    + ` L ${points[0].x} ${H - PAD.bottom} Z`

  const yTicks = 4
  const yStep = (max - min) / yTicks

  return (
    <div className="relative w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y axis gridlines */}
        {Array.from({ length: yTicks + 1 }).map((_, i) => {
          const val = min + i * yStep
          const y = scaleY(val, min, max)
          return (
            <g key={i}>
              <line x1={PAD.left} x2={W - PAD.right} y1={y} y2={y} stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
              <text x={PAD.left - 6} y={y + 4} textAnchor="end" fontSize="9" fill="currentColor" opacity="0.4">
                {isCurrency ? `$${(val / 1000).toFixed(0)}k` : val.toFixed(0)}
              </text>
            </g>
          )
        })}

        {/* Area fill */}
        <path d={areaPath} fill={`url(#${gradientId})`} />

        {/* Line */}
        <path d={linePath} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Data points + tooltips */}
        {points.map((pt, i) => (
          <g key={i} onMouseEnter={() => setTooltip(pt)} onMouseLeave={() => setTooltip(null)} style={{ cursor: 'pointer' }}>
            <circle cx={pt.x} cy={pt.y} r="8" fill="transparent" />
            <circle cx={pt.x} cy={pt.y} r="3.5" fill={color} stroke="white" strokeWidth="2"
              opacity={tooltip?.label === pt.label ? 1 : 0.7} />
            <text x={pt.x} y={H - 6} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.5">
              {pt.label}
            </text>
          </g>
        ))}

        {/* Tooltip */}
        {tooltip && (() => {
          const tx = tooltip.x > W * 0.7 ? tooltip.x - 90 : tooltip.x + 8
          return (
            <g>
              <rect x={tx} y={tooltip.y - 26} width="82" height="22" rx="6" fill="rgb(17,17,17)" opacity="0.92" />
              <text x={tx + 41} y={tooltip.y - 11} textAnchor="middle" fontSize="10" fill="white" fontWeight="600">
                {isCurrency ? formatPrice(tooltip.value) : tooltip.value.toLocaleString()}
              </text>
            </g>
          )
        })()}
      </svg>
    </div>
  )
}

export default LineChart
