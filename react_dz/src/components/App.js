import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            age: 0,
            gender: '',
            destination: 'Kyiv',
            diet: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            if (checked) {
                this.setState(prevState => ({
                    diet: [...prevState.diet, value,". "]
                }))
            }
            else {
                const newDied = [...this.state.diet];
                const index = newDied.indexOf(value)
                newDied.splice(index, 2);
                this.setState({
                    diet: newDied
                });

            }
        } else {
            this.setState({
                [name]: value
            })
        }

    }

    render() {
        return (
            <main>
                <form>
                    <input type='text'
                        placeholder="First Name"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        name='firstname'
                    /><br />

                    <input type='text'
                        placeholder="Last Name"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        name='lastname'
                    /><br />

                    <input type='text'
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        name='age'
                    /><br />

                    {/* Здесь переключатели для выбора пола */}
                    <ul style={{ display: 'initial' }}>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value='Female'
                                    onChange={this.handleChange}
                                    name='gender'
                                />Female
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value='Male'
                                    onChange={this.handleChange}
                                    name='gender'
                                />Male
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value='Other'
                                    onChange={this.handleChange}
                                    name='gender'
                                />Other</label>
                        </li>
                    </ul>
                    <br />
                    {/* Здесь поле со списком для выбора пункта назначения */}
                    <select onChange={this.handleChange}
                        name='destination'>
                        <option selected>Kyiv</option>
                        <option >Kharkiv</option>
                        <option >Odessa</option>
                        <option >Lviv</option>
                        <option >Dnipro</option>
                    </select>
                    <br />
                    {/* Здесь флажки для указания диетологических ограничений */}
                    <ul style={{ display: 'initial' }}>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value='Fast food'
                                    onChange={this.handleChange}
                                    name='diet'
                                />Fast food
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value='Milk products'
                                    onChange={this.handleChange}
                                    name='diet'
                                />Milk products
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value='Artificial ingredients'
                                    onChange={this.handleChange}
                                    name='diet'
                                />Artificial ingredients
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value='Sweets'
                                    onChange={this.handleChange}
                                    name='diet'
                                />Sweets
                            </label>
                        </li>
                    </ul>

                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {this.state.firstname} {this.state.lastname} </p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions: {this.state.diet}</p>
            </main>
        )
    }
}

export default App
