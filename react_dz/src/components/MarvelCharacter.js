import React from 'react';

class MarvelCharacter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageExtension: '/portrait_xlarge.jpg'
        }
    }

    render() {
        const {
            id,
            name,
            description,
            thumbnail
        } = this.props.info

        return (
            <ul>
                <div className="card" style={{ width: '20rem' }}>
                    <img className="picture" src={thumbnail.path + this.state.imageExtension} />
                    <div className="card-body">
                        <h2 className="card-title nameCharacter">{name}</h2>
                        <p className="card-text">{description ? description : 'No description'}</p>
                        <h5>ID: {id}</h5>
                    </div>
                </div>
            </ul>
        )
    }
}

export default MarvelCharacter;