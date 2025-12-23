"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["Всі", "Брови", "Губи", "Очі"]

const galleryItems = [
  { category: "Брови", image: "/natural-powder-brows-permanent-makeup.jpg" },
  { category: "Губи", image: "/natural-lip-blush-permanent-makeup.jpg" },
  { category: "Очі", image: "/lash-line-enhancement-permanent-makeup.jpg" },
  { category: "Брови", image: "/ombre-powder-brows-before-after.jpg" },
  { category: "Губи", image: "/lip-tattoo-permanent-makeup-result.jpg" },
  { category: "Очі", image: "/eyeliner-permanent-makeup-result.jpg" },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Всі")

  const filteredItems =
    activeCategory === "Всі" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light mb-4 md:mb-6 text-balance">
            Портфоліо
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
            Реальні результати моїх клієнток
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full text-xs md:text-sm px-4 md:px-6"
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl md:rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all hover:scale-105 cursor-pointer"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={`Перманентний макіяж ${item.category}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
