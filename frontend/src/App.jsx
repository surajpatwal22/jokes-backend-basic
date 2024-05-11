import { useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  
  return (
    <>
     <h1> Client side is working</h1> 
     <p> jokes: {jokes.length}</p>
     {
      jokes.map((joke,index)=>{
        return(<div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>)
      })
      }
    </>
  )
}

export default App
