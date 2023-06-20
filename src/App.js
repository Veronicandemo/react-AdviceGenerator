import { useEffect, useState } from 'react'
import Message from './components/Message'

function App() {
  const [count, setCount] = useState(0)
  const [advice, setAdvice] = useState('')
  const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setAdvice(data.slip.advice)
    setCount((currentCount) => currentCount + 1)
  }
  useEffect(() => {
    getAdvice()
  }, [])
  return (
    <div className="container">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  )
}

export default App
