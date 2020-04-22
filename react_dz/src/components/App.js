import React from "react";
import Heder from "./Heder";
import Joke from './Joke';

function App() {
    return (
        <div>
            <Heder />

            <div className="jokes">
                <Joke jokeNumber="1" />
                <Joke jokeNumber="4" />
                <Joke jokeNumber="33" />
                <Joke jokeNumber="3" />
                <Joke jokeNumber="2" />
                <Joke jokeNumber="5" />
            </div>
        </div>
    );
}

export default App;