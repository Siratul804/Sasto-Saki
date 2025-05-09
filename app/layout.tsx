import type React from "react"
import "./globals.css"
import { Hind_Siliguri } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Hind_Siliguri({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Women's Health Platform",
  description:
    "Complete women's health companion with AI-powered insights, doctor consultations, and community support",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
