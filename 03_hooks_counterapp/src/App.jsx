import { useState } from "react";


function App() {

  // let counter=5;

  const [counter,setCounter]=useState(0);



  return (
    <>
      <h1>Chai or react</h1>

      <h2 id="h1">counter value:{counter}</h2>

       {/* <button onClick={()=>{
        counter++;
        document.getElementById('h1').innerHTML=counter;


      }}>add value</button>
      <button onClick={()=>{
        counter--;
        document.getElementById('h1').innerHTML=counter;

      }}>decrease value</button> */}
      

    <button onClick={()=>{
      if(counter==20){
        return;
      }
      setCounter(counter+1);
    }}>increase</button>

    <button onClick={()=>{
      if(counter==0){
        return;
      }
      setCounter(counter-1);
    }}>decrease</button>

    </> 

  )
}

export default App
