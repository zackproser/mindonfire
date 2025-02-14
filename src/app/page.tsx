import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="fixed inset-0 bg-black">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center text-center max-w-3xl">
          <div className="relative mb-6 h-[512px] w-[512px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mind-on-fire-qCF3LlSKl3WKqeykLcI6lhcB9UhUT5.png"
              alt="Mind on Fire Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-gradient-to-r from-yellow-500/10 to-red-500/10 px-3 py-1 text-xs text-orange-400 ring-1 ring-orange-500/20">
              AI Solutions
            </span>
            <span className="rounded-full bg-gradient-to-r from-yellow-500/10 to-red-500/10 px-3 py-1 text-xs text-orange-400 ring-1 ring-orange-500/20">
              Machine Learning
            </span>
            <span className="rounded-full bg-gradient-to-r from-yellow-500/10 to-red-500/10 px-3 py-1 text-xs text-orange-400 ring-1 ring-orange-500/20">
              Software Development
            </span>
            <span className="rounded-full bg-gradient-to-r from-yellow-500/10 to-red-500/10 px-3 py-1 text-xs text-orange-400 ring-1 ring-orange-500/20">
              Cloud Architecture
            </span>
            <span className="rounded-full bg-gradient-to-r from-yellow-500/10 to-red-500/10 px-3 py-1 text-xs text-orange-400 ring-1 ring-orange-500/20">
              Advisory Services
            </span>
          </div>

          <div className="mt-8 flex items-center space-x-6">
            <Link href="mailto:zackproser@gmail.com" aria-label="Email" className="group">
              <Mail className="h-6 w-6 [&>path]:stroke-[1.5] [&>path]:stroke-zinc-400 group-hover:[&>path]:stroke-[url(#fire-gradient)]" />
            </Link>
            <Link
              href="https://linkedin.com/in/zackproser"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group"
            >
              <Linkedin className="h-6 w-6 [&>path]:stroke-[1.5] [&>path]:stroke-zinc-400 group-hover:[&>path]:stroke-[url(#fire-gradient)]" />
            </Link>
          </div>

          {/* SVG Gradient Definition */}
          <svg width="0" height="0" className="hidden">
            <defs>
              <linearGradient id="fire-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#FFD700" }} />
                <stop offset="50%" style={{ stopColor: "#FF8C00" }} />
                <stop offset="100%" style={{ stopColor: "#FF4500" }} />
              </linearGradient>
            </defs>
          </svg>

          <Button
            className="mt-8 w-full bg-gradient-to-r from-yellow-500 to-red-500 text-black hover:from-yellow-600 hover:to-red-600"
            asChild
          >
            <Link href="mailto:zackproser@gmail.com">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </main>
  )
} 