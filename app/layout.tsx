import { Analytics } from "@vercel/analytics/react"
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MinneSat - University of Minnesota CanSat Team",
  description: "University of Minnesota's CanSat team, designing and building space systems for the future.",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
