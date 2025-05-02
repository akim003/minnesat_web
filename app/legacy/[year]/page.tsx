import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Award, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

// Updated past projects data to include leadership roles with headshots
const pastProjects = [
  {
    id: "2025",
    title: "2025 CanSat Competition",
    fullTitle: "Auto Gyro Descender",
    description: "Our latest competition entry featuring advanced telemetry and autonomous landing systems.",
    fullDescription:
      "The 2025 MinneSat team developed our most advanced CanSat to date, featuring a sophisticated autonomous navigation system capable of precise landing control. The system incorporates machine learning algorithms for terrain recognition and advanced sensor fusion for optimal flight path determination.",
    imageUrl: "/earth-orbit-blueprint.png",
    year: "2025",
    location: "Blacksburg, Virginia",
    date: "June 2025",
    objective:
      "Design and build a CanSat that can autonomously navigate to a designated landing zone after deployment.",
    leadership: [
      {
        name: "Alexander Kim",
        role: "President",
        imageUrl: "/legacy/2025/2025_President.jpeg",
      },
      {
        name: "Cole Harcey",
        role: "Mechanical Lead",
        imageUrl: "/legacy/2025/2025_Mech.jpeg",
      },
      {
        name: "Martin Michelli",
        role: "Electrical Lead",
        imageUrl: "/legacy/2025/2025_Electrical.jpeg",
      },
      {
        name: "Tyler Zenz",
        role: "Software Lead",
        imageUrl: "/legacy/2025/2025_Software.jpeg",
      },
    ],
    teamMembers: [
      "Alexander Kim",
      "Cole Harcey",
      "Martin Michelli",
      "Tyler Zenz",
      "Andrew Stotz",
      "Franklin Woolley",
      "John Kronkvist",
      "Andrew Soltis",
      "Nate Johnson",
      "Spenser Chinn",
    ],
    achievements: ["Competition in progress", "Best Technical Design (Preliminary Round)", "Innovation Award Nominee"],
    // Gallery images for each project
    gallery: [
      { url: "/legacy/2025/gallery1.jpg", alt: "CanSat 2025 Assembly" },
      { url: "/legacy/2025/gallery2.jpg", alt: "Navigation System Testing" },
      { url: "/legacy/2025/gallery3.jpg", alt: "Team Working on Electronics" },
      { url: "/legacy/2025/gallery4.jpg", alt: "Software Development Session" },
      { url: "/legacy/2025/gallery5.jpg", alt: "Field Testing" },
      { url: "/legacy/2025/gallery6.jpg", alt: "Final Design Presentation" },
    ],
  },
  {
    id: "2024",
    title: "2024 CanSat Competition",
    fullTitle: "Planetary Probe Instrument Delivery Mission",
    description: "Best performance to date!",
    fullDescription:
      "Our team delivered a strong showing at the 2024 CanSat Competition, successfully completing the mission and placing 13th overall out of dozens of international teams. Our headshield deployment worked well, ensuring a stable descent and safe payload delivery. The mission objectives were executed as planned, reflecting the team's dedication to reliable engineering and thorough testing.",
    imageUrl: "/legacy/CanSat2024_Icon.jpg",
    year: "2024",
    location: "Blacksburg, Virginia",
    date: "June 2024",
    objective: "Design and build a CanSat that simulates a planetary probe instrument delivery mission.",
    leadership: [
      {
        name: "Ethan Kolby",
        role: "President",
        imageUrl: "/legacy/2024/2024_President.jpeg",
      },
      {
        name: "Shea Larson",
        role: "Vice President",
        imageUrl: "/legacy/2024/2024_Vice.jpeg",
      },
      {
        name: "Alexander Kim",
        role: "Software Lead",
        imageUrl: "/legacy/2024/2024_SoftwareLead.jpeg",
      },
      {
        name: "Martin Michelli",
        role: "Electrical Lead",
        imageUrl: "/legacy/2024/2024_Electrical.jpeg",
      },
    ],
    teamMembers: [
      "Ethan Kolby",
      "Shea Larson",
      "Alexander Kim",
      "Martin Michelli",
      "Andrew Soltis",
      "Cole Harcey",
      "Andrew Stotz",
      "Franklin Woolley",
      "John Kronkvist",
      "Elliot Zimpfer",
    ],
    achievements: ["13th Place Overall", "Payload Delivered Intact"],
    // Gallery images for each project
    gallery: [
      { url: "/legacy/2024/gallery_1.JPG", alt: "Award Ceremony" },
      { url: "/legacy/2024/gallery_2.jpg", alt: "Launch" },
      { url: "/legacy/2024/gallery_3.JPG", alt: "Compliance Testing" },
      { url: "/legacy/2024/gallery_4.jpg", alt: "Launch Prep" },
      { url: "/legacy/2024/gallery_5.jpg", alt: "Photo with Korean Team" },
      { url: "/legacy/2024/gallery_6.jpg", alt: "Post Launch" },
    ],
  },
  {
    id: "2023",
    title: "2023 CanSat Competition",
    fullTitle: "Atmospheric Data Collection System",
    description: "Our first competition entry that established the foundation for future MinneSat designs.",
    fullDescription:
      "The inaugural MinneSat team designed and built an atmospheric data collection system capable of measuring temperature, pressure, and air quality during descent. The system included a custom parachute deployment mechanism and real-time data transmission capabilities that set the foundation for our future designs.",
    imageUrl: "/legacy/CanSat2023_Icon.jpg",
    year: "2023",
    location: "Blacksburg, Virginia",
    date: "June 2023",
    objective: "Design and build a CanSat capable of collecting atmospheric data during descent.",
    leadership: [
      {
        name: "Ben Stevens",
        role: "President",
        imageUrl: "/legacy/2023/2023_President.jpeg",
      },
      {
        name: "Alex Zhu",
        role: "Vice President",
        imageUrl: "/legacy/2023/2023_Vice.jpeg",
      },
      {
        name: "Ethan Kolby",
        role: "Software Lead",
        imageUrl: "/legacy/2023/2023_Software.jpeg",
      },
      {
        name: "Bodie Ziertman",
        role: "Mechanical Lead",
        imageUrl: "/legacy/2023/2023_Mech.jpeg",
      },
    ],
    teamMembers: [
      "Ben Stevens",
      "Alex Zhu",
      "Ethan Kolby",
      "Bodie Ziertman",
      "Shea Larson",
      "Kaustav Saha",
      "Rohit Roy",
      "Cole Harcey",
      "Tyler Mattson",
      "Ethan Tucker",
    ],
    achievements: ["3rd Place Overall", "1st Place in Technical Design", "Best Telemetry System"],
    // Gallery images for each project
    gallery: [
      { url: "/legacy/2023/gallery1.jpg", alt: "CanSat Assembly" },
      { url: "/legacy/2023/gallery2.jpg", alt: "Pre Launch Photo" },
      { url: "/legacy/2023/gallery3.jpg", alt: "Pre Launch Photo" },
      { url: "/legacy/2023/gallery4.jpg", alt: "Launch Photo" },
      { url: "/legacy/2023/gallery5.JPG", alt: "CanSat Recovery" },
      { url: "/legacy/2023/gallery6.jpg", alt: "Award Ceremony" },
    ],
  },
  {
    id: "2022",
    title: "2022 CanSat Prototype",
    fullTitle: "Initial Concept Development",
    description: "Our prototype design that laid the groundwork for the MinneSat team's formation.",
    fullDescription:
      "In 2022, a small group of passionate engineering students at the University of Minnesota began developing the initial concept for what would become the MinneSat team. This prototype CanSat focused on basic functionality and proof of concept, featuring a simple sensor package and recovery system. Though not officially entered in competition, this project was crucial in establishing our team and securing initial funding and faculty support.",
    imageUrl: "/legacy/CanSat2022_Icon.jpeg",
    year: "2022",
    location: "Minneapolis, Minnesota",
    date: "May 2022",
    objective: "Develop a proof-of-concept CanSat to establish the team and secure funding.",
    leadership: [
      {
        name: "Robert Taylor",
        role: "President",
        imageUrl: "/focused-engineer.png?height=150&width=150&query=engineering student portrait male 8",
      },
      {
        name: "Lisa Chang",
        role: "Software Lead",
        imageUrl: "/focused-engineer.png?height=150&width=150&query=engineering student portrait asian female 2",
      },
      {
        name: "Marcus Peterson",
        role: "Mechanical Lead",
        imageUrl: "/focused-engineer.png?height=150&width=150&query=engineering student portrait male 9",
      },
      {
        name: "Aisha Patel",
        role: "Electrical Lead",
        imageUrl: "/focused-engineer.png?height=150&width=150&query=engineering student portrait indian female",
      },
    ],
    teamMembers: ["Robert Taylor", "Lisa Chang", "Marcus Peterson", "Aisha Patel"],
    achievements: ["University Innovation Grant", "Engineering Department Recognition", "Successful Test Launch"],
    // Gallery images for each project
    gallery: [
      { url: "/legacy/2022/gallery1.jpg", alt: "Initial CanSat Concept" },
      { url: "/legacy/2022/gallery2.jpg", alt: "First Team Meeting" },
      { url: "/legacy/2022/gallery3.jpg", alt: "Component Selection" },
      { url: "/legacy/2022/gallery4.jpg", alt: "Early Prototype" },
      { url: "/legacy/2022/gallery5.jpg", alt: "Test Flight Preparation" },
      { url: "/legacy/2022/gallery6.jpg", alt: "Faculty Presentation" },
    ],
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
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 bg-black">
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

            {/* Project Info and Image */}
            <div className="grid gap-12 lg:grid-cols-2 items-start mb-12">
              <div className="relative h-[400px] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="project-image"
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">{project.title}</h1>
                <h2 className="text-2xl font-medium text-gold mb-4">{project.fullTitle}</h2>
                <div className="w-20 h-1 bg-gold mb-6"></div>
                <p className="text-white/70 mb-8">{project.fullDescription}</p>

                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 text-gold mr-2" />
                    Achievements
                  </h3>
                  <ul className="space-y-2 bg-zinc-900/50 rounded-xl p-4 border border-white/10">
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

            {/* Leadership Team Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="h-6 w-6 text-gold mr-2" />
                Leadership Team
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.leadership.map((leader, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-zinc-900/50 p-4 rounded-xl border border-white/10 hover:border-gold/30 transition-all"
                  >
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-gold mb-3">
                      <Image
                        src={leader.imageUrl || "/placeholder.svg"}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-base">{leader.name}</h4>
                    <p className={`text-sm ${leader.role === "President" ? "text-gold" : "text-maroon"}`}>
                      {leader.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="h-6 w-6 text-gold mr-2" />
                Team Members
              </h3>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/10">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            </div>

            {/* Project Gallery */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery
                  ? // If project has gallery images, use those
                    project.gallery.map((image, i) => (
                      <div key={i} className="relative h-64 overflow-hidden rounded-lg border border-white/10 group">
                        <Image
                          src={
                            image.url ||
                            `/placeholder.svg?height=300&width=400&query=cansat project image ${project.year || "/placeholder.svg"} ${i + 1}`
                          }
                          alt={image.alt || `Project image ${i + 1}`}
                          fill
                          className="gallery-image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <p className="text-white text-sm font-medium">{image.alt}</p>
                        </div>
                      </div>
                    ))
                  : // Fallback to placeholder images if no gallery is defined
                    Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="relative h-64 overflow-hidden rounded-lg border border-white/10 group">
                        <Image
                          src={`/cansat-project.png?key=alkq6&key=bwaj3&key=qnme5&key=5vt0p&key=zw4af&key=t1vpo&key=zbhwz&key=lydov&height=300&width=400&query=cansat project image ${project.year} ${i + 1}`}
                          alt={`Project image ${i + 1}`}
                          fill
                          className="gallery-image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <p className="text-white text-sm font-medium">Project Image {i + 1}</p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>

            {/* Navigation to Other Projects */}
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold mb-6 text-center">Explore Other Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {pastProjects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((otherProject, index) => (
                    <Link href={`/legacy/${otherProject.id}`} key={index} className="group">
                      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 transition-all duration-300 hover:border-gold/30">
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={otherProject.imageUrl || "/placeholder.svg"}
                            alt={otherProject.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>
                        <div className="p-4">
                          <h4 className="text-lg font-bold">{otherProject.title}</h4>
                          <p className="text-sm text-white/70 line-clamp-2 mb-3">{otherProject.description}</p>
                          <span className="text-gold text-sm font-medium">View Project →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
