// import { useState } from 'react'
// import InputBox from '../components/InputBox'
// import ResponseCard from '../components/ResponseCard'
// import LoadingState from '../components/LoadingState'
// import Footer from '@/components/Footer';
// import Header from '@/components/Header';

// export default function Home() {
//   const [response, setResponse] = useState('')
//   const [loading, setLoading] = useState(false)

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-1 p-4">
//         <InputBox setResponse={setResponse} setLoading={setLoading} />
//         {loading ? <LoadingState /> : <ResponseCard content={response} />}
//       </main>
//       <Footer />
//     </div>
//   )
// }

export default function Home() {
  return (
    <div>
      <h1>Hello World - Test</h1>
      <p>If you see this, routing works!</p>
    </div>
  );
}