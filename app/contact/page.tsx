"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xovdeyvz")
  const [interests, setInterests] = useState({
    joining: false,
    sponsorship: false,
    general: false,
    other: false,
  })

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterests({
      ...interests,
      [e.target.name]: e.target.checked,
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <Navbar />

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
                      <a href="mailto:umn.minnesat@gmail.com" className="text-gold hover:underline">
                        umn.minnesat@gmail.com
                      </a>
                      <p className="text-white/70 mt-2 mb-1">Sponsorship Opportunities:</p>
                      <a href="mailto:umn.minnesat@gmail.com" className="text-gold hover:underline">
                        umn.minnesat@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-maroon/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Location</h3>
                      <p className="text-white/70 mb-1">General Meeting Room:</p>
                      <p className="text-white/90 font-medium">Akerman Hall, Room 211</p>
                      <p className="text-white/70 mt-2 mb-1">Workshop Room:</p>
                      <p className="text-white/90">Mechanical Engineering Building, Anderson Labs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-maroon/20 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Meeting Times</h3>
                      <p className="text-white/70 mb-1">General Meetings:</p>
                      <p className="text-white/90 font-medium">Wednesdays, 6:45 PM - 7:30 PM</p>
                      <p className="text-white/70 mt-2 mb-1">Workshop Time:</p>
                      <p className="text-white/90 font-medium">Wednesday, 7:30 PM - 8:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {state.succeeded ? (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/70 mb-6">
                      Thank you for reaching out to MinneSat. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => window.location.reload()}
                      className="bg-maroon hover:bg-maroon/90 rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white/80">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          placeholder="Your name"
                        />
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                          className="text-red-400 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white/80">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          placeholder="your.email@example.com"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-400 text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-white/80">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        placeholder="What is this regarding?"
                      />
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                        className="text-red-400 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white/80">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full rounded-lg border border-white/10 bg-zinc-800/50 p-2 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        placeholder="Your message here..."
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-400 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">I am interested in:</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className="flex items-center gap-2 text-white/80">
                          <input
                            type="checkbox"
                            name="joining"
                            checked={interests.joining}
                            onChange={handleInterestChange}
                            className="rounded border-white/20 bg-zinc-800/50 text-maroon focus:ring-maroon"
                          />
                          <span>Joining the team</span>
                        </label>
                        <label className="flex items-center gap-2 text-white/80">
                          <input
                            type="checkbox"
                            name="sponsorship"
                            checked={interests.sponsorship}
                            onChange={handleInterestChange}
                            className="rounded border-white/20 bg-zinc-800/50 text-maroon focus:ring-maroon"
                          />
                          <span>Sponsorship opportunities</span>
                        </label>
                        <label className="flex items-center gap-2 text-white/80">
                          <input
                            type="checkbox"
                            name="general"
                            checked={interests.general}
                            onChange={handleInterestChange}
                            className="rounded border-white/20 bg-zinc-800/50 text-maroon focus:ring-maroon"
                          />
                          <span>General information</span>
                        </label>
                        <label className="flex items-center gap-2 text-white/80">
                          <input
                            type="checkbox"
                            name="other"
                            checked={interests.other}
                            onChange={handleInterestChange}
                            className="rounded border-white/20 bg-zinc-800/50 text-maroon focus:ring-maroon"
                          />
                          <span>Other</span>
                        </label>
                      </div>
                      {/* Hidden field to send interests as a formatted string */}
                      <input
                        type="hidden"
                        name="interests"
                        value={Object.entries(interests)
                          .filter(([_, value]) => value)
                          .map(([key]) => key)
                          .join(", ")}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-maroon hover:bg-maroon/90 rounded-full"
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
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
