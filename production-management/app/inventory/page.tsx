export default function Inventory() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">庫存資料</h1>
        <table className="bg-white p-6 rounded-xl shadow-md w-96">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">產品名稱</th>
              <th className="p-2">庫存數量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">綠茶</td>
              <td className="p-2">150 瓶</td>
            </tr>
            <tr>
              <td className="p-2">紅茶</td>
              <td className="p-2">200 瓶</td>
            </tr>
            <tr>
              <td className="p-2">奶茶</td>
              <td className="p-2">180 瓶</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  