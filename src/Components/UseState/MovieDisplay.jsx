import React from 'react'
import { useState } from 'react';
import DisplayMovies1 from './DisplayMovies1';




export default function MovieDisplay(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count - 1);
  return (
    <div>
      <h4 style={{background: 'red'}}>Number of popy: {count}</h4>
      <button onClick={handleClick} style={{background: 'black', color: 'white'}}>Add mamun</button>
      <DisplayMovies1 Move={count}></DisplayMovies1>
      <DisplayMovies1 Move={count + 4}></DisplayMovies1>
      <DisplayMovies1 Move={count + 3}></DisplayMovies1>
      <DisplayMovies1 Move={count - 6}></DisplayMovies1>
      
       
      
    </div>




  )
}




