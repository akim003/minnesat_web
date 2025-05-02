"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

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
      <Navbar />

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
      <Footer />
    </div>
  )
}
