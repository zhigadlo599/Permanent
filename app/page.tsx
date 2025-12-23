import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
