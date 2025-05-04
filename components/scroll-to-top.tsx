"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // If there is, let the browser handle the anchor scrolling
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        // Wait a moment for the page to render
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
      return
    }

    // Otherwise, force scroll to top immediately when route changes
    window.scrollTo(0, 0)

    // Add a backup to ensure scroll is at top
    const forceScrollTop = () => {
      window.scrollTo(0, 0)
    }

    // Execute immediately and after a small delay to ensure it works
    forceScrollTop()
    const timeoutId = setTimeout(forceScrollTop, 0)

    return () => clearTimeout(timeoutId)
  }, [pathname, searchParams])

  return null
}
