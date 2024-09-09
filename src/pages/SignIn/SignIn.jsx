import React, { useState } from "react";
import '../SignIn/SignIn.css';
import logo from '../../assets/logo_big.png';

const SignIn = () => {

    const [currentState, setCurrentState] = useState("Sign up")

    return (
        <div className="signin">
            <img src={logo} alt="" className="logo" />
            <form className="login-form">
                <h2>{currentState}</h2>
                {currentState === "Sign up"?<input type="text" placeholder="username" className="form-input" required/>:null}
                <input type="email" placeholder="email" className="form-input" required/>
                <input type="password" placeholder="password" className="form-input" required/>
                <button type="submit">{currentState === "Sign up"?"Create account":"Sign In"}</button>
                <div className="login-terms">
                    <input type="checkbox" />
                    <p>Agree to all terms & policy.</p>
                </div>
                <div className="login-forgot">
                    {
                        currentState === "Sign up"
                        ?<p className="login-toggle">Alredy have an account? <span onClick={()=>setCurrentState("Sign in")}>Login here</span></p>
                        :<p className="login-toggle">Create an account <span onClick={()=>setCurrentState("Sign up")}>click here</span></p>
                    }
                </div>
            </form>
        </div>
    )
}

export default SignIn;