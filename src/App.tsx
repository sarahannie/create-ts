import React from 'react';
import { UseAppDispatch, UseAppSelector } from './app/hook';
import { Incremented, amountIncrement } from './feature/counter/counter_slicer';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const count = UseAppSelector((state)=> state.counter.value)
  const dispatch = UseAppDispatch()

  const handClick = () =>{
    // for increment by initial value
   // dispatch(Incremented());

   // incrementing by anyAmount
   dispatch(amountIncrement(20))
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handClick}>
          count : {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
