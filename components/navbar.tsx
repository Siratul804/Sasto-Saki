"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"english" | "bengali">("english")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "bengali" : "english")
  }

  // Translations for demonstration
  const translations = {
    english: {
      home: "Home",

      patientPortal: "Patient Portal",
      doctorPortal: "Doctor Portal",
    },
    bengali: {
      home: "হোম",
      patientPortal: "রোগীর পোর্টাল",
      doctorPortal: "ডাক্তার পোর্টাল",
    },
  }

  const t = translations[language]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#9059a1]">
             স্বাস্থ্য সখী 
            </span>
          </Link>

          {/* Language Toggle */}
          <div className="flex items-center ml-4 mr-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-5 w-5 text-[#bengali]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("english")}>
                  <span className={language === "english" ? "font-bold" : ""}>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("bengali")}>
                  <span className={language === "bengali" ? "font-bold" : ""}>বাংলা</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && <nav className="hidden md:flex space-x-8 pr-8"></nav>}

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/patient/dashboard">
              <Button variant="outline" className="border-[#9059a1] text-[#9059a1] hover:bg-[#f8BBD0]/10">
                {t.patientPortal}
              </Button>
            </Link>
            <Link href="/doctor/register">
              <Button className="bg-[#9059a1] hover:bg-[#f8BBD0]">{t.doctorPortal}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#F48FB1] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                href="/patient/dashboard"
                className="text-gray-700 hover:text-[#F48FB1] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.patientPortal}
              </Link>
              <Link
                href="/doctor/register"
                className="text-gray-700 hover:text-[#F48FB1] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.doctorPortal}
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                <Link href="/patient/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="border-[#F48FB1] text-[#F48FB1] hover:bg-[#f8BBD0]/10 w-full">
                    {t.patientPortal}
                  </Button>
                </Link>
                <Link href="/doctor/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0] w-full">{t.doctorPortal}</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
