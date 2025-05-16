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
    id: "top-engineering-clubs-university-of-minnesota",
    title: "Top Engineering Clubs at the University of Minnesota",
    excerpt:
      "Discover the most innovative student engineering teams at UMN, from CanSat and rockets to solar vehicles and Formula SAE racing.",
    content: `
      # Top Engineering Clubs at the University of Minnesota

      The University of Minnesota is home to some of the most ambitious and innovative student engineering teams in the country. Whether you're into satellites, rockets, race cars, or solar-powered vehicles, there's a place for you to learn, build, and compete. Here's a look at five standout engineering clubs on campus — including our very own MinneSat team.

      ## MinneSat – The CanSat Competition Team

      <a href="https://umn-minnesat.org/join" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-gold/80 transition-colors">MinneSat</a> is the University of Minnesota's official CanSat competition team, and we're proud to have placed 13th internationally at the 2024 AAS CanSat Competition.

      In this challenge, teams build a canister-sized satellite that simulates the experience of being deployed from a rocket. Our 2024 mission required a custom-built heat shield to safely slow descent during reentry — a true test of real-world aerospace engineering.

      With a travel team of 10 and about 20 active members total, we offer hands-on experience in:

      - Soldering and PCB design (Electrical Team)
      - Flight software and telemetry (Software Team)
      - CAD and structural prototyping (Mechanical Team)

      Whether you're new to engineering or looking to sharpen your skills in a competitive setting, MinneSat is a perfect launchpad.

      ## Solar Vehicle Project (SVP)

      Founded in 1990, the <a href="https://umnsvp.org/" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-gold/80 transition-colors">UMN Solar Vehicle Project</a> has built 15 solar-powered vehicles, racing on three continents in over 30 competitions. Their car Freya won the 2022 American Solar Challenge MOV Class, while Gaia placed 2nd in the 2023 Bridgestone World Solar Challenge — the highest finish by any American team that year.

      Notable 2023 achievements:

      - 2nd place in the CSIRO Cruiser Class
      - Winner of the Eberle-Selwood Arrow Cup

      UMNSVP continues to lead the global solar racing scene through engineering excellence, sustainability, and teamwork.

      ## Gopher Motorsports – Formula SAE

      <a href="https://gophermotorsports.com/" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-gold/80 transition-colors">Gopher Motorsports</a> builds two cars each year — an internal combustion vehicle and an electric vehicle — to compete in the global Formula SAE series. Their mission is to design, market, and race a single-seat, open-wheel car for weekend autocrossers.

      Why join?

      - Ranked in the Top 10 Formula SAE teams nationwide
      - Open to all majors — from ME to CS to finance
      - Huge opportunities in manufacturing, embedded systems, and team logistics

      Whether you're into racing, controls, or business, there's a subteam for you.

      ## Design Build Fly (DBF)

      UMN's Design Build Fly team designs and builds radio-controlled aircraft for the international DBF competition organized by AIAA. While the team didn't attend competition in 2024, its leadership is focused on rebuilding and returning to form.

      The club is a hub for aerospace engineering students, with work spanning:

      - Aircraft design and simulation
      - Lightweight fabrication
      - RC systems integration

      President Thomas Herbert hopes to elevate DBF back into competitive shape by next year.

      ## Rocket Team

      The <a href="https://rkt.aem.umn.edu/" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-gold/80 transition-colors">University of Minnesota Rocket Team</a> designs, builds, and launches high-powered rockets and competes in events like:

      - Spaceport America Cup (SAC)
      - Intercollegiate Rocket Engineering Competition (IREC)
      - NASA USLI and Alka Rocket Challenge

      Recent Highlights:

      - Winner of the 30k SRAD category at SAC 2023 and 2024
      - Overall champion in SAC 2021
      - Highest recorded launch: 44,910 feet

      The team also runs a High Altitude R&D Project, focused on SRAD solid rocket motor performance.

      ## Join the Engineering Community at UMN

      If you're a student at the University of Minnesota looking to build, innovate, and join a community of future engineers, these clubs are where theory meets reality.

      Looking to join MinneSat?
      Visit our <a href="/join" class="text-gold hover:text-gold/80 transition-colors">Join page</a> to get started with hands-on aerospace experience.
    `,
    author: "MinneSat Team",
    date: "May 10, 2025",
    imageUrl: "/team-competition.webp",
    tags: ["Engineering Clubs", "UMN", "CanSat", "Solar Vehicle", "Rocket Team", "Formula SAE", "Design Build Fly"],
  },
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
