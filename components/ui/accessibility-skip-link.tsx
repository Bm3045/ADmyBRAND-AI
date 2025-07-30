export function AccessibilitySkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium"
    >
      Skip to main content
    </a>
  )
}
