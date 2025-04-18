import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Clock, Instagram, Twitter, Linkedin } from "lucide-react"

export const metadata = {
  title: "MinneSat - Contact Us",
  description: "Get in touch with the University of Minnesota's CanSat team",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/favicon.jpg" alt="MinneSat Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
              <span className="text-xl font-bold tracking-tight">MinneSat</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/team" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              The Team
            </Link>
            <Link href="/legacy" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Legacy
            </Link>
            <Link href="/sponsors" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Sponsors
            </Link>
            <Link href="/join" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
              Join
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gold hover:text-gold transition-colors">
              Contact Us
            </Link>
            <Button className="bg-maroon hover:bg-maroon/90">Join Us</Button>
          </nav>
          <button className="md:hidden">
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block rounded-full bg-maroon/20 px-3 py-1 text-sm text-maroon mb-4">
                Get In Touch
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="max-w-3xl text-white/70">
                Have questions about our team or interested in joining? We'd love to hear from you! Fill out the form
                below or reach out to us directly.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-maroon/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-white/70 mb-1">General Inquiries:</p>
                      <a href="mailto:minnesat@umn.edu" className="text-gold hover:underline">
                        minnesat@umn.edu
                      </a>
                      <p className="text-white/70 mt-2 mb-1">Sponsorship Opportunities:</p>
                      <a href="mailto:minnesat-sponsors@umn.edu" className="text-gold hover:underline">
                        minnesat-sponsors@umn.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-maroon/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Location</h3>
                      <p className="text-white/70 mb-1">Meeting Room:</p>
                      <p className="text-white/90">Keller Hall, Room 2-260</p>
                      <p className="text-white/70 mt-2">
                        University of Minnesota
                        <br />
                        200 Union St SE
                        <br />
                        Minneapolis, MN 55455
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-maroon/20 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Meeting Times</h3>
                      <p className="text-white/70 mb-1">General Meetings:</p>
                      <p className="text-white/90">Wednesdays, 6:00 PM - 8:00 PM</p>
                      <p className="text-white/70 mt-2 mb-1">Design Reviews:</p>
                      <p className="text-white/90">Fridays, 4:00 PM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-maroon/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Phone</h3>
                      <p className="text-white/70 mb-1">Faculty Advisor:</p>
                      <a href="tel:+16125551234" className="text-gold hover:underline">
                        (612) 555-1234
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-zinc-900 p-3 rounded-full text-white/60 hover:text-gold hover:bg-zinc-800 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="#"
                      className="bg-zinc-900 p-3 rounded-full text-white/60 hover:text-gold hover:bg-zinc-800 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="bg-zinc-900 p-3 rounded-full text-white/60 hover:text-gold hover:bg-zinc-800 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/80">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/80">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white/80">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/80">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">I am interested in:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <label className="flex items-center gap-2 text-white/80">
                        <input
                          type="checkbox"
                          className="rounded border-white/20 bg-zinc-800/50 text-maroon focus:ring-maroon"
                        />
                        <span>Joining the team</span>
                      </label>
                      <label className="flex items-center gap-2 text-white/80">
                        <input
                          type="checkbox"
                          className="rounded border-white/20 bg-zinc-800/50 text-maroon focus:ring-maroon"
                        />
                        <span>Sponsorship opportunities</span>
                      </label>
                      <label className="flex items-center gap-2 text-white/80">
                        <input
                          type="checkbox"
                          className="rounded border-white/20 bg-zinc-800/50 text-maroon focus:ring-maroon"
                        />
                        <span>General information</span>
                      </label>
                      <label className="flex items-center gap-2 text-white/80">
                        <input
                          type="checkbox"
                          className="rounded border-white/20 bg-zinc-800/50 text-maroon focus:ring-maroon"
                        />
                        <span>Other</span>
                      </label>
                    </div>
                  </div>
                  <Button className="w-full bg-maroon hover:bg-maroon/90 rounded-full">Send Message</Button>
                </form>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.23468492346016!3d44.97397937107615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d18ed516031%3A0x5e093fa5ad4f8dd2!2sKeller%20Hall%2C%20Minneapolis%2C%20MN%2055455!5e0!3m2!1sen!2sus!4v1682123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MinneSat Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white py-12 border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/favicon.jpg"
                  alt="MinneSat Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-xl font-bold tracking-tight">MinneSat</span>
              </div>
              <p className="text-white/60 max-w-xs">
                University of Minnesota's CanSat team, designing and building space systems for the future.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="text-white/60 hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-white/60 hover:text-gold transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/legacy" className="text-white/60 hover:text-gold transition-colors">
                    Legacy Projects
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="text-white/60 hover:text-gold transition-colors">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-gold transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-white/60 hover:text-gold transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-white/60 hover:text-gold transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/60">
            <p>© {new Date().getFullYear()} MinneSat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
