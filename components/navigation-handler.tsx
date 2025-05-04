"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"

export function useCustomNavigation() {
  const router = useRouter()

  const navigateTo = useCallback(
    (path: string) => {
      // Check if the path contains an anchor
      if (path.includes("#")) {
        // Extract the base path and the anchor
        const [basePath, anchor] = path.split("#")

        // If we're already on the same page, just scroll to the anchor
        if (window.location.pathname === basePath || window.location.pathname === basePath + "/") {
          const element = document.getElementById(anchor)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
          return
        }

        // Otherwise, navigate to the page first
        router.push(path)

        // After navigation, scroll to the anchor
        setTimeout(() => {
          const element = document.getElementById(anchor)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      } else {
        // Regular navigation without anchor
        document.documentElement.style.scrollBehavior = "auto"
        window.scrollTo(0, 0)
        router.push(path)
      }
    },
    [router],
  )

  const scrollToTop = useCallback(() => {
    // Enable smooth scrolling for same-page navigation
    document.documentElement.style.scrollBehavior = "smooth"

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    // Reset scroll behavior after scrolling
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "auto"
    }, 1000)
  }, [])

  return { navigateTo, scrollToTop }
}
