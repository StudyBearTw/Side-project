export default function Alerts() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">警示資訊</h1>
        <p className="text-red-500 font-bold">⚠ 原物料數量過低</p>
        <p className="text-red-500 font-bold">⚠ 包裝數量與生產數量差距過大</p>
      </div>
    );
  }