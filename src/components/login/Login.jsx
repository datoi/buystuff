import './Login.css'

import GoogleLogo from '../../assets/GoogleLogo.png';
import React,{ useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {

    const [email,setEmail] = useState("")
    const [emailValid,setEmailValid] = useState(true)
    const isValidEmail = (e)=>{
        const value = e.target.value;
        setEmail(value)
        if(value.endsWith("@gmail.com")){
            setEmailValid(true)
        }else{
            setEmailValid(false)
        }
    }
    
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='page'>
            <div className='body'>
                <div className='bodyBox'>

                    <div className='loginTitle'>
                        <h1 className='font-bold underline'>Log in to account</h1>
                    </div>
                    <div className="googleButtonBox">
                        <button className='googleButton'><p>Sign in with </p><img src={GoogleLogo} alt="GoogleLogo"/>
                        </button>
                    </div>

                    <div className='orDevider'>
                        <div>
                            <img src="" alt=""/><p>OR</p><img src="" alt=""/>
                        </div>
                    </div>
                    <div className="emailInputBox">
                        <input className='emailInput' placeholder="Email" type="text"
                        value={email}
                        onChange={isValidEmail}
                        style={{
                            borderColor: emailValid ? "":"red",
                            outline: emailValid ? "":"red"
                        }}
                        />
                    </div>
                    <div className='passwordInputBox'>
                        <input className='passwordInput' placeholder='Password'
                         type={showPassword ? "text" : "password"}
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="password-eye" onClick={passwordVisibility}>
                        {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
                        </div>
                    </div>
                    <div className='loginOptionBox'>
                        <div>
                            <p style={{marginTop: '4px'}}>Don't have any account?</p>
                        </div>
                        <div>
                            <p style={{marginTop: '4px'}}>Forgot password?</p>
                        </div>
                    </div>
                    <div className='loginButtonBox'>
                        <button className='loginButton'>Log in</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login