import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Updated past projects data for 2023, 2024, and 2025
const pastProjects = [
  {
    id: "2025",
    title: "CanSat 2025 Project",
    description: "Our latest competition entry featuring advanced telemetry and autonomous landing systems.",
    imageUrl: "/legacy/project-2025.png",
    year: "2025",
  },
  {
    id: "2024",
    title: "CanSat 2024 Project",
    description: "Award-winning design with innovative sensor array and data collection capabilities.",
    imageUrl: "/legacy/project-2024.png",
    year: "2024",
  },
  {
    id: "2023",
    title: "CanSat 2023 Project",
    description: "Our first competition entry that established the foundation for future MinneSat designs.",
    imageUrl: "/legacy/project-2023.png",
    year: "2023",
  },
]

export const metadata = {
  title: "MinneSat - Legacy Projects",
  description: "Past CanSat competition projects by the University of Minnesota MinneSat team",
}

export default function LegacyPage() {
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
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block rounded-full bg-maroon/20 px-3 py-1 text-sm text-maroon mb-4">
                Our History
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Legacy Projects</h1>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="max-w-3xl text-white/70">
                Explore our CanSat competition projects from 2023 to 2025, showcasing our team's innovation and
                engineering excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastProjects.map((project) => (
                <Link href={`/legacy/${project.id}`} key={project.id} className="group">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-maroon/10">
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={
                          project.imageUrl
                            ? project.imageUrl
                            : "/placeholder.svg?height=600&width=800&query=satellite project cansat"
                        }
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="mb-4 text-white/70">{project.description}</p>
                      <Button className="bg-gold hover:bg-gold/90 text-black rounded-full">View Project</Button>
                    </div>
                  </div>
                </Link>
              ))}
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
                  <Link href="/#contact" className="text-white/60 hover:text-gold transition-colors">
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
