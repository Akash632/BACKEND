import React, { useEffect, useState } from 'react'
import './App.css'


// basic components that demonstrates how to connect frontend with backend. 
function App() {
  const [jokes, setJokes] = useState([])

  const handleData = async () =>{
    const res = await fetch("/api/v1/todos");
    const data = await res.json();
    setJokes(data.data);
  }

  useEffect(()=>{
    handleData();
  },[]);
  return (
    <>
      <div>
        <h3>Todos : {jokes.length}</h3>
        {
          jokes.map((todo)=><p>{todo.title}</p>)
        }
      </div>
    </>
  )
}

export default App
