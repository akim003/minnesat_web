import { Analytics } from "@vercel/analytics/react"
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MinneSat - University of Minnesota CanSat Team",
  description: "University of Minnesota's CanSat team, designing and building space systems for the future.",
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "auto" }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable scroll restoration
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              
              // Check for hash in URL
              function handleScroll() {
                if (window.location.hash) {
                  // Let the browser handle anchor scrolling
                  const id = window.location.hash.substring(1);
                  const element = document.getElementById(id);
                  if (element) {
                    setTimeout(() => {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                } else {
                  // Force scroll to top
                  window.scrollTo(0, 0);
                }
              }
              
              // Force scroll on page load
              window.addEventListener('load', handleScroll);
              
              // Force scroll on navigation
              document.addEventListener('DOMContentLoaded', handleScroll);
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Suspense>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
