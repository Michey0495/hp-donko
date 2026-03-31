"use client";

import Image from "next/image";
import Link from "next/link";
import RevealSection from "./components/RevealSection";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=1920&h=1080&fit=crop&q=80"
          alt="料理イメージ"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-kuro via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6">
          <p className="animate-hero-subtitle text-kin text-sm tracking-[0.3em] mb-6">
            土佐の郷土料理と鰹
          </p>
          <h1 className="animate-hero-title font-mincho text-6xl md:text-8xl tracking-[0.3em] text-shiro mb-8">
            どんこ
          </h1>
          <p className="animate-hero-tagline text-shiro/60 text-base md:text-lg tracking-[0.15em] max-w-lg mx-auto leading-relaxed">
            はりまや橋のほとりで、高知の味を
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-shimmer">
          <span className="text-xs text-shiro/30 tracking-[0.2em]">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-kin/50 to-transparent" />
        </div>
      </section>

      {/* Concept */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <RevealSection>
            <div className="tosa-divider mb-12" />
          </RevealSection>

          <RevealSection delay={1}>
            <h2 className="font-mincho text-2xl md:text-4xl tracking-[0.2em] leading-relaxed mb-10">
              土佐の海と山が<br />育んだ味わい
            </h2>
          </RevealSection>

          <RevealSection delay={2}>
            <p className="text-base md:text-lg text-shiro/60 leading-[2] max-w-2xl mx-auto">
              藁焼きの炎で一気にあぶる鰹のたたき。
              黒潮が運ぶ豊かな海の幸と、四万十の恵み。
              高知・はりまや町で、土佐の郷土料理と旬の味覚を
              心ゆくまでお愉しみください。
            </p>
          </RevealSection>

          <RevealSection delay={3}>
            <div className="tosa-divider mt-12" />
          </RevealSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-32 px-6 bg-sumi/50">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p className="text-center text-kin text-sm tracking-[0.3em] mb-4">FEATURES</p>
            <h2 className="text-center font-mincho text-2xl md:text-3xl tracking-[0.2em] mb-16">
              どんこのこだわり
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "鰹のたたき",
                desc: "高知といえば鰹。藁焼きの香ばしさと、脂ののった鰹の旨みが口いっぱいに広がる名物料理です。ご予約時の事前注文がおすすめ。",
              },
              {
                title: "土佐の郷土料理",
                desc: "野菜料理・魚料理にこだわり、高知ならではの食材を活かした郷土の味をお届けします。食べログ居酒屋WEST百名店2025選出。",
              },
              {
                title: "くつろぎの空間",
                desc: "カウンター席で職人の仕事を眺めるもよし、座敷でゆったりと過ごすもよし。個室（8名様まで）もご用意しています。",
              },
            ].map((item, i) => (
              <RevealSection key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.07] hover:border-kin/20">
                  <h3 className="font-mincho text-xl tracking-[0.15em] text-kin mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-shiro/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p className="text-center text-kin text-sm tracking-[0.3em] mb-4">GALLERY</p>
            <h2 className="text-center font-mincho text-2xl md:text-3xl tracking-[0.2em] mb-12">
              料理の彩り
            </h2>
          </RevealSection>

          <RevealSection delay={1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { src: "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=600&h=600&fit=crop&q=80", alt: "鰹のたたきイメージ" },
                { src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=600&fit=crop&q=80", alt: "刺身イメージ" },
                { src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=600&fit=crop&q=80", alt: "日本酒イメージ" },
                { src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=600&fit=crop&q=80", alt: "料理イメージ" },
                { src: "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=600&h=600&fit=crop&q=80", alt: "焼き魚イメージ" },
                { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=600&fit=crop&q=80", alt: "ドリンクイメージ" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Hours & Access Summary */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <p className="text-kin text-sm tracking-[0.3em] mb-4">HOURS</p>
                <h3 className="font-mincho text-2xl tracking-[0.15em] mb-6">
                  営業時間
                </h3>
                <div className="space-y-3 text-shiro/60">
                  <p className="text-base">月・火・木・金・土・日 17:30〜23:00</p>
                  <p className="text-base mt-4">
                    定休日: <span className="text-beni-bright">水曜日</span>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-kin text-sm tracking-[0.3em] mb-4">ACCESS</p>
                <h3 className="font-mincho text-2xl tracking-[0.15em] mb-6">
                  アクセス
                </h3>
                <div className="space-y-3 text-shiro/60">
                  <p className="text-base">高知県高知市はりまや町2-1-21</p>
                  <p className="text-sm text-shiro/40">はりまや橋駅から徒歩2分</p>
                  <a
                    href="tel:088-875-2424"
                    className="inline-block mt-4 text-lg text-beni-bright hover:text-kin transition-colors duration-300 cursor-pointer"
                  >
                    088-875-2424
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={2}>
            <div className="flex flex-col sm:flex-row gap-4 mt-16 justify-center">
              <Link
                href="/menu"
                className="inline-block px-10 py-4 border border-kin/40 text-kin text-sm tracking-[0.2em] hover:bg-kin/10 transition-all duration-300 text-center cursor-pointer"
              >
                お品書きを見る
              </Link>
              <Link
                href="/info"
                className="inline-block px-10 py-4 border border-white/10 text-shiro/60 text-sm tracking-[0.2em] hover:border-kin/30 hover:text-kin transition-all duration-300 text-center cursor-pointer"
              >
                店舗情報
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
