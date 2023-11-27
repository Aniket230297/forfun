import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TokenContext from "../Context/TokenContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const [user , setUser]=useState({
        email:"",
        password:""
    });

    const [error , setError]=useState();
    const[success , setSuccess]=useState();
    let {token , setToken} = useContext( TokenContext);

    const { email, password}=user;
    const navigate=useNavigate();

   useEffect(()=>{
    console.log(user);
   });

        const adduser=(e)=>{
            e.preventDefault();

            axios.post("https://instagram-express-app.vercel.app/api/auth/login",{
                "email":email,
                "password":password
            })
            .then((res)=>{setSuccess(res.data.message);
                          setToken(res.data.data.token)
                        setError("")
                        navigate("/zuku")
            })
            .catch((err)=>{setError(err.response.data.message)
                    setSuccess("");
            })

        }

        console.log(token);

    return(
        <div className="signupform">
            <div className="msgerror">{error}</div>
             <div className="msgsuccess">{success}</div>   

            <form onSubmit={adduser} className="userform">
           
            <input type="email" placeholder="type E-mail"
            onChange={(e)=>{setUser({...user, email:e.target.value})}} />

            <input type="password" placeholder="type password"
            onChange={(e)=>{setUser({...user, password:e.target.value})}} />

            <button className="signupbtn">Submit</button>

            </form>


        </div>
    )
}

export default Login;