export function HeroImage() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#FFF1F2" />
      <circle cx="400" cy="200" r="150" fill="#FDA4AF" fillOpacity="0.6" />
      <path
        d="M300 250C300 250 350 300 400 300C450 300 500 250 500 250"
        stroke="#BE123C"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="350" cy="180" r="15" fill="#BE123C" />
      <circle cx="450" cy="180" r="15" fill="#BE123C" />
      <path
        d="M250 150C250 150 300 100 400 100C500 100 550 150 550 150"
        stroke="#E11D48"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <text x="400" y="350" fontFamily="Arial" fontSize="24" fill="#881337" textAnchor="middle">
        Learning for Resilience and Strength
      </text>
    </svg>
  )
}
