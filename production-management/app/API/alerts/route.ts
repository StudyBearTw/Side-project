import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "Local instance 3306",
  user: "root",
  password: "AdamHsueh11",
  database: "production_management",
});

export async function GET() {
  const alerts = [];

  // 原料數量過低警示 (低於 10)
  const [rawMaterials] = await db.query("SELECT material, SUM(quantity) AS total FROM raw_material GROUP BY material");
  rawMaterials.forEach((m: any) => {
    if (m.total < 10) {
      alerts.push(`⚠️ 原料「${m.material}」剩餘量過低（${m.total}）`);
    }
  });

  // 包裝瓶數與生產鍋數差距過大（假設每鍋應該出 10 瓶）
  const [productionSum] = await db.query("SELECT SUM(quantity) AS total FROM production");
  const [packagingSum] = await db.query("SELECT SUM(bottle_count) AS total FROM packaging");

  const produced = productionSum[0]?.total ?? 0;
  const packaged = packagingSum[0]?.total ?? 0;
  const expectedBottles = produced * 10;

  if (Math.abs(expectedBottles - packaged) > 50) {
    alerts.push(`⚠️ 包裝瓶數與生產預期相差過大（預期 ${expectedBottles}，實際 ${packaged}）`);
  }

  return NextResponse.json({ alerts });
}
