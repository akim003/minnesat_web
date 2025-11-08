export interface Sponsor {
  name: string
  level: "gold" | "silver" | "bronze"
  imageUrl?: string
  website?: string
  description?: string
  isPlaceholder?: boolean
}

export const sponsors: Sponsor[] = [
  {
    name: "Cummins",
    level: "silver",
    imageUrl: "/sponsors/cummins.webp",
    website: "https://www.cummins.com",
    description:
      "A global power technology leader designing, manufacturing, and distributing engines and related technologies.",
  },
  {
    name: "Collins Aerospace",
    level: "gold",
    imageUrl: "/sponsors/collins-aerospace.webp",
    website: "https://www.collinsaerospace.com",
    description: "Providing intelligent solutions for the aerospace and defense industry.",
  },
  {
    name: "University of Minnesota College of Science and Engineering",
    level: "gold",
    imageUrl: "/sponsors/umn-cse.webp",
    website: "https://cse.umn.edu",
    description: "Supporting the next generation of engineers and scientists.",
  },
]

export const placeholderSponsors: Sponsor[] = [
  {
    name: "Your Company Here",
    level: "gold",
    imageUrl: "/sponsors/your-logo-here.webp",
    website: "/sponsors/info",
    description: "Partner with us to support aerospace engineering education and innovation.",
    isPlaceholder: true,
  },
  {
    name: "Your Company Here",
    level: "silver",
    imageUrl: "/sponsors/your-logo-here.webp",
    website: "/sponsors/info",
    description: "Join our mission to advance space technology and education.",
    isPlaceholder: true,
  },
  {
    name: "Your Company Here",
    level: "bronze",
    imageUrl: "/sponsors/your-logo-here.webp",
    website: "/sponsors/info",
    description: "Support the future of aerospace engineering at the University of Minnesota.",
    isPlaceholder: true,
  },
]

// Helper functions for styling
export const getSponsorLevelClass = (level: string) => {
  switch (level) {
    case "gold":
      return "bg-gold/10 text-gold border-gold/30"
    case "silver":
      return "bg-zinc-300/10 text-zinc-300 border-zinc-300/30"
    case "bronze":
      return "bg-amber-700/10 text-amber-700 border-amber-700/30"
    default:
      return "bg-white/10 text-white border-white/30"
  }
}

export const getSponsorBorderClass = (level: string, isPlaceholder?: boolean) => {
  const baseClass = isPlaceholder ? "border-dashed" : ""
  switch (level) {
    case "gold":
      return `${baseClass} border-gold/30 hover:border-gold/50`
    case "silver":
      return `${baseClass} border-zinc-300/30 hover:border-zinc-300/50`
    case "bronze":
      return `${baseClass} border-amber-700/30 hover:border-amber-700/50`
    default:
      return `${baseClass} border-white/30 hover:border-white/50`
  }
}
