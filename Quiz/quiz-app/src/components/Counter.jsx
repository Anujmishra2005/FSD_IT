import React from 'react'
import { useState } from 'react';
// Example of usState Hooks
const Counter = () => {
    const [count,setCount] = useState(0);
    // const count = Array[0];
    // const setCount = Array[1];
    
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>
        {
            setCount(count+1)
        }}>Increase</button>
        <button onClick={()=>
        {
            setCount(count-1)
        }}>Decrease</button>
    </div>
  )
}

export default Counter;



// useState()
// useEffect()
// useNavigate()
// useRef()

// We can Attach these all Hooks using Functional Components

// Advantages and Disadvantes of Class Components

// 1) Components
// 2) Props
// 3) Hooks
// 4) Routing