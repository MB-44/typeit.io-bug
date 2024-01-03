import React, {useState} from "react";
import './home.css';
import Header from "../../components/header/header";
import TypeTest from "../../components/typeTest/typeTest";

function Home() {

    const [showTypeTest, setShowTypeTest] = useState(false);

    const handleStartTyping = () => {
        setShowTypeTest(true)
    }



    return (
        <>
            <Header/>
            <div className="type-body">
            
                {!showTypeTest && (
                    <button className="to-enter-button" onClick={setShowTypeTest}>
                        Start typing..
                    </button>
                )}
                {showTypeTest && <TypeTest/>}
            
            </div>
        </>
    ) 
}

export default Home;