import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "你的密碼",
  database: "production_management",
});

// 取得原料進貨
export async function GET() {
  const [rows] = await db.query("SELECT * FROM raw_material");
  return NextResponse.json(rows);
}

// 新增原料進貨
export async function POST(req: Request) {
  const { material, quantity } = await req.json();
  await db.query("INSERT INTO raw_material (material, quantity) VALUES (?, ?)", [material, quantity]);
  return NextResponse.json({ message: "新增成功" }, { status: 201 });
}
