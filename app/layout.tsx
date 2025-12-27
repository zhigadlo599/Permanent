import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Anna Permanent | Студія перманентного макіяжу",
  description:
    "Професійний перманентний макіяж у Житомирі. Брови, губи, стрілки. Запис через Instagram @anna.permanent_zt",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className="overflow-x-hidden">
      <head>
        <link rel="preload" as="video" href="/hero-background.mp4" type="video/mp4" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased overflow-x-hidden bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
