import { ReactDOM } from "react";
import React, { useEffect, useState } from "react";
import "../src/Entertask.css"
import Check from "./Check";





function EnterTask() {
  const [name , setname] = useState('')
  const [data , setdata] = useState ([])
  const [selectedmap , setselectedmap] = useState(1)
  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setdata(JSON.parse(storedData));
    }
  }, []);  

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);


const handleTaskChange = (event) => {
  setname(event.target.value)
}




const handleSubmit = (event) => {
  const newtask = {
    username : name,
    id : Math.random(), 
    check : false
    
  }
  event.preventDefault()

setdata ([...data ,newtask ])

setname('')

} 





const handleDelete = (id) => {
  const updatedData = data.filter((item) => item.id !== id);
  setdata(updatedData);
};






const handleCheckboxChange = (id) => {
  setdata(prevTasks => prevTasks.map((itemvalu) =>
  itemvalu.id === id ? { ...itemvalu, check: !itemvalu.check } : itemvalu
  ) 
  );
  
  
  
};



const complete = data.filter(itemvalu => itemvalu.check)
const incomplete = data.filter(itemvalu => !itemvalu.check)








  return (


    <>
   
   
    


    <form onSubmit={handleSubmit} >
    <button type="button" className="buton btn btn-success" onClick={ () => setselectedmap(3) } > Completed Tasks </button>
   <button type="button" className="buton btn btn-warning" onClick={() => setselectedmap(2)} > Inompleted Tasks </button>
   <button type="button" className="buton btn btn-secondary" onClick={() => setselectedmap(1)} > All Tasks </button>
    <input type="text"  placeholder="ENTER NAME" className="form-control"  value={name} onChange={handleTaskChange}   />
    <button className="btn btn-primary submit" type="submit" >submit</button>



    <ol>   
   
   
      
      
   
   { 
    selectedmap === 1 &&  
     
     data.map( itemvalu   => <div> 
     {console.log("all tasks")}
        <li className="list" key={itemvalu.id}>
        <Check data = {data}  handleCheckboxChange = {handleCheckboxChange}  handleDelete = {handleDelete} checke= {itemvalu.check} taskId = {itemvalu.id} taskName = {itemvalu.username} />
        </li>
        
      
        </div> 
        )
      }  
      
  {
    selectedmap === 2 &&
    incomplete.map( itemvalu => <div>
    
        <li key={itemvalu.id}  >
        <Check  data = {data}  handleCheckboxChange = {handleCheckboxChange}  handleDelete = {handleDelete} checke= {itemvalu.check} taskId = {itemvalu.id} taskName = {itemvalu.username} />
        </li>
        </div>
        ) 
  }
  
  {
    selectedmap === 3 &&
    complete.map( itemvalu =>  <div>
    {console.log("complete")}
        <li key={itemvalu.id}>
        <Check data = {data}  handleCheckboxChange = {handleCheckboxChange}  handleDelete = {handleDelete} checke= {itemvalu.check} taskId = {itemvalu.id} taskName = {itemvalu.username} />
        </li>
        </div>
        ) 
  }
         
    
    
   
      
       
    </ol>
   
   
      
      
   


   
    </form>
    </>
  ) 
  } 
export default EnterTask