import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

// Updated past projects data for 2023, 2024, and 2025
const pastProjects = [
  {
    id: "2025",
    title: "CanSat 2025 Project",
    description: "Shhhh... Coming soon",
    imageUrl: "/earth-orbit-blueprint.png",
    year: "2025",
  },
  {
    id: "2024",
    title: "CanSat 2024 Project",
    description: "Best performance to date!",
    imageUrl: "/legacy/CanSat2024_Icon.jpg",
    year: "2024",
  },
  {
    id: "2023",
    title: "CanSat 2023 Project",
    description: "Our first competition entry that established the foundation for future MinneSat designs.",
    imageUrl: "/legacy/CanSat2023_Icon.jpg",
    year: "2023",
  },
  {
    id: "2022",
    title: "CanSat 2022 Project",
    description: "Our prototype design that laid the groundwork for the MinneSat team's formation.",
    imageUrl: "/legacy/CanSat2022_Icon.jpeg",
    year: "2022",
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
      <Navbar />

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
                Explore our CanSat competition projects from 2022 to 2025, showcasing our team's innovation and
                engineering excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pastProjects.map((project) => (
                <Link href={`/legacy/${project.id}`} key={project.id} className="group h-full">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-maroon/10 flex flex-col h-full">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={project.imageUrl || "/placeholder.svg?height=600&width=800&query=satellite project cansat"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="mb-4 text-white/70 flex-grow">{project.description}</p>
                      <Button className="bg-gold hover:bg-gold/90 text-black rounded-full w-full md:w-auto mt-auto">
                        View Project
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
