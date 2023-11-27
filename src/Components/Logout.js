import React from "react";
import TokenContext from "../Context/TokenContext";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";


const Logout=()=>{

    let {token}=useContext(TokenContext);
    const [success , setSuccess]=useState();
    

            const logoutbtn=()=>{

                     axios.delete("https://instagram-express-app.vercel.app/api/auth/logout",
                        {
                             headers:{
                                        Authorization : `Bearer ${token}`
                                     }
                        })
                     .then((res)=>{
                        setSuccess(res.data.message)
                       
                    })

            }
    
    return(
        <div>
                 <button onClick={logoutbtn}>Logout</button>   
                 <p>{success}</p>
        
        </div>
    )
}

export default Logout;

