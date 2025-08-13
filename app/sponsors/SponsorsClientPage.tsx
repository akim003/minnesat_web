"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Medal, Trophy } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { sponsors, placeholderSponsors } from "@/data/sponsors"
import { SponsorDisplay } from "@/components/sponsor-display"

export default function SponsorsClientPage() {
  // Combine real sponsors with placeholders
  const goldSponsors = [
    ...sponsors.filter((sponsor) => sponsor.level === "gold"),
    ...placeholderSponsors.filter((sponsor) => sponsor.level === "gold"),
  ]

  const silverSponsors = [
    ...sponsors.filter((sponsor) => sponsor.level === "silver"),
    ...placeholderSponsors.filter((sponsor) => sponsor.level === "silver"),
  ]

  const bronzeSponsors = [
    ...sponsors.filter((sponsor) => sponsor.level === "bronze"),
    ...placeholderSponsors.filter((sponsor) => sponsor.level === "bronze"),
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
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
                >
                  <Link href="/sponsors/info">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <Trophy className="h-8 w-8 text-gold" />
                <h2 className="text-2xl font-bold">Gold Sponsors</h2>
              </div>
              {/* Gold sponsors - 2 per row */}
              <SponsorDisplay sponsors={goldSponsors} />
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <Medal className="h-8 w-8 text-zinc-300" />
                <h2 className="text-2xl font-bold">Silver Sponsors</h2>
              </div>
              {/* Silver sponsors - 3 per row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {silverSponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className={`flex flex-col p-6 bg-zinc-900 rounded-2xl border ${
                      sponsor.isPlaceholder
                        ? "border-zinc-300/30 border-dashed hover:border-zinc-300/70"
                        : "border-zinc-300/30 hover:border-zinc-300/50"
                    } transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 h-full`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative h-16 w-40">
                          {sponsor.isPlaceholder ? (
                            <Image
                              src="/sponsors/your-logo-here.webp"
                              alt="Your Logo Here"
                              fill
                              className="object-contain opacity-60"
                            />
                          ) : (
                            <Image
                              src={sponsor.imageUrl || "/placeholder.svg"}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          )}
                        </div>
                        <div className="rounded-full px-3 py-1 flex items-center gap-2 bg-zinc-300/10 text-zinc-300 border-zinc-300/30">
                          <Medal className="h-6 w-6 text-zinc-300" />
                          <span className="text-sm font-medium capitalize">Silver</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
                      <p className="text-white/70 mb-4">{sponsor.description}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      {sponsor.isPlaceholder ? (
                        <Button
                          className="bg-zinc-300 hover:bg-zinc-300/80 text-black w-full group"
                          onClick={() => {
                            window.location.href = "/sponsors/info#silver-tier"
                          }}
                        >
                          <div className="flex items-center justify-center w-full">
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
                              className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                            Sponsor Us
                          </div>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="border-zinc-300/30 text-zinc-300 hover:bg-zinc-300/10 w-full bg-transparent"
                          onClick={() => window.open(sponsor.website, "_blank")}
                        >
                          Visit Website
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-8">
                <Award className="h-8 w-8 text-amber-700" />
                <h2 className="text-2xl font-bold">Bronze Sponsors</h2>
              </div>
              {/* Bronze sponsors - 3 per row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bronzeSponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className={`flex flex-col p-6 bg-zinc-900 rounded-2xl border ${
                      sponsor.isPlaceholder
                        ? "border-amber-700/30 border-dashed hover:border-amber-700/70"
                        : "border-amber-700/30 hover:border-amber-700/50"
                    } transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 h-full`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative h-16 w-40">
                          {sponsor.isPlaceholder ? (
                            <Image
                              src="/sponsors/your-logo-here.webp"
                              alt="Your Logo Here"
                              fill
                              className="object-contain opacity-60"
                            />
                          ) : (
                            <Image
                              src={sponsor.imageUrl || "/placeholder.svg"}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          )}
                        </div>
                        <div className="rounded-full px-3 py-1 flex items-center gap-2 bg-amber-700/10 text-amber-700 border-amber-700/30">
                          <Award className="h-6 w-6 text-amber-700" />
                          <span className="text-sm font-medium capitalize">Bronze</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
                      <p className="text-white/70 mb-4">{sponsor.description}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      {sponsor.isPlaceholder ? (
                        <Button
                          className="bg-amber-700 hover:bg-amber-700/80 text-white w-full group"
                          onClick={() => {
                            window.location.href = "/sponsors/info#bronze-tier"
                          }}
                        >
                          <div className="flex items-center justify-center w-full">
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
                              className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                            Sponsor Us
                          </div>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="border-amber-700/30 text-amber-700 hover:bg-amber-700/10 w-full bg-transparent"
                          onClick={() => window.open(sponsor.website, "_blank")}
                        >
                          Visit Website
                        </Button>
                      )}
                    </div>
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
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
                >
                  <Link href="/sponsors/info">Learn More</Link>
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
