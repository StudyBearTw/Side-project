export default function Production() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">生產輸入</h1>
        <form className="bg-white p-6 rounded-xl shadow-md">
          <label className="block mb-2">生產人員：</label>
          <input type="text" className="border p-2 rounded w-full mb-4" placeholder="輸入姓名" />
  
          <label className="block mb-2">生產產品：</label>
          <input type="text" className="border p-2 rounded w-full mb-4" placeholder="輸入產品名稱" />
  
          <label className="block mb-2">生產日期：</label>
          <input type="date" className="border p-2 rounded w-full mb-4" />
  
          <label className="block mb-2">生產數量（鍋數）：</label>
          <input type="number" className="border p-2 rounded w-full mb-4" />
  
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">提交</button>
        </form>
      </div>
    );
  }
  