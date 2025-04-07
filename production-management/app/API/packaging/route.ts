import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// 建立 MySQL 連線池
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "你的密碼",
  database: "production_management",
});

// 取得所有包裝輸入
export async function GET() {
  const [rows] = await db.query("SELECT * FROM packaging");
  return NextResponse.json(rows);
}

// 新增包裝輸入
export async function POST(req: Request) {
  const { worker, bottle_count } = await req.json();
  await db.query("INSERT INTO packaging (worker, bottle_count) VALUES (?, ?)", [worker, bottle_count]);
  return NextResponse.json({ message: "新增成功" }, { status: 201 });
}
