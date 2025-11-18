import { useEffect, useState } from 'react'

export default function Test() {
  const [base, setBase] = useState('')
  const [api, setApi] = useState('')

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    setBase(baseUrl)
    Promise.all([
      fetch(baseUrl).then(r=>r.text()).catch(()=> 'error'),
      fetch(baseUrl + '/test').then(r=>r.json()).catch(()=> 'error'),
    ]).then(([root, test]) => {
      setApi(JSON.stringify({ root, test }, null, 2))
    })
  }, [])

  return (
    <div className="max-w-3xl mx-auto p-6 mt-24 panel pixel-border">
      <h2 className="text-xl font-bold">Connectivity test</h2>
      <p className="text-sm text-white/70">VITE_BACKEND_URL: {base}</p>
      <pre className="mt-4 text-xs whitespace-pre-wrap">{api}</pre>
    </div>
  )
}
