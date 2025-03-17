import type React from "react"
import type { Metadata } from "next"
import { Inter, Sarabun } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const sarabun = Sarabun({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "LeadBridge | AI Agents for Business",
  description: "Automate, Scale, and Save Time with AI Agents",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={` ${sarabun.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'