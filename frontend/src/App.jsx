import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/v1/jokes')
    .then((response)=>{
      setJokes(response.data);
    })
    .catch((err) => console.log(err))
  },[]);

  const Deletejoke = id =>{
    axios.delete(`/api/v1/jokes/${id}`).then(()=>{
      setJokes(jokes.filter(joke => joke.id != id));
    });
  };

  
  return (
    <>
     <h2 className='text-primary'> Basic full stack app </h2> 
     <div className='container-fluid'>
      <div className="row">
     {
      jokes.map((joke)=>{
        return(<div className='col-lg-4 mb-2' key={joke.id}>
         <div className="card">
          <div className="card-header d-flex justify-content-between">
            {joke.id}
            <div>
              <button className="btn btn-sm bg-primary mx-1 text-white"> <a href="#" className='text-white text-button' > Edit </a> </button>
              <button className="btn btn-sm bg-primary mx-1 text-white" onClick={()=> Deletejoke(joke.id)}>Delete</button>

            </div>
          </div>
          <div className="card-body">
          <h4>{joke.title}</h4>
          <p>{joke.content}</p>
          </div>
         </div>
        </div>)
      })
      }
     </div>
     </div>
     
    </>
  )
}

export default App
