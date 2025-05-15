export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  imageUrl: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "cansat-2024-competition-recap",
    title: "CanSat 2024 Competition Recap",
    excerpt: "Our team's journey through the 2024 CanSat competition, from design challenges to launch day success.",
    content: `
      # CanSat 2024 Competition Recap

      The MinneSat team recently returned from the 2024 CanSat competition in Virginia, where we competed against teams from around the world. Our satellite design, which focused on innovative sensor integration and reliable deployment mechanisms, performed exceptionally well during the launch.

      ## Design Challenges

      One of the biggest challenges we faced during the design phase was miniaturizing our sensor package while maintaining reliability. Our electrical team developed a custom PCB that integrated all required sensors while our mechanical team created a robust deployment system that protected the delicate components during the high-g launch.

      ## Launch Day

      Launch day was both exciting and nerve-wracking. After months of preparation, seeing our CanSat loaded into the rocket was a moment of pride for the entire team. The launch went smoothly, and our satellite deployed exactly as planned at the target altitude.

      ## Results

      We're proud to announce that MinneSat placed in the top 10 at the competition, with particularly high scores in the telemetry and recovery categories. This achievement reflects the dedication and hard work of all team members throughout the year.

      ## Looking Forward

      This experience has provided valuable insights that will inform our approach to next year's competition. We're already brainstorming new ideas and improvements for our 2025 design.
    `,
    author: "MinneSat Team",
    date: "June 15, 2024",
    imageUrl: "/legacy/2024/gallery_1.webp",
    tags: ["Competition", "CanSat", "Aerospace", "Engineering"],
  },
  {
    id: "new-sponsorship-announcement",
    title: "New Sponsorship Announcement",
    excerpt: "We're excited to announce our new partnership with Aerospace Innovations, supporting our 2025 mission.",
    content: `
      # New Sponsorship Announcement

      MinneSat is thrilled to announce our new partnership with Aerospace Innovations, a leading company in satellite technology and space exploration. This sponsorship will provide crucial support for our 2025 mission and beyond.

      ## About Aerospace Innovations

      Aerospace Innovations has been at the forefront of satellite technology development for over a decade. Their expertise in miniaturized propulsion systems and advanced telemetry will be invaluable to our team as we develop our next competition entry.

      ## What This Means for MinneSat

      This partnership will provide both financial support and technical mentorship. Team members will have the opportunity to work directly with Aerospace Innovations engineers, gaining industry insights and hands-on experience with cutting-edge technology.

      ## Upcoming Collaboration

      In the coming months, we'll be organizing joint workshops and technical sessions with Aerospace Innovations. These events will be open to all MinneSat members and will cover topics ranging from advanced sensor integration to space-grade materials.

      ## Join Us

      If you're interested in being part of this exciting collaboration, now is a great time to join MinneSat! Visit our Join page to learn how you can become a member and participate in these unique opportunities.
    `,
    author: "Sponsorship Team",
    date: "May 28, 2024",
    imageUrl: "/home/home_sponsors.webp",
    tags: ["Sponsorship", "Partnership", "Funding", "Opportunities"],
  },
  {
    id: "recruiting-new-team-members",
    title: "Recruiting New Team Members for 2025",
    excerpt:
      "Join MinneSat for the upcoming 2025 competition season! We're looking for passionate students in all engineering disciplines.",
    content: `
      # Recruiting New Team Members for 2025

      As we begin preparations for the 2025 competition season, MinneSat is actively recruiting new team members across all engineering disciplines. Whether you're interested in mechanical design, electrical systems, software development, or project management, there's a place for you on our team!

      ## Who We're Looking For

      We welcome students from all engineering backgrounds who are passionate about space, satellites, and hands-on project experience. No prior experience is necessary – just enthusiasm and a willingness to learn!

      ## Why Join MinneSat?

      Joining MinneSat offers numerous benefits:

      - Hands-on experience designing, building, and testing real satellite systems
      - Networking opportunities with industry professionals and sponsors
      - Resume-building project experience that employers value
      - The chance to apply classroom knowledge to real-world challenges
      - A supportive community of like-minded students

      ## How to Join

      Interested in becoming part of our team? Visit our Join page to fill out an application form. We'll be hosting information sessions throughout September where you can meet current team members and learn more about our projects.

      ## Upcoming Events

      - September 10: Information Session (Keller Hall 3-230)
      - September 15: Meet the Team Social (Coffman Memorial Union)
      - September 20: Technical Workshop: Intro to Satellite Systems

      We look forward to welcoming new members to the MinneSat family!
    `,
    author: "Recruitment Team",
    date: "August 30, 2024",
    imageUrl: "/team-competition.webp",
    tags: ["Recruitment", "Team Building", "Opportunities", "Engineering"],
  },
]
