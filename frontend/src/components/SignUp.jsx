import React,{useState} from "react"
import { useNavigate } from "react-router-dom";

const SignUp = () =>{
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const navigate = useNavigate();

    const collectData= async()=>{
        console.warn(name,email,password)
        let result = await fetch("http://localhost:5001/register",{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          },

        });
        result = await result.json()
         console.warn(result)
         localStorage.setItem('user',JSON.stringify(result))
         if(result){
           navigate('/')
         }
    } 
 
    return(

        <div className="max-w-sm mx-auto  p-10 bg-white rounded-xl shadow-md flex flex-col gap-5">
  <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">Register</h1>


  <input
    className="inputbox px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    type="text"
    value = {name} 
    onChange={(e)=>setName(e.target.value)}
    placeholder="Enter Name"
    
  />


  <input
    className="inputbox px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    type="text"
    value = {email} 
    onChange={(e)=>setEmail(e.target.value)}
    placeholder="Enter email"
  />


  <input
    className="inputbox px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    type="password"
    value = {password} 
    onChange={(e)=>setPassword(e.target.value)}
    placeholder="Enter Password"
  />


  <button
  onClick={collectData}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
  Sign Up
 </button>


</div>

    )
}

export default SignUp;

