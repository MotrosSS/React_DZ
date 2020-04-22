import React from "react";
import "./css/joke.css";

const jokesArr = [
    {
        id: 1,
        punchLine: 'девушки',
        question: `<p>— Девушка, вы любите нырять? </p>
                    <p>— Очень люблю! </p>
                    <p> — Тогда давайте занырнем под одеяло!</p> `
    },
    {
        id: 2,
        punchLine: 'девушки',
        question: `<p>Девушка знакомится с парнем:</p>
                    <p>— И никаких оргий на первом свидании!</p>`
    },
    {
        id: 3,
        punchLine: 'алкоголь / девушки',
        question: `Запрет на алкоголь после 22.00 больше всего ударил по некрасивым девушкам.`
    },
    {
        id: 4,
        punchLine: 'алкоголь',
        question: `Как уверяют врачи, пятьдесят граммов коньяка за ужином — это не только полезно, но еще и мало.`
    },
    {
        id: 5,
        punchLine: 'алкоголь',
        question: `<p>— Ну, всё, ухожу на самогонизацию.</p>
                    <p>— Вы хотели сказать "самоизоляцию"?</p>
                    <p>— Нет.</p>`
    },
];

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