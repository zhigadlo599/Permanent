"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      style={{ minHeight: "600px", maxHeight: "700px", height: "100%" }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/trendy-permanent-makeup-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transform: "translateZ(0)",
          willChange: "auto",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-balance leading-[1.1] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Краса, що надихає
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 font-light leading-relaxed text-balance px-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Підкресліть свою природну красу з перманентним макіяжем. Брови, губи, стрілки — ідеальний результат, що
            тримається роками.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 md:pt-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => window.open("https://www.instagram.com/anna.permanent_zt", "_blank")}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base md:text-lg px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 rounded-full bg-background/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Записатися
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
