"use client";

import RevealSection from "../components/RevealSection";

const INFO_ITEMS = [
  { label: "店名", value: "どんこ" },
  { label: "ジャンル", value: "居酒屋・郷土料理・海鮮" },
  { label: "住所", value: "高知県高知市はりまや町2-1-21" },
  { label: "電話番号", value: "088-875-2424", href: "tel:088-875-2424" },
  { label: "営業時間", value: "月・火・木・金・土・日 17:30〜23:00" },
  { label: "定休日", value: "水曜日" },
  { label: "座席", value: "カウンター席・座敷席（個室あり、8名様まで）" },
  { label: "予約", value: "電話にて受付（鰹のたたきは事前注文推奨）" },
  { label: "お支払い", value: "現金、VISA、JCB、AMEX、Diners" },
  { label: "アクセス", value: "はりまや橋駅から徒歩2分" },
  { label: "喫煙", value: "全席禁煙" },
  { label: "価格帯", value: "5,000円〜6,000円" },
];

export default function InfoPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 text-center">
        <p className="text-kin text-sm tracking-[0.3em] mb-4">INFORMATION</p>
        <h1 className="font-mincho text-4xl md:text-5xl tracking-[0.25em]">
          店舗情報
        </h1>
        <div className="tosa-divider mt-10" />
      </section>

      {/* Info Table */}
      <section className="px-6 max-w-3xl mx-auto mb-20">
        <RevealSection>
          <div className="border border-white/10 divide-y divide-white/5">
            {INFO_ITEMS.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 p-5"
              >
                <dt className="text-sm text-kin/70 tracking-[0.1em]">
                  {item.label}
                </dt>
                <dd className="text-base text-shiro/70">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-kin transition-colors duration-300 cursor-pointer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Google Maps */}
      <section className="px-6 max-w-4xl mx-auto mb-20">
        <RevealSection>
          <p className="text-kin text-sm tracking-[0.3em] mb-4 text-center">
            MAP
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl tracking-[0.2em] mb-10 text-center">
            アクセスマップ
          </h2>

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

          <p className="text-center text-shiro/40 text-sm mt-4">
            高知県高知市はりまや町2-1-21 ／ はりまや橋駅から徒歩2分
          </p>
        </RevealSection>
      </section>
    </main>
  );
}
