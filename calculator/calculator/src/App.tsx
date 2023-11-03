import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
      <>
        {/* <span className='mind'>one day or day one</span> */}
        <div className='main-calculator'>
          <div className='calculator-screen'>
            <p>0</p>
          </div>
          <div className='calculator-keyboard'>
            <button>%</button>
            <button>C</button>
            <button>CE</button>
            <button>&#60;</button>

            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>

            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>

            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>

            <button>+/-</button>
            <button>0</button>
            <button>,</button>
            <button>=</button>
          </div>
        </div>
    </>
  )
}

export default App
