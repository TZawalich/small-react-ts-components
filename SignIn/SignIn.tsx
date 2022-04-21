import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SignIn.module.css";


const SignIn = () => {

    const [enteredEmail, setEnteredEmail] = useState<string>('');
    const [enteredPassword, setEnteredPassword] = useState<string>('');
    const [errorEmail, setErrorEmail] = useState<{message?: string} | null>(null);
    const [errorPassword, setErrorPassword] = useState<{message?: string} | null>(null);
    const [forgotPass, setForgotPass] = useState<boolean>(false);
    const [submitReset, setSubmitReset] = useState<boolean>(false); 

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorEmail(null);
        setErrorPassword(null);

        if(enteredEmail.trim().length < 1 || !enteredEmail.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){ 
            setErrorEmail({message: 'Please enter a valid email address'})
            return
        }
        if(enteredPassword.trim().length < 1){ 
            setErrorPassword({message: 'Please enter a password'})
            return
        }
        console.log("successful login!")
        /*
        submit login form function goes here. Needs to have failedLogin state const setup.
        
        EX.
            
        try{
            submitFormFunctionCall(enteredEmail, enteredPassword)
        }catch(error){
            setFailedLogin(error);
        }
        */

    }

    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        setErrorEmail(null);
        setEnteredEmail(event.target.value)
    }

    const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        setErrorPassword(null);
        setEnteredPassword(event.target.value)
    }

    const submitForgotPassword = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(enteredEmail.trim().length < 1 || !enteredEmail.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){ 
            setErrorEmail({message: 'Please enter a valid email address'})
            return
        }
        //Send password email function/logic goes here
        setSubmitReset(true)
        /*
            setEnteredEmail(''); 
            setEnteredPassword(''); 
            use if you wish to reset email/password on login page when returning 
        */
    }

    return (
        <div className={styles.signinFormHolder}>
            <h2>Sign In</h2>
                {forgotPass ?
                    <div className={styles.forgotPass}>
                        <h4>Forgot Your Password?</h4>
                        {submitReset ?
                            <p>Instructions will be sent to your email if it is registered to an account</p>
                        :
                        <form onSubmit={submitForgotPassword}>
                            <label htmlFor="forgotPassword">Email*</label>
                            <input className={errorEmail ? styles.errorInput : ""} id="forgotPassword" placeholder={errorEmail ? errorEmail.message : "Enter email address"} value={enteredEmail} onChange={emailChangeHandler} type="email"/>
                            {/* {errorEmail && <p className={styles.errorMessage}>{errorEmail.message}</p>} */}
                            <button className={styles.submitButton} type="submit">Reset Password</button>
                        </form>
                        }
                        <p className={styles.falseLink} onClick={() => {setForgotPass(false); setSubmitReset(false); setErrorEmail(null); setErrorPassword(null)}}>Return</p>
                    </div>
                :
                <React.Fragment>
                    <form onSubmit={submitForm}>
                        <label htmlFor="email">Email*</label>
                        <input className={errorEmail ? styles.errorInput : ""} id="email" type="email" placeholder={errorEmail ? errorEmail.message : "Enter email address"} value={enteredEmail} onChange={emailChangeHandler} />
                        <label htmlFor="password">Password*</label>
                        <input className={errorPassword ? styles.errorInput : ""} id="password" type="password" placeholder={errorPassword ? errorPassword.message : "Enter password"} value={enteredPassword} onChange={passwordChangeHandler}/>
                        <button className={styles.submitButton} type="submit">Sign In</button>
                    </form>
                    {/* {errorEmail && <p className={styles.errorMessage}>{errorEmail.message}</p>}
                    {errorPassword && <p className={styles.errorMessage}>{errorPassword.message}</p>}  */}
                    {/* {failedLogin && <p>{failedLogin.message}</p>} */}
                    <p className={styles.falseLink} onClick={() => {setForgotPass(true); setErrorEmail(null); setErrorPassword(null)}}>Forgot Password?</p>
                </React.Fragment>
                }
        </div>
    )
}

export default SignIn;