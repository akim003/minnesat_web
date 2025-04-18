import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Updated past projects data for 2023, 2024, and 2025
const pastProjects = [
  {
    id: "2025",
    title: "2025 CanSat Competition",
    fullTitle: "Advanced Autonomous Navigation System",
    description: "Our latest competition entry featuring advanced telemetry and autonomous landing systems.",
    fullDescription:
      "The 2025 MinneSat team developed our most advanced CanSat to date, featuring a sophisticated autonomous navigation system capable of precise landing control. The system incorporates machine learning algorithms for terrain recognition and advanced sensor fusion for optimal flight path determination.",
    imageUrl: "/earth-orbit-blueprint.png",
    year: "2025",
    teamMembers: ["Emma Johnson", "Michael Chen", "Sophia Rodriguez", "James Wilson"],
    achievements: ["Competition in progress", "Best Technical Design (Preliminary Round)", "Innovation Award Nominee"],
  },
  {
    id: "2024",
    title: "2024 CanSat Competition",
    fullTitle: "Multi-Stage Deployment System",
    description: "Award-winning design with innovative sensor array and data collection capabilities.",
    fullDescription:
      "Our 2024 CanSat featured a revolutionary multi-stage deployment system that allowed for extended data collection during descent. The team implemented a custom PCB design with integrated environmental sensors and a robust telemetry system that maintained connection throughout the mission.",
    imageUrl: "/legacy/CanSat2024_Icon.jpg",
    year: "2024",
    teamMembers: ["David Miller", "Sarah Adams", "Thomas Walker", "Olivia Martinez"],
    achievements: ["2nd Place Overall", "Best Mechanical Design", "Most Reliable Communication System"],
  },
  {
    id: "2023",
    title: "2023 CanSat Competition",
    fullTitle: "Atmospheric Data Collection System",
    description: "Our first competition entry that established the foundation for future MinneSat designs.",
    fullDescription:
      "The inaugural MinneSat team designed and built an atmospheric data collection system capable of measuring temperature, pressure, and air quality during descent. The system included a custom parachute deployment mechanism and real-time data transmission capabilities that set the foundation for our future designs.",
    imageUrl: "/earth-orbit-blueprint.png",
    year: "2023",
    teamMembers: ["Jane Doe", "John Smith", "Alex Johnson", "Sam Wilson"],
    achievements: ["3rd Place Overall", "1st Place in Technical Design", "Best Telemetry System"],
  },
]

interface LegacyProjectPageProps {
  params: {
    year: string
  }
}

export function generateMetadata({ params }: LegacyProjectPageProps) {
  const project = pastProjects.find((p) => p.id === params.year)

  if (!project) {
    return {
      title: "Project Not Found - MinneSat",
    }
  }

  return {
    title: `${project.title} - MinneSat Legacy`,
    description: project.description,
  }
}

export default function LegacyProjectPage({ params }: LegacyProjectPageProps) {
  const project = pastProjects.find((p) => p.id === params.year)

  if (!project) {
    notFound()
  }

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
            <Link href="/#about" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/team" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Team
            </Link>
            <Link href="/legacy" className="text-sm font-medium text-gold hover:text-gold transition-colors">
              Legacy
            </Link>
            <Link href="/sponsors" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
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
            <Link
              href="/legacy"
              className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors mb-8"
            >
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
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Legacy Projects
            </Link>

            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div className="relative h-[500px] overflow-hidden rounded-2xl border border-white/10">
                <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              <div>
                <div className="inline-block rounded-full bg-maroon/20 px-3 py-1 text-sm text-maroon mb-4">
                  {project.year} Competition
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">{project.title}</h1>
                <h2 className="text-2xl font-medium text-gold mb-4">{project.fullTitle}</h2>
                <div className="w-20 h-1 bg-gold mb-6"></div>
                <p className="text-white/70 mb-6">{project.fullDescription}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Team Members</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.teamMembers.map((member, index) => (
                        <li key={index} className="flex items-center gap-2">
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
                            className="h-4 w-4 text-gold"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          <span className="text-white/80">{member}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Achievements</h3>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center gap-2">
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
                            className="h-5 w-5 text-gold"
                          >
                            <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11" />
                            <circle cx="12" cy="8" r="7" />
                          </svg>
                          <span className="text-white/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative h-64 overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={`/earth-orbit-blueprint.png?height=300&width=400&query=cansat project image ${project.year} ${i}`}
                      alt={`Project image ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
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
