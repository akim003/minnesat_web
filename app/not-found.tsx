import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-16 ">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">404</h1>
        <h2 className="text-2xl font-bold tracking-tight text-gold">Page Not Found</h2>
        <p className="max-w-[450px] text-center text-white/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-maroon hover:bg-maroon/90">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
