import React from "react";


function Checkbox({handleCheckboxChange , checke ,taskId} ) {
    
    return (
        <input checked={checke}  type="checkbox" onChange={() => handleCheckboxChange (taskId)} />

        )
         
}

export default Checkbox