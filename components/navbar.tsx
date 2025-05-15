"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useCustomNavigation } from "./navigation-handler"

export function Navbar() {
  const pathname = usePathname()
  const { navigateTo, scrollToTop } = useCustomNavigation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Custom navigation handler
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()

    // If user is already on this page, just scroll to top
    if (isActive(path)) {
      scrollToTop()
    } else {
      // Navigate to the new page with instant scroll to top
      navigateTo(path)
    }

    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2" onClick={(e) => handleNavigation(e, "/")}>
            <Image src="/favicon.webp" alt="MinneSat Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold tracking-tight">MinneSat</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/"
            className={`text-sm font-medium ${isActive("/") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
            onClick={(e) => handleNavigation(e, "/")}
          >
            Home
          </a>
          <a
            href="/legacy"
            className={`text-sm font-medium ${isActive("/legacy") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
            onClick={(e) => handleNavigation(e, "/legacy")}
          >
            Legacy
          </a>
          <a
            href="/sponsors"
            className={`text-sm font-medium ${isActive("/sponsors") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
            onClick={(e) => handleNavigation(e, "/sponsors")}
          >
            Sponsors
          </a>
          <a
            href="/join"
            className={`text-sm font-medium ${isActive("/join") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
            onClick={(e) => handleNavigation(e, "/join")}
          >
            Join
          </a>
          <a
            href="/contact"
            className={`text-sm font-medium ${isActive("/contact") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
            onClick={(e) => handleNavigation(e, "/contact")}
          >
            Contact Us
          </a>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-black/95 border-t border-white/10">
            <a
              href="/"
              className={`text-base font-medium ${isActive("/") ? "text-gold" : "text-white/70"} transition-colors`}
              onClick={(e) => handleNavigation(e, "/")}
            >
              Home
            </a>
            <a
              href="/legacy"
              className={`text-base font-medium ${isActive("/legacy") ? "text-gold" : "text-white/70"} transition-colors`}
              onClick={(e) => handleNavigation(e, "/legacy")}
            >
              Legacy
            </a>
            <a
              href="/sponsors"
              className={`text-base font-medium ${isActive("/sponsors") ? "text-gold" : "text-white/70"} transition-colors`}
              onClick={(e) => handleNavigation(e, "/sponsors")}
            >
              Sponsors
            </a>
            <a
              href="/join"
              className={`text-base font-medium ${isActive("/join") ? "text-gold" : "text-white/70"} transition-colors`}
              onClick={(e) => handleNavigation(e, "/join")}
            >
              Join
            </a>
            <a
              href="/contact"
              className={`text-base font-medium ${isActive("/contact") ? "text-gold" : "text-white/70"} transition-colors`}
              onClick={(e) => handleNavigation(e, "/contact")}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
