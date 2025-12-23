"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-primary">Anna Permanent</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <a href="#services" className="text-base lg:text-lg hover:text-primary transition-colors">
              Послуги
            </a>
            <a href="#gallery" className="text-base lg:text-lg hover:text-primary transition-colors">
              Роботи
            </a>
            <a href="#contact" className="text-base lg:text-lg hover:text-primary transition-colors">
              Контакти
            </a>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <Button
              size="default"
              variant="outline"
              className="hidden sm:flex items-center gap-2 bg-transparent text-base"
              onClick={() => window.open("https://www.instagram.com/anna.permanent_zt", "_blank")}
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden lg:inline">Instagram</span>
            </Button>
            <Button
              size="default"
              className="hidden md:flex text-base"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Записатись
            </Button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Меню">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-5 border-t border-border animate-in fade-in slide-in-from-top duration-300">
            <a
              href="#services"
              className="block text-lg hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Послуги
            </a>
            <a
              href="#gallery"
              className="block text-lg hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Роботи
            </a>
            <a
              href="#contact"
              className="block text-lg hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакти
            </a>
            <Button
              size="default"
              variant="outline"
              className="w-full bg-transparent text-base"
              onClick={() => {
                window.open("https://www.instagram.com/anna.permanent_zt", "_blank")
                setIsMenuOpen(false)
              }}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button
              size="default"
              className="w-full text-base"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                setIsMenuOpen(false)
              }}
            >
              Записатись
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
