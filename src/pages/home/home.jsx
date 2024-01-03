import React from "react";
import './home.css';
import Header from "../../components/header/header";
import TypeTest from "../../components/typeTest/typeTest";

function Home() {
    return (
        <>

        <Header/>
        <div className="type-body">
            < TypeTest />
        </div>

        </>
    ) 
}

export default Home;