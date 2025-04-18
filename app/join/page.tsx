import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "MinneSat - Join Our Team",
  description: "Join the University of Minnesota's CanSat team and help build the future of space systems",
}

export default function JoinPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/favicon.jpg" alt="MinneSat Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
              <span className="text-xl font-bold tracking-tight">MinneSat</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/team" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              The Team
            </Link>
            <Link href="/legacy" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Legacy
            </Link>
            <Link href="/sponsors" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Sponsors
            </Link>
            <Link href="/join" className="text-sm font-medium text-gold hover:text-gold transition-colors">
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
              <div className="inline-block rounded-full bg-maroon/20 px-3 py-1 text-sm text-maroon mb-4">
                Join Our Team
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Become a MinneSat Member</h1>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="max-w-3xl text-white/70">
                We're looking for passionate students to join our team and help us design, build, and launch our next
                CanSat project.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-2xl border border-white/10">
                <Image src="/satellite-builders.png" alt="Team Working on Project" fill className="object-cover" />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Why Join MinneSat?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-maroon/20 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-maroon"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Hands-on Experience</h3>
                      <p className="text-white/70">
                        Gain practical experience designing, building, and testing real space systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-maroon/20 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-maroon"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Competition Experience</h3>
                      <p className="text-white/70">
                        Participate in the international CanSat competition and showcase your skills.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-maroon/20 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-maroon"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Career Opportunities</h3>
                      <p className="text-white/70">
                        Connect with industry sponsors and build your professional network.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button className="bg-maroon hover:bg-maroon/90 rounded-full px-8">Apply Now</Button>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8 text-center">Available Positions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-2">Software Team</h3>
                  <p className="text-white/70 mb-4">
                    Develop flight software, telemetry systems, and ground station interfaces.
                  </p>
                  <p className="text-gold font-medium">Skills: C/C++, Python, Embedded Systems</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-2">Mechanical Team</h3>
                  <p className="text-white/70 mb-4">
                    Design and build the physical structure, deployment mechanisms, and recovery systems.
                  </p>
                  <p className="text-gold font-medium">Skills: CAD, 3D Printing, Materials Science</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-2">Electrical Team</h3>
                  <p className="text-white/70 mb-4">
                    Create PCB designs, sensor integration, and power management systems.
                  </p>
                  <p className="text-gold font-medium">Skills: Circuit Design, PCB Layout, Sensors</p>
                </div>
              </div>
            </div>

            <div className="mt-20 bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-center">Application Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-maroon/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-maroon">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Submit Application</h3>
                  <p className="text-white/70 text-sm">Fill out our online application form</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-maroon/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-maroon">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Interview</h3>
                  <p className="text-white/70 text-sm">Meet with team leads to discuss your interests</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-maroon/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-maroon">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Team Assignment</h3>
                  <p className="text-white/70 text-sm">Get placed on a team based on your skills</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-maroon/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-maroon">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Start Contributing</h3>
                  <p className="text-white/70 text-sm">Begin working on the current CanSat project</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-maroon hover:bg-maroon/90 rounded-full px-8">Apply Now</Button>
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
                  src="/favicon.jpg"
                  alt="MinneSat Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
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
                  <Link href="/team" className="text-white/60 hover:text-gold transition-colors">
                    The Team
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
