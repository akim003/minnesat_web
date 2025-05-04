"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/favicon.jpg" alt="MinneSat Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold tracking-tight">MinneSat</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/legacy"
            className={`text-sm font-medium ${isActive("/legacy") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
          >
            Legacy
          </Link>
          <Link
            href="/sponsors"
            className={`text-sm font-medium ${isActive("/sponsors") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
          >
            Sponsors
          </Link>
          <Link
            href="/join"
            className={`text-sm font-medium ${isActive("/join") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
          >
            Join
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${isActive("/contact") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
          >
            Contact Us
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-black/95 border-t border-white/10">
            <Link
              href="/legacy"
              className={`text-base font-medium ${isActive("/legacy") ? "text-gold" : "text-white/70"} transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Legacy
            </Link>
            <Link
              href="/sponsors"
              className={`text-base font-medium ${isActive("/sponsors") ? "text-gold" : "text-white/70"} transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sponsors
            </Link>
            <Link
              href="/join"
              className={`text-base font-medium ${isActive("/join") ? "text-gold" : "text-white/70"} transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Join
            </Link>
            <Link
              href="/contact"
              className={`text-base font-medium ${isActive("/contact") ? "text-gold" : "text-white/70"} transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
