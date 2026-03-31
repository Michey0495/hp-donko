"use client";

import Image from "next/image";
import RevealSection from "../components/RevealSection";

interface MenuItem {
  name: string;
  price?: string;
  desc?: string;
}

interface MenuCategory {
  title: string;
  titleEn: string;
  items: MenuItem[];
  image?: string;
}

const MENU_CATEGORIES: MenuCategory[] = [
  {
    title: "鰹料理",
    titleEn: "KATSUO",
    image:
      "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=640&h=640&fit=crop&q=80",
    items: [
      { name: "鰹のたたき", desc: "藁焼きの香ばしさが際立つ、どんこの名物。ご予約時の事前注文がおすすめです" },
      { name: "鰹の刺身", desc: "新鮮な鰹を厚切りで。薬味とともに" },
      { name: "鰹の酒盗", desc: "鰹の内臓を塩辛にした土佐の珍味。日本酒との相性は抜群" },
      { name: "鰹のハランボ", desc: "腹身の希少部位を炙りで" },
    ],
  },
  {
    title: "土佐の郷土料理",
    titleEn: "TOSA LOCAL",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=640&h=640&fit=crop&q=80",
    items: [
      { name: "のれそれ", desc: "穴子の稚魚。春の珍味（季節限定）" },
      { name: "どろめ", desc: "生しらす。高知ならではの味わい（季節限定）" },
      { name: "ウツボのたたき", desc: "コラーゲンたっぷり。高知の隠れた名物" },
      { name: "チャンバラ貝", desc: "殻から飛び出す姿が特徴的な巻き貝" },
      { name: "四万十川の青のり天ぷら", desc: "香り高い四万十の青のりを使った天ぷら" },
    ],
  },
  {
    title: "海鮮・一品",
    titleEn: "SEAFOOD & SIDES",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=640&h=640&fit=crop&q=80",
    items: [
      { name: "本日のお造り盛り合わせ", desc: "その日の仕入れから厳選した旬の刺身" },
      { name: "焼き魚", desc: "日替わりの旬魚を丁寧に焼き上げます" },
      { name: "季節の煮物", desc: "旬の食材を使った煮物" },
      { name: "野菜の炊き合わせ", desc: "高知の新鮮野菜をじっくりと" },
      { name: "〆のご飯もの", desc: "日替わりでご用意しています" },
    ],
  },
  {
    title: "お飲み物",
    titleEn: "DRINKS",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=640&h=640&fit=crop&q=80",
    items: [
      { name: "土佐の地酒各種", desc: "酔鯨、土佐鶴、美丈夫など高知の銘酒を取り揃え" },
      { name: "生ビール", price: "" },
      { name: "焼酎各種", price: "" },
      { name: "ハイボール", price: "" },
      { name: "ソフトドリンク", price: "" },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 text-center">
        <p className="text-kin text-sm tracking-[0.3em] mb-4">MENU</p>
        <h1 className="font-mincho text-4xl md:text-5xl tracking-[0.25em]">
          お品書き
        </h1>
        <div className="tosa-divider mt-10" />
        <p className="text-shiro/40 text-sm mt-8 max-w-md mx-auto leading-relaxed">
          価格帯の目安: お一人様 5,000円〜6,000円程度。仕入れや季節により内容が変わります。
        </p>
      </section>

      {/* Menu Categories */}
      <section className="px-6 max-w-5xl mx-auto">
        {MENU_CATEGORIES.map((cat, catIndex) => (
          <RevealSection key={cat.title} className="mb-24 last:mb-0">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${
                catIndex % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              {cat.image && (
                <div
                  className={`relative aspect-square overflow-hidden ${
                    catIndex % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={`${cat.title}イメージ`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kuro/40 to-transparent" />
                </div>
              )}

              {/* Items */}
              <div className={catIndex % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-kin/60 text-xs tracking-[0.3em] mb-2">
                  {cat.titleEn}
                </p>
                <h2 className="font-mincho text-2xl md:text-3xl tracking-[0.2em] mb-8">
                  {cat.title}
                </h2>

                <div className="space-y-5">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="group border-b border-white/5 pb-4"
                    >
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-base text-shiro/80 group-hover:text-kin transition-colors duration-300">
                          {item.name}
                        </h3>
                        {item.price && (
                          <span className="text-sm text-shiro/40 ml-4 shrink-0">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {item.desc && (
                        <p className="text-xs text-shiro/35 mt-1.5 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {catIndex < MENU_CATEGORIES.length - 1 && (
              <div className="gold-line mt-20" />
            )}
          </RevealSection>
        ))}
      </section>
    </main>
  );
}
