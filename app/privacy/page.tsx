import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/Reveal"

export const metadata = {
  title: "Політика конфіденційності та Умови використання | Anna Permanent",
  description: "Політика конфіденційності та умови використання сайту студії перманентного макіяжу Anna Permanent",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Важливо знати</p>
              <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                Політика конфіденційності <span className="font-semibold italic text-primary">та Умови</span>
              </h1>
            </div>
          </Reveal>

          {/* Privacy Policy Section */}
          <Reveal>
            <div className="mb-16">
              <h2 className="text-3xl font-light text-foreground mb-8">
                Політика конфіденційності
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Загальні положення</h3>
                  <p>
                    Студія перманентного макіяжу "Anna Permanent" (далі — Студія) поважає приватність своїх клієнтів. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо та захищаємо вашу персональну інформацію при взаємодії з нашим сайтом та послугами.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Інформація, яку ми збираємо</h3>
                  <p className="mb-3">Ми можемо збирати таку інформацію:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Контактна інформація:</strong> ім'я, номер телефону, адреса електронної пошти</li>
                    <li><strong>Інформація про замовлення:</strong> дату і час запису на послугу, тип послуги</li>
                    <li><strong>Технічна інформація:</strong> IP-адреса, тип браузера, сторінки, які ви відвідуєте</li>
                    <li><strong>Інформація про здоров'я:</strong> алергії або протипоказання до послуг (добровільно)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Як ми використовуємо вашу інформацію</h3>
                  <p className="mb-3">Ваша інформація використовується для:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Організації та управління записами на послуги</li>
                    <li>Надання якісних послуг перманентного макіяжу</li>
                    <li>Звязку з вами щодо записів та推promо-пропозицій</li>
                    <li>Поліпшення якості нашого сайту та послуг</li>
                    <li>Виконання законних вимог</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Захист персональних даних</h3>
                  <p>
                    Ми застосовуємо відповідні технічні та організаційні заходи для захисту вашої персональної інформації від несанкціонованого доступу, зміни або знищення. Ваші дані зберігаються безпечно та не передаються третім сторонам без вашої згоди.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Тривалість зберігання даних</h3>
                  <p>
                    Ми зберігаємо вашу персональну інформацію протягом часу, необхідного для надання послуг, та згідно з чинним законодавством України. Ви можете будь-коли запитати видалення вашої інформації, звернувшись до нас.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Ваші права</h3>
                  <p className="mb-3">Згідно з законодавством України, у вас є право:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Знати, які персональні дані ми про вас зберігаємо</li>
                    <li>Отримати копію своїх даних</li>
                    <li>Запросити виправлення неправильної інформації</li>
                    <li>Запросити видалення своїх даних</li>
                    <li>Відмовитися від розсилки маркетингових повідомлень</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. Контакти для питань про конфіденційність</h3>
                  <p>
                    Якщо у вас є питання щодо нашої Політики конфіденційності або про те, як ми обробляємо ваші дані, будь ласка, зв'яжіться з нами:
                  </p>
                  <div className="mt-4 p-4 bg-secondary rounded-lg">
                    <p className="text-sm"><strong>Instagram:</strong> @anna.permanent_zt</p>
                    <p className="text-sm"><strong>Телефон:</strong> +38 063 966 81 21</p>
                    <p className="text-sm"><strong>Адреса:</strong> вул. Михайлівська 55, Житомир</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <hr className="my-16 border-border" />

          {/* Terms of Service Section */}
          <Reveal>
            <div>
              <h2 className="text-3xl font-light text-foreground mb-8">
                Умови використання
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Загальні умови</h3>
                  <p>
                    Ці Умови регулюють ваше використання сайту та послуг студії "Anna Permanent". Використовуючи наш сайт, ви погоджуєтесь з цими умовами.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Послуги</h3>
                  <p className="mb-3">Студія пропонує послуги перманентного макіяжу, включаючи:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Перманентний макіяж брів (пудрові брови, мікроблейдинг, комбінована техніка)</li>
                    <li>Перманентний макіяж губ (акварельна техніка, контур з розтушовкою)</li>
                    <li>Перманентний макіяж стрілок</li>
                    <li>Корекція та дотушовування</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Запис на послуги</h3>
                  <p className="mb-3">
                    Для запису на послугу ви можете:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Написати в Instagram @anna.permanent_zt</li>
                    <li>Зателефонувати за номером +38 063 966 81 21</li>
                    <li>Відвідати студію особисто</li>
                  </ul>
                  <p className="mt-3">
                    Запис повинен бути зроблений не пізніше, ніж за 3 дні до бажаної дати послуги.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Скасування записи</h3>
                  <p>
                    Якщо вам потрібно скасувати запис, будь ласка, повідомте про це як найшвидше. Скасування без причини за менше ніж 24 години до запланованої дати може вплинути на вашу можливість повторного запису. Ми розуміємо непередбачені обставини і дискутуватимемо з вами індивідуально.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Оплата та повернення коштів</h3>
                  <p className="mb-3">
                    Оплата за послуги проводиться за визначеною студією тарифною сіткою. Деталі оплати та варіанти повернення обговорюються індивідуально при запису. Будь-яке повернення коштів розглядається на основі конкретних обставин.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Протипоказання та здоров'я</h3>
                  <p>
                    Перед процедурою ви зобов'язані повідомити Анну про будь-які алергії, хронічні захворювання, прийом ліків або інші протипоказання. Студія не несе відповідальності за ускладнення, спричинені прихованою інформацією про ваше здоров'я. Рекомендується проконсультуватися з дерматологом, якщо у вас є питання про придатність для процедури.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. Результати та гарантія якості</h3>
                  <p>
                    Студія гарантує застосування сучасних технік та матеріалів європейських брендів. Результат залежить від індивідуальних особливостей вашої шкіри та дотримання рекомендацій після процедури. Корекція включена у вартість послуги. Якщо у вас виникнуть питання щодо якості роботи, зв'яжіться зі студією протягом 7 днів після процедури.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">8. Відповідальність</h3>
                  <p>
                    Студія "Anna Permanent" не несе відповідальності за:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                    <li>Ускладнення, спричинені порушенням клієнтом рекомендацій після процедури</li>
                    <li>Індивідуальні реакції на матеріали (при виключених протипоказаннях)</li>
                    <li>Невдоволення естетичним результатом без об'єктивних причин</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">9. Інтелектуальна власність</h3>
                  <p>
                    Весь контент на сайті (тексти, зображення, логотип) є власністю студії "Anna Permanent". Заборонено копіювання, розповсюдження або використання матеріалів без письмової дозволу.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">10. Зміни умов</h3>
                  <p>
                    Студія залишає за собою право вносити зміни до цих Умов. Зміни набувають чинності з моменту публікації на сайті. Рекомендується регулярно переглядати цю сторінку.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">11. Контакти</h3>
                  <p className="mb-4">
                    Якщо у вас є питання щодо цих Умов, напишіть нам:
                  </p>
                  <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-sm"><strong>Instagram:</strong> @anna.permanent_zt</p>
                    <p className="text-sm"><strong>Телефон:</strong> +38 063 966 81 21</p>
                    <p className="text-sm"><strong>Адреса:</strong> вул. Михайлівська 55, Житомир</p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-accent/30 rounded-lg border border-primary/20">
                  <p className="text-sm text-foreground/70">
                    <strong>Дата останнього оновлення:</strong> Грудень 2025
                  </p>
                  <p className="text-sm text-foreground/70 mt-2">
                    Дякуємо за те, що ви обираєте студію "Anna Permanent". Ваша довіра та задоволення — наш пріоритет!
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
