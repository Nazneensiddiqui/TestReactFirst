import { BrowserRouter, Routes , Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./about";
import Contact from "./contact";
import Course from "./course";
import Faculty from "./faculty";


const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index  element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="faculty" element={<Faculty/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="course" element={<Course/>}/>
 
</Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App;