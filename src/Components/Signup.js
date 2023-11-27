
import React, { useContext } from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TokenContext from "../Context/TokenContext";
import { useNavigate } from "react-router-dom";


const Signup=()=>{
    const [user , setUser]=useState({
        name:"",
        email:"",
        password:""
    });

    const [error , setError]=useState();
    const[success , setSuccess]=useState();
    let {token , setToken} = useContext( TokenContext);

    const {name, email, password}=user;
    const navigate= useNavigate();

   useEffect(()=>{
    console.log(user);
   },[user]);

   

        const adduser=(e)=>{
            e.preventDefault();

            if(name==="" || email==="" || password===""){
                setError("all fields are mandatory");
                return;
            }

            axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
                "name":name,
                "email":email,
                "password":password
            })
            .then((res)=>{
                        setSuccess(res.data.message)
                        setError("")
                        console.log(res.data.data.token);
                        setToken(res.data.data.token)
                        localStorage.setItem('usertoken', res.data.data.token)
                        navigate("/login");
                        console.log(res.data.message);
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
            <input type="text" placeholder="Type your name" 
            onChange={(e)=>{setUser({...user, name:e.target.value})}} />

            <input type="email" placeholder="Type E-mail"
            onChange={(e)=>{setUser({...user, email:e.target.value})}} />

            <input type="password" placeholder="Type password"
            onChange={(e)=>{setUser({...user, password:e.target.value})}} />

            <button className="signupbtn">Submit</button>

            </form>


        </div>
    )
}

export default Signup;   