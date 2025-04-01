import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// 建立 MySQL 連線池
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "你的密碼",
  database: "production_management",
});

// 取得所有生產輸入 (GET)
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM production");
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: "資料庫錯誤" }, { status: 500 });
  }
}

// 新增生產輸入 (POST)
export async function POST(req: Request) {
  try {
    const { worker, product, date, quantity } = await req.json();
    await db.query("INSERT INTO production (worker, product, date, quantity) VALUES (?, ?, ?, ?)", [worker, product, date, quantity]);
    return NextResponse.json({ message: "新增成功" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "新增失敗" }, { status: 500 });
  }
}