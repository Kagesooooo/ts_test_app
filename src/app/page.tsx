import Image from "next/image";
import { dataArray } from "./table"
import { formatDate } from "./utils"; 

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <table className="min-w-full divide-y divide-gray-200 table-auto border-collapse">
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ToDo</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">内容</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">開始日</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">期限</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ステータス</th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {dataArray.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.title}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.contents}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{formatDate(item.start_date)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{formatDate(item.end_date)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.status}</td>
                </tr>
              ))}
        </tbody>
      </table>
      </main>
    </div>
  );
}
