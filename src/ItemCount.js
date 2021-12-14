import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react/cjs/react.development";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";


class ItemCount extends Component {
    constructor(props) {
        super(props)

        this.state = {counter: 1}
    }

    add() {
        this.setState({counter: this.state.counter + 1});
    }

    subtract() {
        this.setState({counter: this.state.counter - 1});
    }

    render() {
        return(
            <div className="card">
                <div className="shopCount">
                    <h1>Contador</h1>
                    <h2>{this.state.counter}</h2>
                </div>
                <div className="botones">
                    <button onClick={this.add.bind(this)}><FontAwesomeIcon icon={faPlus} /></button>
                    <button onClick={this.subtract.bind(this)}><FontAwesomeIcon icon={faMinus} /></button>
                </div>
            </div>
        )
    }
}

export default ItemCount