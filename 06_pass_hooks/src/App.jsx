import { useState,useCallback, useEffect ,useRef } from "react"

function App() {

  const [length,setLength]=useState(8);

  const [numberAllowed,setNumberAllowed]=useState(false);

  const [characterAllowed,setCharacterAllowed]=useState(false);

  const [password,setPassword]=useState("");

  const passwordRef=useRef(null);


  const copypasstoclipboard=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3) //select first 3 char only
    window.navigator.clipboard.writeText(password);

  },[password])

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str=str+"0123456789";
    }
    if(characterAllowed){
      str=str+"!@#$%^&*_-+`~{}[]";
    }

    //pass of lenghtd of random value 
    //pick random value from str , length times

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass=pass+str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword])


  useEffect(()=>{
    passwordGenerator()

  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-900">

        <h1 className="text-4xl text-center text-white py-4">useEffect , useCallback</h1>

        <h1 className="text-4xl text-center text-white py-4">password generator</h1>

        <div className=" flex shadow rounded-lg overflow-hidden mb-4">

        <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly ref={passwordRef}/>

        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={()=>{
          copypasstoclipboard()}
        } >copy</button>

        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}} />
            <label>length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
            <label>Number Allowed</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={characterAllowed} id="numberInput" onChange={()=>{setCharacterAllowed((prev)=>!prev)}} />
            <label>character Allowed</label>

          </div>

        </div>
      </div>


    </>
  )
}

export default App
