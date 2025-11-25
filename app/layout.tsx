import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rana Diandra Zahra | Fullstack Developer",
  description:
    "Professional portfolio of Rana Diandra Zahra, a fullstack developer specializing in scalable web applications.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
