const steps = [
  {
    number: "01",
    title: "Консультація",
    description: "Обговорюємо побажання, підбираємо форму та колір",
  },
  {
    number: "02",
    title: "Ескіз",
    description: "Малюємо ескіз та узгоджуємо форму",
  },
  {
    number: "03",
    title: "Процедура",
    description: "Нанесення пігменту зі знеболюванням (1.5-3 години)",
  },
  {
    number: "04",
    title: "Корекція",
    description: "Через 4-6 тижнів для ідеального результату",
  },
]

export function Process() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light mb-4 md:mb-6 text-balance">
            Процес роботи
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">Від консультації до результату</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 md:mb-6">
                <span className="text-5xl md:text-6xl font-serif font-light text-primary/20">{step.number}</span>
              </div>
              <h3 className="text-lg md:text-2xl font-serif font-semibold mb-2 md:mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
