import { Component } from "react";

class MessageSender extends Component {
    render() {
        return (
            <div style = {{ marginBottom: "10px", border: "1px solid gray", padding: "10px"}}>
                <h2>Sender Component: </h2>
                <p>Sender Message: { this.props.text }</p>
            </div>
        );
    }
}
export default MessageSender;
