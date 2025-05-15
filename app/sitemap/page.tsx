import Link from "next/link"

export default function SitemapPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Site Map</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-red-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Main Pages</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/join" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                Join Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-red-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Legacy</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/legacy" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                Legacy Overview
              </Link>
            </li>
            <li>
              <Link href="/legacy/2025" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                2025 Team
              </Link>
            </li>
            <li>
              <Link href="/legacy/2024" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                2024 Team
              </Link>
            </li>
            <li>
              <Link href="/legacy/2023" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                2023 Team
              </Link>
            </li>
            <li>
              <Link href="/legacy/2022" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                2022 Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-red-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Sponsors</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/sponsors" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                Our Sponsors
              </Link>
            </li>
            <li>
              <Link href="/sponsors/info" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                Sponsorship Information
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-red-900 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Site Information</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/sitemap" className="text-yellow-300 hover:text-yellow-200 transition-colors">
              Site Map
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
