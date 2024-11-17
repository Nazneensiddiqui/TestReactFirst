import { useState } from "react";


const Course=()=>{
    const[cnt , setcnt]=useState(0)
return(
        <>
     <center>
       <h1>Course page</h1> 
       <h1>my counter by 10</h1>
    <button onClick={()=>{setcnt(cnt+10)}}>Increment</button>
    <h2>{cnt} </h2>
    <button onClick={()=>{setcnt(cnt-10)}}>Decrement</button>
         </center>   
        </>
    )
}
export default Course;