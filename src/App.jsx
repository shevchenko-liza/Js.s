
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
    state = {
        list: [],
        text: '',

    }
    handleChange = event => {
        this.setState({ text: event.target.value });
     
    }

    handleRemove = index => {


        this.setState({
            list: this.state.list.filter((item, i) => index !== i)
        })

    }



    handleSubmit = event => {
        event.preventDefault()
        this.setState({ list: [...this.state.list, this.state.text] })


    }


    render = () => (
        <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>
                    add
                </button>

            </form>

            <ul>
                {this.state.list.map((item, index) => (
                    <li>
                        {item}
                        <button onClick={() => this.handleRemove(index)}>
                            remove
                        </button>
                    </li>
                ))}

            </ul>
        </>

    )

}


export default App;

