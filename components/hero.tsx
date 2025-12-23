"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Full-page background image */}
      <div className="absolute inset-0">
        <img
          src="/beautiful-young-woman-close-up-face-with-perfect-e.jpg"
          alt="Перманентний макіяж"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <p
            className={`text-lg sm:text-xl uppercase tracking-[0.3em] text-white/90 mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Студія перманентного макіяжу
          </p>
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight text-white mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Підкресли свою
            <span className="block font-semibold italic text-rose-200">природну красу</span>
          </h1>
          <p
            className={`text-xl sm:text-2xl md:text-3xl text-white/80 max-w-2xl mb-10 leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Професійний перманентний макіяж брів, губ та стрілок у Житомирі
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-rose-500 rounded-full px-8 py-6 text-xl sm:text-2xl font-medium shadow-xl"
            >
              <Link
                href="https://instagram.com/anna.permanent_zt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                Записатися
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-xl sm:text-2xl border-2 border-white text-white hover:bg-white/20 bg-transparent backdrop-blur-sm"
            >
              <Link href="#services">Дізнатися більше</Link>
            </Button>
          </div>

          <div
            className={`flex gap-6 mt-12 justify-center transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-white/20 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/30 text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">5+</p>
              <p className="text-base sm:text-lg text-white/80">років досвіду</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/30 text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">500+</p>
              <p className="text-base sm:text-lg text-white/80">задоволених клієнток</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
