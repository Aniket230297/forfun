import React from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Zuku from "./Components/Zuku.js";
import Logout from "./Components/Logout";


const App= ()=>{


  return(
         <div>
            {/* <Signup />
            <Login /> */}

            <Routes>
                <Route path="/" element={<Signup />} /> 
              <Route  path="/login" element={<Login />}/>
              <Route path="/zuku" element={<Zuku />} />
              <Route path="/logout" element={<Logout />}/>
              
            </Routes>
           
        
         </div>
  )
}

export default App;