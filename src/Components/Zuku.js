  import React, { useEffect } from "react";
  import axios from "axios";
  import TokenContext from "../Context/TokenContext";
  import { useContext } from "react";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";

  const Zuku = ()=>{
    const [name , setName]=useState();
    // const [error , setError]=useState();
    let {token}=useContext(TokenContext);
    const navigate=useNavigate();

        useEffect(()=>{
            if(token){
                axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",
        {
            headers:{
                Authorization : `Bearer ${token}`
            }
        })
        .then((res)=>{
            setName(res.data.data.message)
            setTimeout(()=>{navigate("/logout")},9000)
            
        })
        // .catch((err)=>{setError(err.response.data.message)})

            }
        },[token,navigate]);

    return(
        <div>
            
            <p>{name}</p>
            {/* <p>{error}</p> */}
        </div>
    )
  }

  export default Zuku;
