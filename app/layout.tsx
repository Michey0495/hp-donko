import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hp-donko.vercel.app"),
  title: {
    default: "どんこ | 高知はりまや町の郷土料理と鰹のたたき",
    template: "%s | どんこ",
  },
  description:
    "高知県高知市はりまや町の居酒屋「どんこ」。名物の鰹のたたきをはじめ、土佐の郷土料理と新鮮な海鮮を堪能できる。食べログ居酒屋WEST百名店2025選出。はりまや橋駅から徒歩2分。",
  keywords: [
    "どんこ",
    "高知",
    "居酒屋",
    "鰹のたたき",
    "郷土料理",
    "海鮮",
    "はりまや町",
    "土佐",
  ],
  openGraph: {
    title: "どんこ | 高知はりまや町の郷土料理と鰹のたたき",
    description:
      "名物の鰹のたたきと土佐の郷土料理。食べログ居酒屋WEST百名店2025選出の名店。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;600;700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "どんこ",
              description:
                "高知はりまや町の郷土料理店。鰹のたたきが名物。食べログ居酒屋WEST百名店2025選出。",
              address: {
                "@type": "PostalAddress",
                streetAddress: "はりまや町2-1-21",
                addressLocality: "高知市",
                addressRegion: "高知県",
                addressCountry: "JP",
              },
              telephone: "088-875-2424",
              servesCuisine: "郷土料理・海鮮",
              priceRange: "¥5,000〜¥6,000",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "17:30",
                  closes: "23:00",
                },
              ],
              paymentAccepted: "VISA, JCB, AMEX, Diners",
              url: "https://hp-donko.vercel.app",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
