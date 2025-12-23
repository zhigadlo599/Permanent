import { Card } from "@/components/ui/card"
import { Sparkles, Smile, Eye } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Брови",
    description: "Пудрове напилення для природного ефекту",
    details: ["Корекція форми", "Натуральний вигляд", "1-2 роки"],
    price: "від 2500 грн",
  },
  {
    icon: Smile,
    title: "Губи",
    description: "Контур і напилення для чуттєвих губ",
    details: ["Природний колір", "Об'єм", "1-2 роки"],
    price: "від 3000 грн",
  },
  {
    icon: Eye,
    title: "Очі",
    description: "Міжвійкова зона для виразного погляду",
    details: ["Природний ефект", "Виразність", "1-2 роки"],
    price: "від 2000 грн",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 md:mb-8 text-balance">Послуги</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Використовую сертифіковані пігменти преміум-класу
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 hover:shadow-xl transition-all duration-300 border hover:border-primary/50 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <service.icon className="w-12 h-12 md:w-14 md:h-14 text-primary mb-6 md:mb-8" />
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3 md:mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xl md:text-2xl font-semibold text-primary">{service.price}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
