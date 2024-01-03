import React from "react";
import "./button.css";
import Home from "../../pages/home/home";

function Button(props) {
    return(
        
        <button 
            id={props.buttonName} 
            type="submit" 
            className="button"
            onClick={Home}
            >
                <div className="sign-up-name">Sign Up</div>
        
        </button>


    );
}

export default Button;