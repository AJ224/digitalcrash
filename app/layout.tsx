import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans, Inter as FontHeading } from "next/font/google"
// import localFont from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CursorGlow from "@/components/cursor-glow"
import ParticleBackground from "@/components/particle-background"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Digital Crash",
  description: "Affordable, fast, and high-quality digital solutions for non-tech industries.",
  icons: {
    icon: "/FaviconDigitalCrash.png", // this is the magic line
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
          <CursorGlow />
          <ParticleBackground particleCount={30} />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'