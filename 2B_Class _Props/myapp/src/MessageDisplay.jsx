import React, { Component } from "react";

class MessageDisplay extends Component {
    render() {
        return (
            <div style = {{border: "1px solid gray", padding: "10px"}}>
                <h2>Display Component: </h2>
                <p>Received Message: { this.props.text }</p>
            </div>
        );
    }
}
export default MessageDisplay;
