import React from "react";
import './login.css'
import { useEffect, useState } from "react";



function Login() {

    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    useEffect(()=>{
        if (
            form.email !== "" &&
            form.password !== ""
         
        ){
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [form])

   

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))
        
        window.location="/team"
    }

    
    return <>
    <div className="log">
        <h1 className="wel">Welcome Back!</h1>
        <form className="form" onSubmit={submitHandler}>
            Email: <br/>
            <input type= "email"  name="email" onChange={handleChange} required/> <br/> <br/>
            Password: <br/>
            <input type="password" name="password" onChange={handleChange} required/> <br/> <br/>
            <button className= {formValid?"auth_signup-active":"auth_signup-submit"} type="submit" name="button">submit</button>
        </form>
     </div>
    </>
}

export default Login;