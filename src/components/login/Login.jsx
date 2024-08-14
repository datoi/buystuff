import './Login.css'

import GoogleLogo from '../../assets/GoogleLogo.png';



const Login = () => {
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
                        <input className='emailInput' placeholder="Email" type="text"/>
                    </div>
                    <div className='passwordInputBox'>
                        <input className='passwordInput' placeholder='Password' type="text"/>
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