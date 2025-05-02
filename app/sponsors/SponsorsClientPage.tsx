"use client"
import Link from "next/link"
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
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                  <Link href="/sponsors/info">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <Trophy className="h-8 w-8 text-gold" />
                <h2 className="text-2xl font-bold">Gold Sponsors</h2>
              </div>
              <SponsorDisplay sponsors={goldSponsors} />
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <Medal className="h-8 w-8 text-zinc-300" />
                <h2 className="text-2xl font-bold">Silver Sponsors</h2>
              </div>
              <SponsorDisplay sponsors={silverSponsors} />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-8">
                <Award className="h-8 w-8 text-amber-700" />
                <h2 className="text-2xl font-bold">Bronze Sponsors</h2>
              </div>
              <SponsorDisplay sponsors={bronzeSponsors} />
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
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
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
