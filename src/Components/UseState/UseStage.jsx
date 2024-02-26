import React from 'react'
import { useState } from 'react';

export default function UseStage(props) {
    const [count, setCount] = useState();
    const handleClick = () => setCount(count + 1);
  return (
    <div className='d-flex'>
     

<button onClick={handleClick} style={{background: 'black', color: 'white'}} >Add mamun</button>
<h3 className='ms-5' style={{background: 'blue'}}>Number of mamun: {count}</h3>

    </div>

  
  )
}

