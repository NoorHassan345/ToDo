import React , {useState} from "react";
import "../src/Entertask.css"


function Check(pros) {
    const [checked , setChecked] = useState()

    const checkk = (event) => {
        if (event.target.checked) {
        return setChecked('done')
        }
        else {
          return setChecked ()
        }
        }

    return (
        
        <li   >
        
        <span  > {pros.itemv}  <span className="chek">{checked} </span>   </span>
        <input  type="checkbox" onChange={checkk} />
        </li>
        
    )
}
export default Check