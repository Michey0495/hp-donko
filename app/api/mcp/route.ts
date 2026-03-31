import { NextRequest } from "next/server";

const SHOP_INFO = {
  name: "どんこ",
  genre: "居酒屋・郷土料理・海鮮",
  address: "高知県高知市はりまや町2-1-21",
  phone: "088-875-2424",
  hours: "月・火・木・金・土・日 17:30〜23:00",
  closedDays: "水曜日",
  access: "はりまや橋駅から徒歩2分",
  seating: "カウンター席・座敷席（個室あり、8名様まで）",
  payment: ["現金", "VISA", "JCB", "AMEX", "Diners"],
  priceRange: "5,000円〜6,000円",
  smoking: "全席禁煙",
  specialties: ["鰹のたたき", "土佐の郷土料理", "海鮮"],
  url: "https://hp-donko.vercel.app",
};

export async function GET() {
  return Response.json({
    jsonrpc: "2.0",
    result: {
      name: "donko-mcp",
      version: "1.0.0",
      description: "どんこ店舗情報MCPサーバー",
      tools: [
        {
          name: "get_shop_info",
          description: "どんこの店舗情報を取得します",
          inputSchema: { type: "object", properties: {} },
        },
      ],
    },
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { method } = body;

  if (method === "tools/list") {
    return Response.json({
      jsonrpc: "2.0",
      id: body.id,
      result: {
        tools: [
          {
            name: "get_shop_info",
            description: "どんこの店舗情報を取得します",
            inputSchema: { type: "object", properties: {} },
          },
        ],
      },
    });
  }

  if (method === "tools/call") {
    return Response.json({
      jsonrpc: "2.0",
      id: body.id,
      result: {
        content: [
          {
            type: "text",
            text: JSON.stringify(SHOP_INFO, null, 2),
          },
        ],
      },
    });
  }

  return Response.json(
    { jsonrpc: "2.0", id: body.id, error: { code: -32601, message: "Method not found" } },
    { status: 400 }
  );
}
