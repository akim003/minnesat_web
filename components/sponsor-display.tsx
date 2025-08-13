"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Medal, Trophy, Plus } from "lucide-react"
import { type Sponsor, getSponsorLevelClass, getSponsorBorderClass } from "@/data/sponsors"
import { useState } from "react"

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
  customBorderColor,
  customButtonStyle,
}: SponsorDisplayProps) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const customTextColor = "" // Declare customTextColor variable

  // Get the appropriate icon for each sponsor level
  const getSponsorLevelIcon = (level: string) => {
    switch (level) {
      case "gold":
        return <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
      case "silver":
        return <Medal className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-300" />
      case "bronze":
        return <Award className="h-5 w-5 sm:h-6 sm:w-6 text-amber-700" />
      default:
        return null
    }
  }

  // Handle direct navigation to sponsor info with anchor
  const handleSponsorInfoClick = (level: string) => {
    window.location.href = `/sponsors/info#${level}-tier`
  }

  if (sponsors.length === 0) {
    return null
  }

  return (
    <div className={`grid grid-cols-1 gap-4 sm:gap-6 ${compact ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className={`flex flex-col p-4 sm:p-6 ${customBgColor || "bg-zinc-800/70"} backdrop-blur-sm rounded-2xl ${customBorderWidth || "border"} ${customBorderColor || getSponsorBorderClass(sponsor.level, sponsor.isPlaceholder)} transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-gold/20 h-full relative overflow-hidden`}
        >
          {/* Add gradient overlay similar to team cards */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-black/90 z-0"></div>

          <div className="flex-1 relative z-10">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="relative h-12 sm:h-16 w-32 sm:w-40">
                {sponsor.isPlaceholder ? (
                  <div className="w-full h-full flex items-center justify-start">
                    <Image
                      src="/sponsors/your-logo-here.webp"
                      alt="Your Logo Here"
                      width={120}
                      height={60}
                      className="object-contain opacity-60 max-h-full"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-start">
                    {!imageErrors.has(sponsor.name) ? (
                      <Image
                        src={sponsor.imageUrl || "/placeholder.svg"}
                        alt={sponsor.name}
                        width={120}
                        height={60}
                        className="object-contain max-h-full"
                        loading="lazy"
                        onError={() => setImageErrors((prev) => new Set(prev).add(sponsor.name))}
                      />
                    ) : (
                      <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                        <span className="text-white/60 text-sm font-medium">{sponsor.name}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div
                className={`rounded-full px-2 py-1 sm:px-3 sm:py-1 flex items-center gap-1 sm:gap-2 ${getSponsorLevelClass(sponsor.level).replace(/border-[^/\s]+\/\d+/g, "")}`}
              >
                {getSponsorLevelIcon(sponsor.level)}
                <span className="text-xs sm:text-sm font-medium capitalize">{sponsor.level}</span>
              </div>
            </div>
            <h3 className={`text-base sm:text-xl font-bold mb-2 ${customTextColor || "text-white"} line-clamp-2`}>
              {sponsor.name}
            </h3>
            {showDescription && (
              <p
                className={`${customTextColor || "text-white/70"} text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3`}
              >
                {sponsor.description}
              </p>
            )}
          </div>
          <div className="mt-auto pt-3 sm:pt-4 relative z-10 w-full">
            {sponsor.isPlaceholder ? (
              <Button
                className={`${customButtonStyle || `bg-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"} hover:bg-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"}/80 ${sponsor.level === "gold" || sponsor.level === "silver" ? "text-black" : "text-white"}`} w-full group text-sm sm:text-base py-1 sm:py-2`}
                onClick={() => handleSponsorInfoClick(sponsor.level)}
              >
                <div className="flex items-center justify-center w-full">
                  <Plus className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-90 transition-transform duration-300" />
                  Sponsor Us
                </div>
              </Button>
            ) : (
              <Button
                variant="outline"
                className={
                  customButtonStyle ||
                  `border-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"}/30 text-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"} hover:bg-${sponsor.level === "gold" ? "gold" : sponsor.level === "silver" ? "zinc-300" : "amber-700"}/10 w-full text-sm sm:text-base py-1 sm:py-2`
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
