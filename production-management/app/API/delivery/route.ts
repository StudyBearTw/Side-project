import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "你的密碼",
  database: "production_management",
});

// 取得所有配送紀錄
export async function GET() {
  const [rows] = await db.query("SELECT * FROM delivery");
  return NextResponse.json(rows);
}

// 新增配送紀錄
export async function POST(req: Request) {
  const { store, products } = await req.json();
  // 假設 products 是陣列，每個項目包含 product 和 bottle_count
  for (const p of products) {
    await db.query(
      "INSERT INTO delivery (store, product, bottle_count) VALUES (?, ?, ?)",
      [store, p.product, p.bottle_count]
    );
  }
  return NextResponse.json({ message: "配送新增成功" }, { status: 201 });
}
