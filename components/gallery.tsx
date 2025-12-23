"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { BeforeAfterSlider } from "./before-after-slider"

const beforeAfterImages = [
  {
    before: "/woman-eyebrows-before-permanent-makeup-natural-fac.jpg",
    after: "/woman-perfect-eyebrows-after-permanent-makeup-beau.jpg",
    title: "Перманент брів",
  },
  {
    before: "/woman-natural-lips-before-permanent-makeup-close-u.jpg",
    after: "/woman-beautiful-pink-lips-after-permanent-makeup.jpg",
    title: "Перманент губ",
  },
  {
    before: "/woman-eyes-without-eyeliner-natural-look-close-up.jpg",
    after: "/woman-eyes-with-beautiful-eyeliner-permanent-makeu.jpg",
    title: "Перманент стрілок",
  },
]

const galleryImages = [
  { src: "/young-woman-beautiful-natural-eyebrows-microbladin.jpg", alt: "Перманент брів" },
  { src: "/young-woman-beautiful-pink-lips-permanent-makeup-r.jpg", alt: "Перманент губ" },
  { src: "/young-woman-beautiful-eyes-with-subtle-eyeliner-cl.jpg", alt: "Перманент стрілок" },
  { src: "/young-woman-perfect-powder-brows-natural-makeup-cl.jpg", alt: "Пудрові брови" },
  { src: "/young-woman-lip-blush-permanent-makeup-natural-res.jpg", alt: "Акварельні губи" },
  { src: "/young-woman-beautiful-face-permanent-makeup-natura.jpg", alt: "Природний макіяж" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Мої роботи</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Галерея <span className="font-semibold italic text-primary">робіт</span>
          </h2>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-light text-center mb-8 text-foreground">
            Порівняйте <span className="font-semibold italic text-primary">до та після</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfterImages.map((item, index) => (
              <div key={index} className="space-y-3">
                <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} />
                <p className="text-center text-lg font-medium text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Existing gallery grid */}
        <h3 className="text-2xl md:text-3xl font-light text-center mb-8 text-foreground">
          Більше <span className="font-semibold italic text-primary">результатів</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </button>
          ))}
        </div>

        <p className="text-center mt-8 text-muted-foreground">
          Більше робіт у моєму{" "}
          <a
            href="https://instagram.com/anna.permanent_zt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Instagram
          </a>
        </p>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors"
            aria-label="Закрити"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Збільшене зображення"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
