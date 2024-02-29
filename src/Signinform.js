import React, {Usestate, useState} from 'react';
import './signInForm.css'


function Signinform(){
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

    /* function changeEmail(e){
        setEmail(e.target.value)
    }
    function ChangePassword(e){
        setPassword(e.target.value);
    } */

    function changeData(e, name){
        if(name === "email"){
            setEmail(e.target.value);
        }
        else if(name === "password"){
            setPassword(e.target.value);
        }
    }

    function handleDefaultSubmit(e){
        e.preventDefault();
        let loginDetails = {
            email : email,
            password : password
        }
        console.log(loginDetails)
    }
    return(
        <>
            <form className="sign-in-form" onSubmit={handleDefaultSubmit}>
                <div className="firstName"><input type="email" name="email" className="first-Name" placeholder="Enter your email" value={email} onChange={(e)=>changeData(e, "email")  /* onChange={(e)=>{setEmail(e.target.value)} */}/></div>
                <div className="passWord"><input type="password"  name ="password" className="password" placeholder='Enter your password' value={password} onChange={(e)=>changeData(e, "password")}/></div>
                <div className="send"><button type="submit" className="submit">Sign In</button></div>
            </form>
        </>
        )
}
export default Signinform;