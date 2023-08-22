import React  from "react";
import "../src/Entertask.css"
import Checkbox from "./Checkbox";
import Delete from "./Delete";






function Check(props) {
    
    
 
    
   
    return (
        <>
     
      
      <div className="tasksLists"> <span > {props.taskName}  <span className="checked"> { props.checke ? " ( complete ) "   : ""}   </span> </span>  </div>
      <Checkbox handleCheckboxChange = {props.handleCheckboxChange} checke= {props.checke} taskId = {props.taskId} />
      <Delete handleDelete = {props.handleDelete} taskId = {props.taskId}/>
      
      
        
   

        </>
    )
}
export default Check