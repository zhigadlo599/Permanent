import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    title: "Брови",
    price: "2500",
    description: "Пудрове напилення",
    features: ["Консультація", "Процедура з анестезією", "Догляд", "Корекція включена"],
  },
  {
    title: "Губи",
    price: "3000",
    description: "Контур або заповнення",
    features: ["Консультація", "Процедура з анестезією", "Догляд", "Корекція включена", "Зволоження"],
    popular: true,
  },
  {
    title: "Очі",
    price: "2000",
    description: "Міжвійковий простір",
    features: ["Консультація", "Процедура з анестезією", "Догляд", "Корекція включена"],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 md:mb-8 text-balance">Ціни</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Корекція включена в вартість
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 md:p-10 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in slide-in-from-bottom ${
                plan.popular ? "border-2 border-primary shadow-xl md:scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 md:px-6 py-2 bg-primary text-primary-foreground text-sm md:text-base font-medium rounded-full shadow-lg">
                  Популярно
                </div>
              )}

              <div className="text-center mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3">{plan.title}</h3>
                <div className="mb-3">
                  <span className="text-4xl md:text-5xl font-serif font-bold text-primary">{plan.price}</span>
                  <span className="text-base md:text-lg text-muted-foreground"> грн</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full rounded-full text-base md:text-lg py-6 md:py-7 transition-transform hover:scale-105"
                variant={plan.popular ? "default" : "outline"}
              >
                <a href="#contact" className="w-full">
                  Записатися
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
