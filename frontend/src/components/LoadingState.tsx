export default function LoadingState() {
    return (
    //   <div className="bg-white p-4 rounded shadow animate-pulse w-full max-w-2xl mx-auto mt-6">
    //     <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    //     <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
    //     <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    //   </div>
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin opacity-75"></div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Your Startup Idea</h3>
            <p className="text-gray-600">Our AI is evaluating market potential, competition, and opportunities...</p>
          </div>
          <div className="w-full max-w-md bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
    )
}