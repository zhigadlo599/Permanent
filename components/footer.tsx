import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary mb-3 md:mb-4">Anna Permanent</h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Перманентний макіяж у Житомирі. Підкресліть свою природну красу.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Послуги</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition">
                  Брови
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition">
                  Губи
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition">
                  Очі
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Контакти</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>м. Житомир, вул. Михайлівська 45</span>
              </div>
              <a
                href="https://www.instagram.com/anna.permanent_zt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition"
              >
                <Instagram className="w-4 h-4" />
                @anna.permanent_zt
              </a>
              <a
                href="tel:+380501234567"
                className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition"
              >
                <Phone className="w-4 h-4" />
                +380 (50) 123 45 67
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-border text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2025 Anna Permanent. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}
