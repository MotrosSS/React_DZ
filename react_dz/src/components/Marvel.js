import React from 'react'
import MD5 from "crypto-js/md5";
import './css/marvel.css'
import MarvelCharacter from './MarvelCharacter';
import Loading from './Loading';

class Marvel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            isLoading: false
        }
    }


    async componentDidMount() {

        const publicKey = '6bc008a4d8e53161574ba2902eae50ba';
        const privatKey = 'c779e177d9befd1dc6c4240f1450e37fcf1264ad';
        var timestamp = Date.now();
        const numberCharacters = 100;
        var hash = MD5(timestamp + privatKey + publicKey).toString();
        var url = `https://gateway.marvel.com:443/v1/public/characters?limit=${numberCharacters}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
        this.setState({
            isLoading: true
        })

        var response = await fetch(url);
        let data = await response.json();

        this.setState({
            characters: [...this.state.characters, ...data.data.results],
            isLoading: false
        })
    }

    render() {
        return (
            <div>
                <div className="header">MARVEL</div>
                <div className="container">
                    <div className="row">
                        {
                            this.state.isLoading ? <Loading /> : this.state.characters.map(character => <MarvelCharacter key={character.id} info={character} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Marvel;