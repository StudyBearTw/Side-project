import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "你的密碼",
  database: "production_management",
});

export async function GET() {
  try {
    const [rawMaterials] = await db.query("SELECT material, SUM(quantity) AS total FROM raw_material GROUP BY material");
    const [productions] = await db.query("SELECT product, SUM(quantity) AS total FROM production GROUP BY product");
    const [deliveries] = await db.query("SELECT product, SUM(bottle_count) AS total FROM delivery GROUP BY product");
    const [packagings] = await db.query("SELECT SUM(bottle_count) AS total FROM packaging");

    return NextResponse.json({
      rawMaterials,
      productions,
      deliveries,
      totalPackagedBottles: packagings[0]?.total ?? 0,
    });
  } catch (error) {
    return NextResponse.json({ error: "查詢庫存資料失敗" }, { status: 500 });
  }
}
