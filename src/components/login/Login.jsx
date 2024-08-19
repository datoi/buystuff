import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import './Login.css'
import GoogleLogo from '../../assets/GoogleLogo.png';



const Login = () => {

        const [email,setEmail] = useState("");
        const [emailError,setEmailError] = useState(true);
        
        const handleEmailChange = (e)=>{
            const value = e.target.value
            setEmail(value);
            if(value.endsWith("@gmail.com")){
                setEmailError(true);
            }else{
                setEmailError(false);
            }
        }

        const [hidePassword,setHidePassword] = useState("")
        const [showPassword,setShowPassword] = useState(false)

        const handleHidePassword = (e)=>{
            setHidePassword(e.target.value)
        }
        const handleShowPassword = (e)=>{
            setShowPassword(!showPassword)
        }

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
                        onChange={handleEmailChange}
                        style={{borderColor: emailError ? "":"red",outline:emailError ? "":"red"}}
                        />
                    </div>
                    <div className='passwordInputBox'>
                        <input className='passwordInput' placeholder='Password'
                         type={showPassword ? "text":"password"}
                         value={hidePassword}
                         onChange={handleHidePassword}
                        />
                        <div className='password-eye' onClick={handleShowPassword} >
                        {showPassword ?<MdOutlineRemoveRedEye fontSize={25} />:<FaRegEyeSlash fontSize={25}/>}
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