import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import MainContent from "./MainContent"
import Heder from "./Heder"

function App()
{
    return (
        <div>
            <Heder />
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;