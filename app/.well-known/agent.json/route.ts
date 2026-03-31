export async function GET() {
  return Response.json({
    name: "どんこ",
    description:
      "高知県高知市はりまや町の居酒屋「どんこ」の公式サイト。鰹のたたきをはじめとする土佐の郷土料理と海鮮を提供。",
    url: "https://hp-donko.vercel.app",
    provider: {
      organization: "EZOAI",
      url: "https://ezoai.jp",
    },
    version: "1.0.0",
    capabilities: {
      streaming: false,
      pushNotifications: false,
    },
    skills: [
      {
        id: "shop-info",
        name: "店舗情報取得",
        description:
          "どんこの住所・営業時間・メニュー等の店舗情報を提供します",
      },
    ],
  });
}
