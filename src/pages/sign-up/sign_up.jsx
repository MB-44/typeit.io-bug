import React, {useState} from "react";
import Home from "../home/home";
import Header from "../../components/header/header";
import './sign_up.css';

function SignUp() {

    const [showHome, setShowHome] = useState(false);

    const handleToHomePage = () => {
        setShowHome(false)
    }

    return (
        <>
        <Header/>
        <div className="container">
            <div className="signup-container">
                <h2>register </h2>
                <form action="" className="register-form">
                    <input type="text" placeholder="username"/><br />
                    <input type="text" placeholder="email"/><br />
                    <input type="text" placeholder="verify email"/><br />
                    <input type="password" placeholder="password"/><br />
                    <input type="text" placeholder="verify password"/>
                    {!showHome && (
                        <button type="submit" 
                            onClick={handleToHomePage}
                            className="register-button">
                            Sign Up
                        </button>
                    )}
                    {showHome && <Home/>}
                </form>
            </div>
            <div className="login-container">
                <h2>login</h2>
                <form action="" className="login-form">
                    <input type="text" placeholder="email"/><br />
                    <input type="text" placeholder="password"/><br />
                    <div className="remember-me">
                        <input type="checkbox" id="remember-me" className="checkbox-remember-me"/>
                        <label htmlFor="remember-me" className="remember-me-label">
                            <span className="checkbox-span"></span>
                            Remember me
                        </label>
                    </div>
                    {!showHome && (
                        <button type="submit" 
                            onClick={handleToHomePage}
                            className="login-button">
                            Sign In
                        </button>
                    )}
                    {showHome && <Home/>}

                </form>
            </div>
        </div>
        </>
    );
}

export default SignUp;