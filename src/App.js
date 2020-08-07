import React,{useState} from 'react';
import './App.css';

export default function App(){
  let[count,setCount] = useState(0)
  return(
 <div className="main">
   <h1>Value of a counter variable is: {count}</h1>
      <button className="btn" onClick={
        () => setCount(++count)
   }>
     upgrade value
   </button>
   <button className="btn" onClick={
     () => setCount(--count)
 }>
     degrade value
   </button>
 </div>
 
 )
 }


