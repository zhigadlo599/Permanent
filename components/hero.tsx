 'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { useEffect, useState } from "react"
import { Reveal } from "@/components/ScrollReveal"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Try to force-play background videos on mobile if blocked
  useEffect(() => {
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>(".hero-video"))
    const listeners: Array<() => void> = []

        const tryPlayOnce = (v: HTMLVideoElement) => {
      try {
        // Ensure muted and inline attributes for mobile autoplay
        v.muted = true
            v.defaultMuted = true
        v.playsInline = true
        try {
          v.setAttribute("playsinline", "")
          // some browsers respond to webkit attribute
          v.setAttribute("webkit-playsinline", "")
          v.setAttribute("muted", "")
        } catch {}

        try {
          // Ensure the media is requested to load immediately
          v.load()
        } catch {}

        const p = v.play()
        if (p && typeof p.catch === "function") {
          p.catch(() => {
            // If autoplay is blocked, attempt again on the next user interaction
            const onUserGesture = () => {
              try {
                v.play().catch(() => {})
              } catch {}
              document.removeEventListener("click", onUserGesture)
              document.removeEventListener("touchstart", onUserGesture)
            }
            document.addEventListener("click", onUserGesture, { once: true })
            document.addEventListener("touchstart", onUserGesture, { once: true })
          })
        }
      } catch {}
    }

    videos.forEach((v) => {
      const handler = () => tryPlayOnce(v)
      listeners.push(handler)
      if (v.readyState >= 2) {
        handler()
      } else {
        v.addEventListener("loadeddata", handler, { once: true })
      }
    })

    // Also attempt to play on window load (helps for some mobile browsers)
    const onLoad = () => videos.forEach((v) => tryPlayOnce(v))
    window.addEventListener("load", onLoad, { once: true })

    // Fallback: attempt to play on first user touch (common mobile restriction)
    const touchHandler = () => {
      videos.forEach((v) => tryPlayOnce(v))
      document.removeEventListener("touchstart", touchHandler)
    }
    document.addEventListener("touchstart", touchHandler, { once: true })

    return () => {
      videos.forEach((v, i) => {
        try {
          v.removeEventListener("loadeddata", listeners[i])
        } catch {}
      })
      try {
        window.removeEventListener("load", onLoad)
      } catch {}
      try {
        document.removeEventListener("touchstart", touchHandler)
      } catch {}
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background: static image on small devices, video on larger screens */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
          className="hero-video sm:hidden absolute inset-0 w-full h-full object-cover z-0 bg-black pointer-events-none"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <video
          className="hero-video hidden sm:block absolute inset-0 w-full h-full object-cover z-0 bg-black pointer-events-none"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <Reveal>
        <div
          className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center ${
            isVisible
              ? "sm:opacity-100 sm:translate-y-0 opacity-100 translate-y-0"
              : "sm:opacity-0 sm:translate-y-8 opacity-100 translate-y-0"
          } sm:transition-all sm:duration-1000 sm:ease-out`}
        >
          <div className="flex flex-col items-center justify-center">
            <p
              className={`text-xl sm:text-xl uppercase tracking-[0.3em] text-white/90 mb-4 sm:transition-all sm:duration-1000 sm:delay-200 ${
                isVisible
                  ? "sm:opacity-100 sm:translate-y-0 opacity-100 translate-y-0"
                  : "sm:opacity-0 sm:translate-y-4 opacity-100 translate-y-0"
              }`}
            >
              Студія перманентного макіяжу
            </p>
            <h1
              className={`text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight text-white mb-6 sm:transition-all sm:duration-1000 sm:delay-300 ${
                isVisible
                  ? "sm:opacity-100 sm:translate-y-0 opacity-100 translate-y-0"
                  : "sm:opacity-0 sm:translate-y-4 opacity-100 translate-y-0"
              }`}
            >
              Підкресли свою
              <span className="block font-semibold italic text-rose-200">природну красу</span>
            </h1>
            <p
              className={`text-2xl sm:text-2xl md:text-3xl text-white/80 max-w-2xl mb-10 leading-relaxed sm:transition-all sm:duration-1000 sm:delay-500 ${
                isVisible
                  ? "sm:opacity-100 sm:translate-y-0 opacity-100 translate-y-0"
                  : "sm:opacity-0 sm:translate-y-4 opacity-100 translate-y-0"
              }`}
            >
              Професійний перманентний макіяж брів, губ та стрілок у Житомирі
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center sm:transition-all sm:duration-1000 sm:delay-700 ${
                isVisible
                  ? "sm:opacity-100 sm:translate-y-0 opacity-100 translate-y-0"
                  : "sm:opacity-0 sm:translate-y-4 opacity-100 translate-y-0"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-80 bg-pink-500/80 hover:bg-pink-500/90 text-white rounded-full px-8 py-6 text-xl sm:text-2xl font-medium shadow-xl no-scale backdrop-blur-sm opacity-70"
              >
                <Link
                  href="https://instagram.com/anna.permanent_zt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                  Записатися
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-80 rounded-full px-8 py-6 text-xl sm:text-2xl border-2 border-white text-white hover:bg-white/20 bg-transparent backdrop-blur-sm"
              >
                <Link href="#services" className="flex items-center justify-center">
                  Дізнатися більше
                </Link>
              </Button>
            </div>

            <div
              className={`flex gap-6 mt-12 justify-center sm:transition-all sm:duration-1000 sm:delay-1000 ${
                isVisible
                  ? "sm:opacity-100 sm:translate-y-0 opacity-100 translate-y-0"
                  : "sm:opacity-0 sm:translate-y-4 opacity-100 translate-y-0"
              }`}
            >
              <div className="bg-white/20 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/30 text-center">
                <p className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">5+</p>
                <p className="text-base sm:text-lg text-white/80">років досвіду</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/30 text-center">
                <p className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">2500+</p>
                <p className="text-base sm:text-lg text-white/80">задоволених клієнток</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}


