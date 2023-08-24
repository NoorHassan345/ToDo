import React from "react";
import "../src/Entertask.css"

function Delete({handleDelete , taskId}) {
    return (
        <button className="btn btn-danger btn-sm butonDelete" onClick={() =>handleDelete(taskId)} type="button" >Delete </button>
    )
}
export default Delete 