import React from "react";
import "./css/joke.css";

function Joke(props) {
    return (
        <div className="jokeCard">
            { 
                jokesArr.find(x => x.id == props.jokeNumber) ?
                <div>
                    <p className ="punchLine">{jokesArr[props.jokeNumber - 1].punchLine.toUpperCase()}</p>
                    <div className ="question"
                        dangerouslySetInnerHTML={{
                            __html: jokesArr[props.jokeNumber - 1].question
                        }}>
                    </div>
                </div>
                :
                <div className="errorCard">
                    <p>ШУТКА ПОД НОМЕРОМ</p>
                    <p className ="errorNumber">{props.jokeNumber}</p>
                    <p>ОТСУТСТВУЕТ</p>
                </div>
            }
        </div>
    );
}

export default Joke;