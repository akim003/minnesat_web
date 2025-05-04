import Image from "next/image"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "MinneSat - Join Our Team",
  description: "Join the University of Minnesota's CanSat team and help build the future of space systems",
}

export default function JoinPage() {
  // Array of companies where alumni work - updated with BAE Systems
  const alumniCompanies = [
    { name: "Black River Systems Company", logo: "/alumni/logos/black_river_systems_logo.webp" },
    { name: "MIT", logo: "/alumni/logos/mit_logo.webp" },
    { name: "Airbus Group", logo: "/alumni/logos/airbusgroup_logo.webp" },
    { name: "Honeywell", logo: "/alumni/logos/honeywell_logo.webp" },
    { name: "Beta", logo: "/alumni/logos/Beta_logo.webp" },
    { name: "SpaceX", logo: "/alumni/logos/spacex_logo.webp" },
    { name: "Systems Planning & Analysis", logo: "/alumni/logos/SPA_logo.webp" },
    { name: "BAE Systems", logo: "/alumni/logos/bae_systems_logo.webp" },
  ]

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
                <Image src="/team-competition.jpeg" alt="MinneSat Team at Competition" fill className="object-cover" />
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
                        Gain practical experience designing, building, and testing real aerospace systems.
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
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8 text-center">Subteams</h2>
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
                    Design and build the physical structure, deployment mechanisms, and decent control systems.
                  </p>
                  <p className="text-gold font-medium">Skills: CAD, 3D Printing, Iterative Prototyping</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-2">Electrical Team</h3>
                  <p className="text-white/70 mb-4">
                    Create satellite avionics, sensor integration, and power management systems.
                  </p>
                  <p className="text-gold font-medium">Skills: PCB Design, Soldering, Sensors Testing</p>
                </div>
              </div>
            </div>

            <div className="mt-20 bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-center">How to Join</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-maroon/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-maroon">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Come to a Meeting</h3>
                  <p className="text-white/70 text-sm">Learn more about the different subteams and meet the team.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-maroon/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-maroon">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Choose a Subteam</h3>
                  <p className="text-white/70 text-sm">Meet with team leads to discuss your interests</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-maroon/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-maroon">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Team Assignment</h3>
                  <p className="text-white/70 text-sm">Get placed on a team based on your skills and interests</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-maroon/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-maroon">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Start Contributing</h3>
                  <p className="text-white/70 text-sm">Begin working on the current CanSat project</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-center">Meeting Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Meeting Times Card */}
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-white/5 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-maroon/20 p-3 rounded-full">
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
                        className="h-5 w-5 text-maroon"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold">Meeting Times</h4>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <p className="text-white/70 mb-1">General Meetings:</p>
                      <p className="text-white/90 font-medium">Wednesdays, 6:45 PM - 7:30 PM</p>
                    </div>
                    <div>
                      <p className="text-white/70 mb-1">Workshop Time:</p>
                      <p className="text-white/90 font-medium">Wednesday, 7:30 PM - 8:30 PM</p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-white/5 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-maroon/20 p-3 rounded-full">
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
                        className="h-5 w-5 text-maroon"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold">Location</h4>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <p className="text-white/70 mb-1">General Meeting Room:</p>
                      <p className="text-white/90 font-medium">Akerman Hall, Room 211</p>
                    </div>
                    <div>
                      <p className="text-white/70 mb-1">Workshop Room</p>
                      <p className="text-white/90">Mechanical Engineering Building, Anderson Labs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-white/70">
                  Prospective new members are welcome to attend any general meeting. No prior experience necessary!
                </p>
              </div>
            </div>

            {/* Alumni Companies Section */}
            <div className="mt-20">
              <div className="flex flex-col items-center text-center mb-10">
                <div className="inline-block rounded-full bg-gold/20 px-3 py-1 text-sm text-gold mb-4">
                  Career Pathways
                </div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">Where Our Alumni Work</h2>
                <div className="w-20 h-1 bg-gold mb-6"></div>
                <p className="max-w-3xl text-white/70">
                  MinneSat alumni have gone on to work at some of the most prestigious aerospace and technology
                  companies in the industry. The skills and experience gained through our program have helped launch
                  successful careers across the aerospace sector.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {alumniCompanies.map((company, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800/30 p-4 rounded-xl border border-white/5 flex items-center justify-center h-24 transition-all duration-300 hover:border-gold/30 hover:bg-zinc-800/50"
                  >
                    <div className="relative h-12 w-full">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
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
