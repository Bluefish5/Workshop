import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
      <>
        <div className='main-calculator'>
          <div className='calculator-screen'>
            <p>0</p>
          </div>
          <div className='calculator-keyboard'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>9</button>
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
          </div>
          
        </div>
    </>
  )
}

export default App
