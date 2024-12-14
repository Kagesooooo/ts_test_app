'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1️⃣ APIルートを呼び出す
        const response = await fetch('/api/todos');
        const data = await response.json();
        
        // 2️⃣ データをstateに保存
        setTodos(data);
      } catch (error) {
        console.error('データの取得に失敗:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {JSON.stringify(todos, null, 2)}
    </div>
  );
}
