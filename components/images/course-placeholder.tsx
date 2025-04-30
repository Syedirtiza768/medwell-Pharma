export function CoursePlaceholder({ title, category }) {
  let iconPath = ""
  const bgColor = "#FFF1F2"

  switch (category) {
    case "photography":
      iconPath = "M35 35 L65 35 L65 65 L35 65 Z M45 45 A5 5 0 1 0 45 55 A5 5 0 1 0 45 45"
      break
    case "solar":
      iconPath = "M50 30 L55 40 L65 40 L57 50 L60 60 L50 55 L40 60 L43 50 L35 40 L45 40 Z"
      break
    case "marketing":
      iconPath = "M30 50 L50 30 L70 50 L50 70 Z"
      break
    case "speaking":
      iconPath = "M35 40 Q50 20 65 40 L65 60 Q50 80 35 60 Z"
      break
    default:
      iconPath = "M30 30 L70 30 L70 70 L30 70 Z"
  }

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill={bgColor} />
      <path d={iconPath} fill="#E11D48" fillOpacity="0.8" />
      <text x="50" y="85" fontFamily="Arial" fontSize="10" fill="#881337" textAnchor="middle">
        {title}
      </text>
    </svg>
  )
}
