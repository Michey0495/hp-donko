import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-kuro border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Shop info */}
          <div>
            <h3 className="font-mincho text-2xl tracking-[0.2em] text-shiro mb-4">
              どんこ
            </h3>
            <p className="text-sm text-shiro/50 leading-relaxed">
              土佐の味覚と酒を愉しむ郷土料理の店
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm text-kin tracking-[0.15em] mb-4">
              ご案内
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-shiro/60 hover:text-kin transition-colors duration-300"
              >
                トップ
              </Link>
              <Link
                href="/menu"
                className="text-sm text-shiro/60 hover:text-kin transition-colors duration-300"
              >
                お品書き
              </Link>
              <Link
                href="/info"
                className="text-sm text-shiro/60 hover:text-kin transition-colors duration-300"
              >
                店舗情報
              </Link>
              <Link
                href="/contact"
                className="text-sm text-shiro/60 hover:text-kin transition-colors duration-300"
              >
                お問い合わせ
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm text-kin tracking-[0.15em] mb-4">
              ご予約・お問い合わせ
            </h4>
            <a
              href="tel:088-875-2424"
              className="text-lg text-shiro/80 hover:text-kin transition-colors duration-300"
            >
              088-875-2424
            </a>
            <p className="text-sm text-shiro/40 mt-2">
              月・火・木・金・土・日 17:30〜23:00
            </p>
          </div>
        </div>

        <div className="gold-line mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-shiro/30">
            ※掲載写真はイメージです。実際の料理・店内とは異なります。
          </p>
          <p className="text-xs text-shiro/30">
            本サイトは
            <a
              href="https://ezoai.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-shiro/40 hover:text-kin transition-colors duration-300"
            >
              EZOAI
            </a>
            によるデモ制作です
          </p>
        </div>
      </div>
    </footer>
  );
}
