import { useEffect, useState } from 'react'

type Entry = {
  question: string
  answer: string
}

export default function HistoryPanel() {
  const [history, setHistory] = useState<Entry[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('query_history')
    if (stored) setHistory(JSON.parse(stored))
  }, [])

  if (history.length === 0) return null

  return (
    <div className="bg-white p-4 mt-4 rounded shadow">
      <h2 className="font-semibold text-lg mb-2">Query History</h2>
      <ul className="space-y-3 max-h-60 overflow-y-auto">
        {history.map((entry, idx) => (
          <li key={idx} className="border-b pb-2">
            <p className="text-sm font-medium">Q: {entry.question}</p>
            <p className="text-sm text-gray-600">A: {entry.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
