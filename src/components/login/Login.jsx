import React from 'react';
import GoogleLogo from '../../assets/GoogleLogo.png';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.page}>
            <div className={styles.body}>
                <div className={styles.bodyBox}>

                    <div className={styles.loginTitle}>
                        <h1 className='font-bold underline'>Log in to account</h1>
                    </div>
                    <div className={styles.googleButtonBox}>
                        <button className={styles.googleButton}>
                            <p>Sign in with </p>
                            <img src={GoogleLogo} alt="GoogleLogo"/>
                        </button>
                    </div>

                    <div className={styles.orDevider}>
                        <img src="" alt=""/>
                        <p>OR</p>
                        <img src="" alt=""/>
                    </div>
                    <div className={styles.emailInputBox}>
                        <input className={styles.emailInput} placeholder="Email" type="text"/>
                    </div>
                    <div className={styles.passwordInputBox}>
                        <input className={styles.passwordInput} placeholder='Password' type="text"/>
                    </div>
                    <div className={styles.loginOptionBox}>
                        <div>
                            <p style={{marginTop: '4px'}}>Don't have any account?</p>
                        </div>
                        <div>
                            <p style={{marginTop: '4px'}}>Forgot password?</p>
                        </div>
                    </div>
                    <div className={styles.loginButtonBox}>
                        <button className={styles.loginButton}>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;