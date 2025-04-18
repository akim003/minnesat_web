"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Team leadership data
const leadershipTeam = [
  {
    name: "Alex Johnson",
    position: "President",
    description: "Oversees all club operations and represents MinneSat at university and competition events.",
    imageUrl: "/focused-engineer.png?key=q27iz&height=300&width=300&query=engineering student portrait 1",
    email: "ajohnson@umn.edu",
  },
  {
    name: "Sarah Chen",
    position: "Software Lead",
    description: "Manages the software development team and oversees all programming aspects of our CanSat projects.",
    imageUrl: "/focused-engineer.png?key=q27iz&height=300&width=300&query=engineering student portrait 2",
    email: "schen@umn.edu",
  },
  {
    name: "Michael Rodriguez",
    position: "Mechanical Lead",
    description: "Leads the mechanical design and manufacturing of our CanSat structures and deployment systems.",
    imageUrl: "/focused-engineer.png?key=q27iz&height=300&width=300&query=engineering student portrait 3",
    email: "mrodriguez@umn.edu",
  },
  {
    name: "Emma Wilson",
    position: "Electrical Lead",
    description: "Directs the electrical engineering team responsible for PCB design, sensors, and power systems.",
    imageUrl: "/focused-engineer.png?key=q27iz&height=300&width=300&query=engineering student portrait 4",
    email: "ewilson@umn.edu",
  },
  {
    name: "David Park",
    position: "Treasurer",
    description: "Manages the club's finances, budget planning, and coordinates with university financial services.",
    imageUrl: "/focused-engineer.png?key=q27iz&height=300&width=300&query=engineering student portrait 5",
    email: "dpark@umn.edu",
  },
]

export default function TeamPageClient() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/orbiting-communication.png"
                alt="MinneSat Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold tracking-tight">MinneSat</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/team" className="text-sm font-medium text-gold hover:text-gold transition-colors">
              The Team
            </Link>
            <Link href="/legacy" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Legacy
            </Link>
            <Link href="/sponsors" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Sponsors
            </Link>
            <Link href="/join" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Join
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Contact Us
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
              <div className="inline-block rounded-full bg-gold/20 px-3 py-1 text-sm text-gold mb-4">
                Our Leadership
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Meet Our Team</h1>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="max-w-3xl text-white/70">
                Our leadership team brings together diverse skills and expertise to guide MinneSat through design,
                development, and competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <div key={index} className="group">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl bg-zinc-800 p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-maroon/5 border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                    <div className="relative z-20 flex h-full flex-col">
                      <div className="flex-1 flex flex-col items-center">
                        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-zinc-700 mx-auto mb-4">
                          <Image
                            src={leader.imageUrl || "/placeholder.svg"}
                            alt={leader.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-center">{leader.name}</h3>
                        <p className="text-gold font-medium text-center mt-1">{leader.position}</p>
                      </div>
                      <div className="mt-auto">
                        <p className="text-white/70 text-sm mb-4">{leader.description}</p>
                        <Button
                          variant="outline"
                          className="w-full border-gold/30 text-gold hover:bg-gold/10"
                          onClick={() => (window.location.href = `mailto:${leader.email}`)}
                        >
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              <p className="max-w-2xl mx-auto text-white/70 mb-6">
                Interested in becoming part of MinneSat? We're always looking for passionate students to join our team
                and contribute to our CanSat projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-maroon hover:bg-maroon/90 rounded-full px-8">Apply Now</Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                  Learn About Roles
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
                <Image
                  src="/orbiting-communication.png"
                  alt="MinneSat Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
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
