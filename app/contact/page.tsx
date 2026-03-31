"use client";

import RevealSection from "../components/RevealSection";

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 text-center">
        <p className="text-kin text-sm tracking-[0.3em] mb-4">CONTACT</p>
        <h1 className="font-mincho text-4xl md:text-5xl tracking-[0.25em]">
          お問い合わせ
        </h1>
        <div className="tosa-divider mt-10" />
      </section>

      {/* Phone CTA */}
      <section className="px-6 max-w-2xl mx-auto mb-24">
        <RevealSection>
          <div className="text-center">
            <p className="text-shiro/50 text-base leading-relaxed mb-10">
              ご予約・お問い合わせはお電話にて承っております。<br />
              鰹のたたきは事前のご注文をおすすめいたします。
            </p>

            <a
              href="tel:088-875-2424"
              className="inline-flex flex-col items-center gap-4 group cursor-pointer"
            >
              <span className="text-sm text-kin tracking-[0.3em]">
                お電話でのご予約
              </span>
              <span className="font-mincho text-4xl md:text-5xl tracking-[0.1em] text-shiro group-hover:text-kin transition-colors duration-300">
                088-875-2424
              </span>
              <span className="text-sm text-shiro/40">
                タップで発信できます
              </span>
            </a>
          </div>
        </RevealSection>
      </section>

      {/* Info */}
      <section className="px-6 max-w-2xl mx-auto mb-24">
        <RevealSection>
          <div className="gold-line mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm text-kin tracking-[0.2em] mb-4">
                営業時間
              </h3>
              <p className="text-base text-shiro/60">月・火・木・金・土・日 17:30〜23:00</p>
            </div>

            <div>
              <h3 className="text-sm text-kin tracking-[0.2em] mb-4">
                定休日
              </h3>
              <p className="text-base text-shiro/60">水曜日</p>
            </div>

            <div className="sm:col-span-2">
              <h3 className="text-sm text-kin tracking-[0.2em] mb-4">
                所在地
              </h3>
              <p className="text-base text-shiro/60 mb-2">
                高知県高知市はりまや町2-1-21
              </p>
              <p className="text-sm text-shiro/40">
                はりまや橋駅から徒歩2分
              </p>
            </div>
          </div>

          <div className="gold-line mt-12" />
        </RevealSection>
      </section>

      {/* Map */}
      <section className="px-6 max-w-3xl mx-auto mb-20">
        <RevealSection>
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.4!2d133.5395!3d33.5585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z44Gp44KT44GT!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="どんこ 地図"
              className="absolute inset-0"
            />
          </div>
        </RevealSection>
      </section>
    </main>
  );
}
