import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { ReactNode } from "react"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
