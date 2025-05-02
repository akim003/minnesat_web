import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Medal, Trophy, Check } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "MinneSat - Sponsorship Information",
  description: "Learn about sponsoring the University of Minnesota's CanSat team",
}

export default function SponsorshipInfoPage() {
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
                Sponsorship Information
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Support MinneSat</h1>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="max-w-3xl text-white/70">
                Learn about our sponsorship tiers and the benefits of supporting the University of Minnesota's CanSat
                team. Your contribution helps us design, build, and launch innovative space systems.
              </p>
            </div>

            {/* Why Sponsor Section */}
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 mb-16">
              <h2 className="text-2xl font-bold mb-4">Why Sponsor MinneSat?</h2>
              <p className="text-white/70 mb-6">
                By sponsoring MinneSat, you're investing in the future of aerospace engineering and supporting students
                who are passionate about space technology. Your support enables us to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-white/5">
                  <h3 className="text-xl font-bold mb-3">Develop Skills</h3>
                  <p className="text-white/70">
                    Help students gain hands-on experience in designing, building, and testing space systems, preparing
                    them for careers in aerospace.
                  </p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-white/5">
                  <h3 className="text-xl font-bold mb-3">Compete Nationally</h3>
                  <p className="text-white/70">
                    Enable our team to participate in the prestigious CanSat competition, representing the University of
                    Minnesota on a national stage.
                  </p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-white/5">
                  <h3 className="text-xl font-bold mb-3">Foster Innovation</h3>
                  <p className="text-white/70">
                    Support creative problem-solving and engineering innovation as students tackle complex challenges in
                    space system design.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-maroon hover:bg-maroon/90 rounded-full px-8">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Sponsorship Tiers */}
            <h2 className="text-3xl font-bold text-center mb-12">Sponsorship Tiers</h2>

            {/* Gold Tier */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Trophy className="h-8 w-8 text-gold" />
                </div>
                <h2 className="text-2xl font-bold">Gold Sponsor - $2,000+</h2>
              </div>
              <div className="bg-zinc-900/30 border border-gold/20 rounded-2xl p-8 mb-6">
                <p className="text-white/70 mb-6">
                  Gold sponsors receive our highest level of recognition and benefits. Your significant contribution
                  enables us to purchase critical components, travel to competitions, and develop advanced systems.
                </p>
                <h3 className="text-xl font-bold mb-4">Benefits Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <p className="text-white/80">Prominent logo placement on our competition rocket</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <p className="text-white/80">Featured placement on team shirts and banners</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <p className="text-white/80">Large logo on our website with link to your site</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <p className="text-white/80">Recognition in all presentations and reports</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <p className="text-white/80">Invitation to team events and demonstrations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <p className="text-white/80">Access to team members for recruitment opportunities</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <p className="text-white/80">Annual report on team achievements and progress</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <p className="text-white/80">Opportunity to display company materials at events</p>
                  </div>
                </div>
                <Button className="bg-gold hover:bg-gold/80 text-black w-full sm:w-auto">
                  <Link href="/contact">Become a Gold Sponsor</Link>
                </Button>
              </div>
            </div>

            {/* Silver Tier */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-zinc-300/20 p-3 rounded-full">
                  <Medal className="h-8 w-8 text-zinc-300" />
                </div>
                <h2 className="text-2xl font-bold">Silver Sponsor - $1,000+</h2>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-300/20 rounded-2xl p-8 mb-6">
                <p className="text-white/70 mb-6">
                  Silver sponsors provide essential support that helps us acquire materials and equipment needed for our
                  CanSat projects. Your contribution is vital to our success.
                </p>
                <h3 className="text-xl font-bold mb-4">Benefits Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-zinc-300 mt-0.5" />
                    <p className="text-white/80">Logo placement on our competition rocket</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-zinc-300 mt-0.5" />
                    <p className="text-white/80">Logo on team shirts and banners</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-zinc-300 mt-0.5" />
                    <p className="text-white/80">Medium logo on our website with link to your site</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-zinc-300 mt-0.5" />
                    <p className="text-white/80">Recognition in competition reports</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-zinc-300 mt-0.5" />
                    <p className="text-white/80">Invitation to team demonstrations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-zinc-300 mt-0.5" />
                    <p className="text-white/80">Annual report on team achievements</p>
                  </div>
                </div>
                <Button className="bg-zinc-300 hover:bg-zinc-300/80 text-black w-full sm:w-auto">
                  <Link href="/contact">Become a Silver Sponsor</Link>
                </Button>
              </div>
            </div>

            {/* Bronze Tier */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-700/20 p-3 rounded-full">
                  <Award className="h-8 w-8 text-amber-700" />
                </div>
                <h2 className="text-2xl font-bold">Bronze Sponsor - $500+</h2>
              </div>
              <div className="bg-zinc-900/30 border border-amber-700/20 rounded-2xl p-8 mb-6">
                <p className="text-white/70 mb-6">
                  Bronze sponsors help us cover essential costs and provide valuable support to our team. Every
                  contribution makes a difference in our ability to compete and succeed.
                </p>
                <h3 className="text-xl font-bold mb-4">Benefits Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-700 mt-0.5" />
                    <p className="text-white/80">Small logo on our competition rocket</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-700 mt-0.5" />
                    <p className="text-white/80">Name listed on team banners</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-700 mt-0.5" />
                    <p className="text-white/80">Small logo on our website</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-700 mt-0.5" />
                    <p className="text-white/80">Recognition in competition reports</p>
                  </div>
                </div>
                <Button className="bg-amber-700 hover:bg-amber-700/80 text-white w-full sm:w-auto">
                  <Link href="/contact">Become a Bronze Sponsor</Link>
                </Button>
              </div>
            </div>

            {/* Custom Sponsorship */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold">Custom Sponsorship</h2>
              </div>
              <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 mb-6">
                <p className="text-white/70 mb-6">
                  We understand that every organization is unique. If you're interested in supporting MinneSat in a way
                  that doesn't fit our standard tiers, we're happy to discuss custom sponsorship arrangements that align
                  with your goals and resources.
                </p>
                <p className="text-white/70 mb-6">
                  Custom sponsorships can include in-kind donations of equipment, materials, or services, as well as
                  mentorship opportunities, facility access, or other forms of support.
                </p>
                <Button className="bg-maroon hover:bg-maroon/90 text-white w-full sm:w-auto">
                  <Link href="/contact">Discuss Custom Sponsorship</Link>
                </Button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Support the Next Generation of Aerospace Engineers?</h2>
              <p className="max-w-2xl mx-auto text-white/70 mb-6">
                Your sponsorship makes a real difference in the educational experience of our team members and helps
                advance innovation in space technology. Contact us today to discuss how you can become a MinneSat
                sponsor.
              </p>
              <Button className="bg-maroon hover:bg-maroon/90 rounded-full px-8">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
