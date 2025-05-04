// Sponsor data with level information
export interface Sponsor {
  name: string
  description: string
  level: "gold" | "silver" | "bronze"
  imageUrl: string
  website: string
  isPlaceholder: boolean
}

export const sponsors: Sponsor[] = [
  {
    name: "Collins Aerospace",
    description:
      "A Raytheon Technologies business, Collins Aerospace is a leader in technologically advanced and intelligent solutions for the global aerospace and defense industry.",
    level: "gold",
    imageUrl: "/sponsors/collins-aerospace.webp",
    website: "https://www.collinsaerospace.com/",
    isPlaceholder: false,
  },
  {
    name: "University of Minnesota College of Science & Engineering",
    description:
      "The College of Science & Engineering at the University of Minnesota, supporting innovation and education in engineering and scientific disciplines.",
    level: "gold",
    imageUrl: "/sponsors/umn-cse.webp",
    website: "https://cse.umn.edu/",
    isPlaceholder: false,
  },
  {
    name: "Northrop Grumman",
    description:
      "A leading global aerospace and defense technology company, delivering innovative systems, products and solutions to government and commercial customers worldwide.",
    level: "silver",
    imageUrl: "/sponsors/northrop-grumman.webp",
    website: "https://www.northropgrumman.com/",
    isPlaceholder: false,
  },
]

// Placeholder sponsor cards
export const placeholderSponsors = [
  {
    name: "Join Our Silver Sponsors",
    description:
      "Partner with us to support innovation and visibility. Your contribution helps us acquire essential components and materials.",
    level: "silver",
    imageUrl: "/sponsors/your-logo-here.webp",
    isPlaceholder: true,
  },
  {
    name: "Join Our Silver Sponsors",
    description:
      "Support the next generation of aerospace engineers and gain recognition among future industry professionals.",
    level: "silver",
    imageUrl: "/sponsors/your-logo-here.webp",
    isPlaceholder: true,
  },
  {
    name: "Join Our Bronze Sponsors",
    description: "Every contribution matters! Join our bronze tier to help students achieve their engineering dreams.",
    level: "bronze",
    imageUrl: "/sponsors/your-logo-here.webp",
    isPlaceholder: true,
  },
  {
    name: "Join Our Bronze Sponsors",
    description: "Support student innovation and help us reach new heights in aerospace engineering education.",
    level: "bronze",
    imageUrl: "/sponsors/your-logo-here.webp",
    isPlaceholder: true,
  },
  {
    name: "Join Our Bronze Sponsors",
    description: "Be part of our journey to design and build innovative space systems for the CanSat competition.",
    level: "bronze",
    imageUrl: "/sponsors/your-logo-here.webp",
    isPlaceholder: true,
  },
]

// Helper function to get the appropriate icon for each sponsor level
export const getSponsorLevelIcon = (level: string) => {
  switch (level) {
    case "gold":
      return "trophy"
    case "silver":
      return "medal"
    case "bronze":
      return "award"
    default:
      return null
  }
}

// Helper function to get the appropriate color class for each sponsor level
export const getSponsorLevelClass = (level: string) => {
  switch (level) {
    case "gold":
      return "bg-gold/10 text-gold"
    case "silver":
      return "bg-zinc-300/10 text-zinc-300"
    case "bronze":
      return "bg-amber-700/10 text-amber-700"
    default:
      return ""
  }
}

// Helper function to get the appropriate border color class for each sponsor level
export const getSponsorBorderClass = (level: string, isPlaceholder: boolean) => {
  if (!isPlaceholder) {
    switch (level) {
      case "gold":
        return "border-gold/30 hover:border-gold/50"
      case "silver":
        return "border-zinc-300/30 hover:border-zinc-300/50"
      case "bronze":
        return "border-amber-700/30 hover:border-amber-700/50"
      default:
        return "border-white/30 hover:border-white/50"
    }
  } else {
    switch (level) {
      case "gold":
        return "border-gold/30 border-dashed hover:border-gold/70"
      case "silver":
        return "border-zinc-300/30 border-dashed hover:border-zinc-300/70"
      case "bronze":
        return "border-amber-700/30 border-dashed hover:border-amber-700/70"
      default:
        return "border-white/30 border-dashed hover:border-white/70"
    }
  }
}
