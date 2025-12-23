import { Award, Clock, Heart, Shield } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Досвід",
    description: "Сертифікований майстер з досвідом роботи",
  },
  {
    icon: Shield,
    title: "Безпека",
    description: "Одноразові матеріали, повна стерилізація",
  },
  {
    icon: Heart,
    title: "Індивідуально",
    description: "Підбір форми та кольору під ваші риси",
  },
  {
    icon: Clock,
    title: "Результат",
    description: "Економія часу на макіяж до 2 років",
  },
]

export function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 md:mb-8 text-balance">Чому я</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center space-y-4 md:space-y-5 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/20 transition-transform hover:scale-110">
                <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
