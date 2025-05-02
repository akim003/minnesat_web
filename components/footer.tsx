"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, Check } from "lucide-react"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const [copied, setCopied] = useState(false)
  const teamEmail = "umn.minnesat@gmail.com"

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(teamEmail).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <footer className={`bg-zinc-950 text-white py-12 border-t border-white/10 ${className || ""}`}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/favicon.jpg" alt="MinneSat Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
              <span className="text-xl font-bold tracking-tight">MinneSat</span>
            </div>
            <p className="text-white/60 max-w-xs">
              University of Minnesota's CanSat team, designing and building space systems for the future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/60 hover:text-gold transition-colors">
                  The Team
                </Link>
              </li>
              <li>
                <Link href="/legacy" className="text-white/60 hover:text-gold transition-colors">
                  Legacy
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-white/60 hover:text-gold transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-white/60 hover:text-gold transition-colors">
                  Join
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/minnesat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <button
                onClick={copyEmailToClipboard}
                className="text-white/60 hover:text-gold transition-colors relative"
                aria-label="Copy email to clipboard"
                title="Click to copy email to clipboard"
              >
                {copied ? <Check className="h-6 w-6 text-green-500" /> : <Mail className="h-6 w-6" />}
                <span className="sr-only">Copy email to clipboard</span>
                {copied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Email copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} MinneSat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
