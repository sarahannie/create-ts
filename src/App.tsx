import React, { useState } from 'react';
import { UseAppDispatch, UseAppSelector } from './app/hook';
import { Incremented, amountIncrement } from './feature/counter/counter_slicer';
import { useFetchBreedsQuery } from './feature/dogs/dog-api-slice';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const count = UseAppSelector((state)=> state.counter.value)
  const dispatch = UseAppDispatch()
  const [numData, setnumDate] = useState(10);
  const {data = [], isFetching} = useFetchBreedsQuery(numData);

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
      <div>
        <p>Dog tto fetch:</p>
        <select value={numData} onChange={(e)=> setnumDate(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>
      <div>
        <p>
          Number of dog fetched : {data.length}
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((breed)=>(
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td><img src={breed.image.url} alt={breed.name} height={250}/></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
