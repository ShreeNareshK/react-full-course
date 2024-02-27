import React, {useState} from 'react';
import './useState.css';

function Usestate(){

    const [captcha, setCaptcha] = useState("");
    

    function generateCaptcha(){
        let captchaValue='';
        const characters=' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
        for(var index = 0; index < 6; index++){
            const randomIndex = Math.floor(Math.random()*characters.length)
            captchaValue=captchaValue+characters.charAt(randomIndex);
        }
        setCaptcha(captchaValue);
    }
        
    
    return(
        <>
        <div className="container">
            <div><input type="text" className="textbox" value={captcha} readOnly/></div>
            <div ><button className="submit" onClick={generateCaptcha}>Generate Captcha</button></div>
        </div>
        </>
    )
}
export default Usestate;