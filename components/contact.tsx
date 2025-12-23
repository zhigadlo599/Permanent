"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Instagram, Clock, CheckCircle2 } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    console.log("[v0] Form data:", data)

    // Формуємо повідомлення для Instagram
    const instagramMessage = `🌸 Нова заявка з сайту!\n\n👤 Ім'я: ${data.name}\n📱 Телефон: ${data.phone}\n💄 Послуга: ${data.service}\n📝 Повідомлення: ${data.message}`

    // Відкриваємо Instagram Direct з попередньо заповненим повідомленням
    const instagramURL = `https://www.instagram.com/anna.permanent_zt/`

    // Копіюємо повідомлення в буфер обміну
    try {
      await navigator.clipboard.writeText(instagramMessage)
      console.log("[v0] Message copied to clipboard")
    } catch (err) {
      console.error("[v0] Failed to copy message:", err)
    }

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      window.open(instagramURL, "_blank")

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 md:mb-8 text-balance">Контакти</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">Запишіться на консультацію</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <Card className="p-6 md:p-8 flex items-start gap-5 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-base md:text-lg">Адреса</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  м. Житомир, вул. Михайлівська 45
                </p>
              </div>
            </Card>

            <Card className="p-6 md:p-8 flex items-start gap-5 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-base md:text-lg">Телефон</h3>
                <a
                  href="tel:+380639668121"
                  className="text-muted-foreground text-sm md:text-base hover:text-primary transition-colors"
                >
                  +380 (63) 966 81 21
                </a>
              </div>
            </Card>

            <Card className="p-6 md:p-8 flex items-start gap-5 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-base md:text-lg">Instagram</h3>
                <a
                  href="https://www.instagram.com/anna.permanent_zt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm md:text-base hover:text-primary transition-colors"
                >
                  @anna.permanent_zt
                </a>
              </div>
            </Card>

            <Card className="p-6 md:p-8 flex items-start gap-5 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-base md:text-lg">Режим роботи</h3>
                <p className="text-muted-foreground text-sm md:text-base">Пн-Сб: 10:00 - 19:00</p>
                <p className="text-muted-foreground text-sm md:text-base">Неділя: вихідний</p>
              </div>
            </Card>
          </div>

          <Card className="p-8 md:p-10 animate-in fade-in slide-in-from-right duration-700 transition-all hover:shadow-xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-20 h-20 text-primary mb-6" />
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">Дякуємо!</h3>
                <p className="text-base md:text-lg text-muted-foreground text-center">
                  Повідомлення скопійовано. Відкрийте Instagram для відправки.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-medium mb-3">
                    Ім'я
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ваше ім'я"
                    required
                    className="rounded-xl text-base md:text-lg h-12 md:h-14"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm md:text-base font-medium mb-3">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+380 (63) 966 81 21"
                    required
                    className="rounded-xl text-base md:text-lg h-12 md:h-14"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm md:text-base font-medium mb-3">
                    Послуга
                  </label>
                  <Input
                    id="service"
                    name="service"
                    placeholder="Брови, губи або очі"
                    required
                    className="rounded-xl text-base md:text-lg h-12 md:h-14"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-medium mb-3">
                    Повідомлення
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Розкажіть про ваші побажання..."
                    rows={4}
                    className="rounded-xl text-base md:text-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-full text-base md:text-lg py-6 md:py-7 transition-transform hover:scale-105"
                  size="lg"
                >
                  {isLoading ? "Відправка..." : "Відправити заявку"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
