import Link from "next/link"
import { Instagram, Phone, MapPin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-wide mb-4 block">
              Anna<span className="text-primary">.</span>permanent
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Професійний перманентний макіяж у Житомирі. Краса, яка підкреслює вашу індивідуальність.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Послуги</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>Перманент брів</li>
              <li>Перманент губ</li>
              <li>Перманент стрілок</li>
              <li>Корекція</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакти</h3>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a
                  href="https://instagram.com/anna.permanent_zt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  @anna.permanent_zt
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+380639668121" className="hover:text-background transition-colors">
                  +38 063 966 81 21
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Житомир, вул. Михайлівська 55</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Правова інформація</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-background transition-colors">
                  Політика та Умови
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/50 text-sm">
          <p className="flex items-center justify-center gap-1">
            © 2025 Anna Permanent. Створено з <Heart className="w-4 h-4 text-primary fill-primary" /> у Житомирі
          </p>
        </div>
      </div>
    </footer>
  )
}
