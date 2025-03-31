import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">生產與庫存管理系統</h1>
      <div className="grid grid-cols-2 gap-4">
        <LinkButton href="/production" label="生產輸入" />
        <LinkButton href="/Packaging" label="包裝輸入" />
        <LinkButton href="/Rawmaterials" label="原料進貨輸入" />
        <LinkButton href="/Distribution" label="配送輸入" />
        <LinkButton href="/inventory" label="庫存資料" />
        <LinkButton href="/Alerts" label="警示資訊" />
      </div>
    </div>
  );
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <button className="bg-blue-500 text-white p-4 rounded-xl w-48 text-lg hover:bg-blue-700">
        {label}
      </button>
    </Link>
  );
}
