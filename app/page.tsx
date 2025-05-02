import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Linkedin, Mail } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { sponsors } from "@/data/sponsors"
import { SponsorDisplay } from "@/components/sponsor-display"

// Sample legacy projects data for the homepage preview
const legacyProjects = [
  {
    id: "2025",
    title: "CanSat 2025 Project",
    description: "Our latest competition entry featuring advanced telemetry and autonomous landing systems.",
    imageUrl: "/earth-orbit-blueprint.png",
    year: "2025",
  },
  {
    id: "2024",
    title: "CanSat 2024 Project",
    description: "Award-winning design with innovative sensor array and data collection capabilities.",
    imageUrl: "/legacy/CanSat2024_Icon.jpg",
    year: "2024",
  },
]

export default function Home() {
  // Get only real (non-placeholder) sponsors for the home page
  const realSponsors = sponsors.filter((sponsor) => !sponsor.isPlaceholder)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[100vh] overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10"></div>
          <Image
            src="/header.jpg"
            alt="CanSat Launch"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black"></div>
          <div className="relative z-20 flex h-full items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md mb-4">
                  University of Minnesota
                </div>
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block">MinneSat</span>
                  <span className="mt-2 block text-gold">CanSat Team</span>
                </h1>
                <p className="max-w-[700px] text-white/80 md:text-xl">
                  Designing, building, and launching space systems for the future
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-maroon hover:bg-maroon/90 text-white rounded-full px-8">Learn More</Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                    Join Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>

        {/* About Section - Updated with new background image */}
        <section id="about" className="py-24 relative">
          {/* Background image with proper styling */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/home/home_about_us.jpg"
              alt="Rocket launch background"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 z-1"></div>

          {/* Content with proper z-index */}
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block rounded-full bg-maroon/20 px-3 py-1 text-sm text-maroon mb-4">About Us</div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">About MinneSat</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="text-white/70 mb-6">
                CanSat is an annual design-build-launch competition focused on space-related projects, organized by the
                American Astronautical Society (AAS). Students are involved in the full end-to-end life cycle of a
                complex engineering project—from initial design through to integration, testing, and final operation.
              </p>
              <p className="text-white/70 mb-6">
                The competition is open to university teams from around the world, and the University of Minnesota is
                proud to have a team in this competition. Each team designs and builds a space-type system, following
                the guidelines provided by the competition.
              </p>
              <div className="flex justify-center mt-8">
                <Button className="bg-maroon hover:bg-maroon/90 rounded-full px-8">
                  Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Updated with background image */}
        <section id="team" className="py-24 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/team-competition.jpeg"
              alt="Team at competition"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 z-1"></div>

          {/* Content with proper z-index */}
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block rounded-full bg-gold/20 px-3 py-1 text-sm text-gold mb-4">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="max-w-3xl text-white/70">
                Our team consists of dedicated students from various engineering disciplines who work together to
                design, build, and launch our CanSat projects.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group">
                  <div className="relative h-[350px] overflow-hidden rounded-2xl bg-zinc-800/70 backdrop-blur-sm p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-maroon/5 border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                    <div className="relative z-20 flex h-full flex-col">
                      <div className="flex-1">
                        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-zinc-700 mx-auto">
                          <Image
                            src={`/focused-engineer.png?key=q27iz&key=dekrr&height=300&width=300&query=engineering student portrait ${i}`}
                            alt={`Team Member ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-auto">
                        <h3 className="text-xl font-bold">Team Member Name</h3>
                        <p className="text-gold font-medium">Position / Role</p>
                        <p className="text-white/60 text-sm mt-2">
                          Brief description about the team member and their contribution to the project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold/10 rounded-full px-8">
                View All Team Members
              </Button>
            </div>
          </div>
        </section>

        {/* Legacy Section - Updated with new background image */}
        <section id="current-projects" className="py-24 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/home/home_legacy.jpg"
              alt="Team setting up launch rail"
              fill
              className="object-cover opacity-35"
              priority
            />
          </div>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 z-1"></div>

          {/* Content with proper z-index */}
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block rounded-full bg-maroon/20 px-3 py-1 text-sm text-maroon mb-4">Legacy</div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Legacy</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="max-w-3xl text-white/70">
                Explore our CanSat competition projects from 2022 to 2025, showcasing our team's innovation and
                engineering excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {legacyProjects.map((project) => (
                <Link href={`/legacy/${project.id}`} key={project.id} className="group">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-maroon/10">
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="project-image transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Reduced opacity of the gradient overlay from black/60 to black/30 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
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
            <div className="flex justify-center mt-12">
              <Button
                asChild
                variant="outline"
                className="border-maroon/50 text-maroon hover:bg-maroon/10 rounded-full px-8"
              >
                <Link href="/legacy">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sponsors Section - Updated with new background image */}
        <section id="sponsors" className="py-24 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/home/home_sponsors.jpeg"
              alt="University of Minnesota campus and Minneapolis skyline"
              fill
              className="object-cover opacity-25"
              priority
            />
          </div>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 z-1"></div>

          {/* Content with proper z-index */}
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block rounded-full bg-gold/20 px-3 py-1 text-sm text-gold mb-4">Our Partners</div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Sponsors</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="max-w-3xl text-white/70">
                We are grateful for the support of our sponsors who make our participation in the CanSat competition
                possible.
              </p>
            </div>

            {/* Display current sponsors from the shared data with updated styling */}
            <SponsorDisplay
              sponsors={realSponsors}
              showDescription={false}
              compact={true}
              customBgColor="bg-[#454446]/80"
              customBorderWidth="border-2"
              customTextColor="text-white"
              customBorderColor="border-gold/30"
              customButtonStyle="bg-black hover:bg-black/90 text-gold"
            />

            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold mb-4">Become a Sponsor</h3>
              <p className="max-w-2xl mx-auto text-white/70 mb-6">
                Interested in supporting our team? We are always looking for new sponsors to help us reach our goals.
              </p>
              <Button className="bg-maroon hover:bg-maroon/90 rounded-full px-8">
                <Link href="/sponsors/info">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-block rounded-full bg-maroon/20 px-3 py-1 text-sm text-maroon mb-4">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
                <div className="w-20 h-1 bg-gold mb-6"></div>
                <p className="text-white/70 mb-6">
                  Have questions about our team or interested in joining? We'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gold mr-3" />
                    <span className="text-white/80">minnesat@umn.edu</span>
                  </div>
                  <div className="flex items-center">
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
                      className="h-5 w-5 text-gold mr-3"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-white/80">Keller Hall, University of Minnesota, Minneapolis, MN</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.linkedin.com/company/minnesat"
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/80">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/80">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white/80">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/80">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-maroon hover:bg-maroon/90 rounded-full">Send Message</Button>
                </form>
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
