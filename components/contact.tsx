import { Instagram, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactInfo = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@anna.permanent_zt",
    href: "https://instagram.com/anna.permanent_zt",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+38 063 966 81 21",
    href: "tel:+380639668121",
  },
  {
    icon: MapPin,
    label: "Адреса",
    value: "Житомир, вул. Михайлівська 55",
    href: "https://maps.google.com/?q=Житомир+вул.+Михайлівська+55",
  },
  {
    icon: Clock,
    label: "Графік роботи",
    value: "Пн-Сб: 10:00 - 19:00",
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Контакти</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Давайте <span className="font-semibold italic text-primary">зв'яжемось</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Для запису на процедуру або консультацію напишіть мені в Instagram — це найзручніший спосіб зв'язку. Я
              відповім якнайшвидше!
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base"
              >
                <Link
                  href="https://instagram.com/anna.permanent_zt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Записатися в Instagram
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-base bg-transparent"
              >
                <a href="tel:+380639668121" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Зателефонувати
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/modern-beauty-salon-interior--pink-and-white--eleg.jpg"
                alt="Студія перманентного макіяжу"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/30 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
