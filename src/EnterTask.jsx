import React, { useState } from "react";
import "../src/Entertask.css"
import Check from "./Check";



function EnterTask() {
    const [task , settask] = useState('')
    const [displaytask , setdisplaytask] = useState([])
    
   
    
    
    
const change = (e) => {
    settask(e.target.value)
    

}
const click = (event) => {
    
    event.preventDefault();
    
    setdisplaytask( (olditems) => { 
        return [...olditems , task];
        
    } );
    
    settask('')
};
  return (
   
    <>
    <form >
    <div>
    <div className="Entertask mt-5">
      <input className="form-control " type="text" value={task}  onChange={change}  placeholder="ENTER TASK TO ADD"  />
      <button onClick={click} disabled={!task} className="btn btn-primary">submit</button>
      </div>
      </div>
      <ol>  
      
        {
            displaytask.map((itemvalu , index) => (
                
                <Check itemv = {itemvalu} key={index} />
            ))
        }
        
      </ol>
     
       <div>
  
</div> 
      
      </form>
      
    </>
  )

    }
export default EnterTask;