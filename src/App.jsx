import { useState } from 'react'
import cuore from '../src/assets/cuore.webp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="card">
      <img src={cuore} style={{width:'130px'}} alt="" />
{/* <img src="  " alt="" /> */}
      <h1>Card Title</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    </>





)
}

export default App

