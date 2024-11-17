import { Link , Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <div style={{width:"100%", height:"50px", backgroundColor:"aqua", border:"1px solid red"}}>
    <Link to = "home">Home</Link>  || 
    <Link to = "about">About</Link>   ||
    <Link to = "faculty">Faculty</Link>    ||
    <Link to = "contact">Contact us</Link>   ||
    <Link to = "course">Course</Link>     ||
    </div>
    <hr/>
     <Outlet/>
     <hr/>
        </>
    )
}
export default Layout;