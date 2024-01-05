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
            <div className="signup-container">
                <h2>Register </h2>
                <form action="" className="register-form">
                    <input type="text" placeholder="Enter your Email"/>
                    <br />
                    <input type="password" placeholder="password"/>
                    <br />
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
        </>
    );
}

export default SignUp;