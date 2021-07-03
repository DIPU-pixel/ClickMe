import React, { useState } from 'react';



const App =() =>{
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("click me");
  const bgChange =()=>{
    // console.log("clicked");

   let newBg =  "#ecff33";
   setBg (newBg);
   setName("maza");
 
  };

  const bgback = ()=>{
    
    setBg (purple);
    setName("double click");
  }
  return(
    <>
    <div style = {{backgroundColor : bg}}>
     
 <button onClick={bgChange} onDoubleClick ={bgback} >{name}</button>

    </div>

    </>
  );
}



export default App;