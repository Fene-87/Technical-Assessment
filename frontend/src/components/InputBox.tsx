import { useState } from 'react'

type Props = {
  setResponse: (val: string) => void
  setLoading: (val: boolean) => void
}

export default function InputBox({ setResponse, setLoading }: Props) {
  const [question, setQuestion] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    setResponse('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      })
      const data = await res.json()
      setResponse(data.answer)
      const history = JSON.parse(localStorage.getItem('query_history') || '[]')
      history.unshift({ question, answer: data.answer })
      localStorage.setItem('query_history', JSON.stringify(history))
    } catch (err) {
      setResponse('Error fetching response. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Validate Your
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Startup Idea</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Get AI-powered insights and validation for your startup concept. Analyze market potential, 
          identify risks, and discover opportunities in seconds.
        </p>
      </div>

      <div className="relative">
        <div className="mb-6">
          <label htmlFor="query" className="block text-lg font-semibold text-gray-600 mb-4">
            Ask your question
          </label>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-2">
            <div className="flex flex-col md:flex-row gap-4">
              <textarea
                id="query"
                className="flex-1 p-6 text-lg text-gray-900 placeholder-gray-500 border-0 resize-none rounded-xl focus:outline-none focus:ring-0 min-h-[120px] md:min-h-[80px]"
                rows={4}
                placeholder="e.g. How scalable is a delivery app for farm produce in rural areas?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e as any)
                  }
                }}
              />
              <button
                onClick={handleSubmit}
                disabled={!question.trim()}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                <span className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Submit</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
