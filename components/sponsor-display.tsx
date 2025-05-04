"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Medal, Trophy, Plus } from "lucide-react"
import { type Sponsor, getSponsorLevelClass, getSponsorBorderClass } from "@/data/sponsors"

// Update the SponsorDisplayProps interface to include more customization options
interface SponsorDisplayProps {
  sponsors: Sponsor[]
  showDescription?: boolean
  compact?: boolean
  customBgColor?: string
  customBorderWidth?: string
  customTextColor?: string
  customBorderColor?: string
  customButtonStyle?: string
}

// Update the function signature to include the new props
export function SponsorDisplay({
  sponsors,
  showDescription = true,
  compact = false,
  customBgColor,
  customBorderWidth,
  customTextColor,
  customBorderColor,
  customButtonStyle,
}: SponsorDisplayProps) {
  // Get the appropriate icon for each sponsor level
  const getSponsorLevelIcon = (level: string) => {
    switch (level) {
      case "gold":
        return <Trophy className="h-6 w-6 text-gold" />
      case "silver":
        return <Medal className="h-6 w-6 text-zinc-300" />
      case "bronze":
        return <Award className="h-6 w-6 text-amber-700" />
      default:
        return null
    }
  }

  return (
    <div className={`grid grid-cols-1 ${compact ? "md:grid-cols-3 gap-6" : "md:grid-cols-2 gap-6"}`}>
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className={`flex flex-col p-${compact ? "5" : "6"} ${customBgColor || "bg-zinc-800/70"} backdrop-blur-sm rounded-2xl ${customBorderWidth || "border"} ${customBorderColor || getSponsorBorderClass(sponsor.level, sponsor.isPlaceholder)} transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-gold/20 h-full relative overflow-hidden`}
        >
          {/* Add gradient overlay similar to team cards */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>

          <div className="flex-1 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="relative h-16 w-40">
                {sponsor.isPlaceholder ? (
                  <Image
                    src="/sponsors/your-logo-here.webp"
                    alt="Your Logo Here"
                    fill
                    className="object-contain opacity-60"
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={sponsor.imageUrl || "/placeholder.svg"}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                )}
              </div>
              <div className={`rounded-full px-3 py-1 flex items-center gap-2 ${getSponsorLevelClass(sponsor.level)}`}>
                {getSponsorLevelIcon(sponsor.level)}
                <span className="text-sm font-medium capitalize">{sponsor.level}</span>
              </div>
            </div>
            <h3 className={`${compact ? "text-lg" : "text-xl"} font-bold mb-2 ${customTextColor || "text-white"}`}>
              {sponsor.name}
            </h3>
            {showDescription && <p className={`${customTextColor || "text-white/70"} mb-4`}>{sponsor.description}</p>}
          </div>
          <div className="mt-auto pt-4 relative z-10">
            {sponsor.isPlaceholder ? (
              <Button
                className={`${customButtonStyle || `bg-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"} hover:bg-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"}/80 ${sponsor.level === "gold" || sponsor.level === "silver" ? "text-black" : "text-white"}`} w-full group`}
              >
                <Link href="/sponsors/info" className="flex items-center justify-center w-full">
                  <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                  Sponsor Us
                </Link>
              </Button>
            ) : (
              <Button
                variant="outline"
                className={
                  customButtonStyle ||
                  `border-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"}/30 text-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"} hover:bg-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"}/10 w-full`
                }
                onClick={() => window.open(sponsor.website, "_blank")}
              >
                Visit Website
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
