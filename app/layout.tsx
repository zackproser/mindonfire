import { Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mind on Fire | Software & AI Consultancy",
  description: "Innovative software development and AI consulting services that ignite digital transformation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}



import './globals.css'