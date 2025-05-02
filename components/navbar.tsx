"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
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
            href="/team"
            className={`text-sm font-medium ${isActive("/team") ? "text-gold" : "text-white/70 hover:text-gold"} transition-colors`}
          >
            The Team
          </Link>
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
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
    </header>
  )
}
