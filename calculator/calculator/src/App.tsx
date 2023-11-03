import { useState } from 'react'
import img1 from './assets/ornament_1.jpg'
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
          <div >
            <div>
              <button>%</button>
              <button>C</button>
              <button>CE</button>
              <button>&#60;</button>
            </div>
            
            <div>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>+</button>
            </div>
            
            <div>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>-</button>
            </div>
            

            <div>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>*</button>
            </div>
            

            <div>
              <button>+/-</button>
              <button>0</button>
              <button>,</button>
              <button>=</button>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default App
