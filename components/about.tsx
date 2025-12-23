import { Check, Instagram } from "lucide-react"

const features = [
  "Сертифікований майстер з 5+ років досвіду",
  "Преміальні пігменти європейських брендів",
  "Індивідуальний підхід до кожної клієнтки",
  "Стерильність та безпека на найвищому рівні",
  "Безкоштовна консультація перед процедурою",
  "Корекція включена у вартість",
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/anna-permanent-makeup-artist-instagram-photo.jpg"
                alt="Анна - майстер перманентного макіяжу"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/30 rounded-3xl -z-10" />

            {/* Instagram badge */}
            <a
              href="https://instagram.com/anna.permanent_zt"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-white transition-colors"
            >
              <Instagram className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">@anna.permanent_zt</span>
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Про мене</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Привіт, я <span className="font-semibold italic text-primary">Анна</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Я — сертифікований майстер перманентного макіяжу з Житомира. Моя місія — допомогти кожній жінці відчути
              себе красивою та впевненою кожного дня, без витрат часу на щоденний макіяж.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Постійно вдосконалюю свої навички, відвідую майстер-класи провідних фахівців та використовую лише найкращі
              матеріали для досягнення природного та довготривалого результату.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
