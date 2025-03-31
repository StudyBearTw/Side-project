export default function RawMaterials() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">原料進貨輸入</h1>
        <form className="bg-white p-6 rounded-xl shadow-md w-96">
          <label className="block mb-2">選擇原料：</label>
          <input type="text" className="border p-2 rounded w-full mb-4" placeholder="輸入原料名稱" />
  
          <label className="block mb-2">數量輸入：</label>
          <input type="number" className="border p-2 rounded w-full mb-4" />
  
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700">
            提交
          </button>
        </form>
      </div>
    );
  }