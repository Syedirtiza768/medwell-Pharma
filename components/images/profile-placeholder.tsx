export function ProfilePlaceholder({ initials = "JD", size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#FFF1F2" />
      <text x="50" y="60" fontFamily="Arial" fontSize="36" fontWeight="bold" fill="#E11D48" textAnchor="middle">
        {initials}
      </text>
    </svg>
  )
}
