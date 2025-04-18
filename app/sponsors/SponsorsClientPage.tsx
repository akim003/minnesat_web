"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Medal, Trophy } from "lucide-react"

// Sponsor data with level information
const sponsors = [
  {
    name: "Aerospace Dynamics",
    description: "Leading provider of aerospace components and systems.",
    level: "gold",
    imageUrl: "/sponsors/sponsor-logo-1.png",
    website: "https://example.com/aerospace-dynamics",
  },
  {
    name: "TechSat Solutions",
    description: "Innovative satellite technology and communications systems.",
    level: "gold",
    imageUrl: "/sponsors/sponsor-logo-2.png",
    website: "https://example.com/techsat",
  },
  {
    name: "Minnesota Engineering Group",
    description: "Local engineering consultancy supporting student initiatives.",
    level: "silver",
    imageUrl: "/sponsors/sponsor-logo-3.png",
    website: "https://example.com/meg",
  },
  {
    name: "Quantum Electronics",
    description: "Manufacturer of high-precision electronic components.",
    level: "silver",
    imageUrl: "/sponsors/sponsor-logo-4.png",
    website: "https://example.com/quantum",
  },
  {
    name: "Stellar Systems",
    description: "Space technology research and development firm.",
    level: "silver",
    imageUrl: "/sponsors/sponsor-logo-5.png",
    website: "https://example.com/stellar",
  },
  {
    name: "Twin Cities Manufacturing",
    description: "Local manufacturing partner for custom components.",
    level: "bronze",
    imageUrl: "/sponsors/sponsor-logo-6.png",
    website: "https://example.com/tcm",
  },
  {
    name: "Northstar Innovations",
    description: "Technology startup focused on sensor systems.",
    level: "bronze",
    imageUrl: "/sponsors/sponsor-logo-7.png",
    website: "https://example.com/northstar",
  },
  {
    name: "University Engineering Department",
    description: "Academic support and resources from our home department.",
    level: "bronze",
    imageUrl: "/sponsors/sponsor-logo-8.png",
    website: "https://example.com/ued",
  },
]

// Helper function to get the appropriate icon for each sponsor level
const getSponsorLevelIcon = (level: string) => {
  switch (level) {
    case "gold":
      return <Trophy className="h-6 w-6 text-gold" />
    case "silver":
      return <Medal className="h-6 w-6 text-zinc-300" />
    case "bronze":
      return <Award className="h-6 w-6 text-amber-700" />
    default:
      return null
  }
}

// Helper function to get the appropriate color class for each sponsor level
const getSponsorLevelClass = (level: string) => {
  switch (level) {
    case "gold":
      return "bg-gold/10 text-gold border-gold/30"
    case "silver":
      return "bg-zinc-300/10 text-zinc-300 border-zinc-300/30"
    case "bronze":
      return "bg-amber-700/10 text-amber-700 border-amber-700/30"
    default:
      return ""
  }
}

export default function SponsorsClientPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/shared/logo.png" alt="MinneSat Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-bold tracking-tight">MinneSat</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/team" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Team
            </Link>
            <Link href="/legacy" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Legacy
            </Link>
            <Link href="/sponsors" className="text-sm font-medium text-gold hover:text-gold transition-colors">
              Sponsors
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Contact
            </Link>
            <Button className="bg-maroon hover:bg-maroon/90">Join Us</Button>
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block rounded-full bg-gold/20 px-3 py-1 text-sm text-gold mb-4">Our Partners</div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Our Sponsors</h1>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="max-w-3xl text-white/70">
                We are grateful for the support of our sponsors who make our participation in the CanSat competition
                possible. Their contributions enable us to design, build, and launch innovative space systems.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 mb-16">
              <h2 className="text-2xl font-bold mb-4">Why Sponsor MinneSat?</h2>
              <p className="text-white/70 mb-6">
                Sponsoring MinneSat provides a unique opportunity to support the next generation of aerospace engineers
                and scientists. Your contribution helps us purchase materials, access specialized equipment, and travel
                to competitions. In return, sponsors receive recognition on our website, social media, and competition
                materials, as well as access to talented students for potential recruitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maroon hover:bg-maroon/90 rounded-full px-8">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <Trophy className="h-8 w-8 text-gold" />
                <h2 className="text-2xl font-bold">Gold Sponsors</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sponsors
                  .filter((sponsor) => sponsor.level === "gold")
                  .map((sponsor, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-6 bg-zinc-900 rounded-2xl border border-gold/30 hover:border-gold/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative h-16 w-40">
                          <Image
                            src={
                              sponsor.imageUrl
                                ? sponsor.imageUrl
                                : "/placeholder.svg?height=150&width=250&query=company logo"
                            }
                            alt={sponsor.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div
                          className={`rounded-full px-3 py-1 flex items-center gap-2 ${getSponsorLevelClass(sponsor.level)}`}
                        >
                          {getSponsorLevelIcon(sponsor.level)}
                          <span className="text-sm font-medium capitalize">{sponsor.level}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
                      <p className="text-white/70 mb-4 flex-1">{sponsor.description}</p>
                      <Button
                        variant="outline"
                        className="border-gold/30 text-gold hover:bg-gold/10 w-full"
                        onClick={() => window.open(sponsor.website, "_blank")}
                      >
                        Visit Website
                      </Button>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <Medal className="h-8 w-8 text-zinc-300" />
                <h2 className="text-2xl font-bold">Silver Sponsors</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sponsors
                  .filter((sponsor) => sponsor.level === "silver")
                  .map((sponsor, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-6 bg-zinc-900 rounded-2xl border border-zinc-300/30 hover:border-zinc-300/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative h-16 w-40">
                          <Image
                            src={
                              sponsor.imageUrl
                                ? sponsor.imageUrl
                                : "/placeholder.svg?height=150&width=250&query=company logo"
                            }
                            alt={sponsor.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div
                          className={`rounded-full px-3 py-1 flex items-center gap-2 ${getSponsorLevelClass(sponsor.level)}`}
                        >
                          {getSponsorLevelIcon(sponsor.level)}
                          <span className="text-sm font-medium capitalize">{sponsor.level}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
                      <p className="text-white/70 mb-4 flex-1">{sponsor.description}</p>
                      <Button
                        variant="outline"
                        className="border-zinc-300/30 text-zinc-300 hover:bg-zinc-300/10 w-full"
                        onClick={() => window.open(sponsor.website, "_blank")}
                      >
                        Visit Website
                      </Button>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-8">
                <Award className="h-8 w-8 text-amber-700" />
                <h2 className="text-2xl font-bold">Bronze Sponsors</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {sponsors
                  .filter((sponsor) => sponsor.level === "bronze")
                  .map((sponsor, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-6 bg-zinc-900 rounded-2xl border border-amber-700/30 hover:border-amber-700/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative h-16 w-40">
                          <Image
                            src={
                              sponsor.imageUrl
                                ? sponsor.imageUrl
                                : "/placeholder.svg?height=150&width=250&query=company logo"
                            }
                            alt={sponsor.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div
                          className={`rounded-full px-3 py-1 flex items-center gap-2 ${getSponsorLevelClass(sponsor.level)}`}
                        >
                          {getSponsorLevelIcon(sponsor.level)}
                          <span className="text-sm font-medium capitalize">{sponsor.level}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
                      <p className="text-white/70 mb-4 flex-1">{sponsor.description}</p>
                      <Button
                        variant="outline"
                        className="border-amber-700/30 text-amber-700 hover:bg-amber-700/10 w-full"
                        onClick={() => window.open(sponsor.website, "_blank")}
                      >
                        Visit Website
                      </Button>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Become a Sponsor</h2>
              <p className="max-w-2xl mx-auto text-white/70 mb-6">
                Interested in supporting our team? We offer various sponsorship levels with different benefits and
                recognition opportunities. Contact us to learn more about how you can help us reach our goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-maroon hover:bg-maroon/90 rounded-full px-8">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                  Sponsorship Packages
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white py-12 border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/shared/logo.png" alt="MinneSat Logo" width={40} height={40} className="h-10 w-10" />
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
                  <Link href="/#about" className="text-white/60 hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-white/60 hover:text-gold transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/legacy" className="text-white/60 hover:text-gold transition-colors">
                    Legacy Projects
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="text-white/60 hover:text-gold transition-colors">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-gold transition-colors">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-white/60 hover:text-gold transition-colors">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-white/60 hover:text-gold transition-colors">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/60">
            <p>© {new Date().getFullYear()} MinneSat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
