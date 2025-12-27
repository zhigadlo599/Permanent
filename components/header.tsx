 "use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Послуги", href: "#services" },
    { label: "Про мене", href: "#about" },
    { label: "Галерея", href: "#gallery" },
    { label: "Контакти", href: "#contact" },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl md:text-3xl font-normal tracking-wide text-foreground">
            Anna<span className="text-primary">.</span>permanent
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://instagram.com/anna.permanent_zt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Button asChild className="bg-pink-200 hover:bg-pink-300 text-foreground rounded-full px-6">
              <Link href="https://instagram.com/anna.permanent_zt" target="_blank" rel="noopener noreferrer">
                Записатися
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-pink-200 hover:bg-pink-300 text-foreground rounded-full mt-2">
              <Link href="https://instagram.com/anna.permanent_zt" target="_blank" rel="noopener noreferrer">
                Записатися
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
