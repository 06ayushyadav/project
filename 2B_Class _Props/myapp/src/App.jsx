import './App.css';
import MessageSender from './MessageSender';
import MessageDisplay from './MessageDisplay';
import { Component } from 'react';

class App extends Component {
  render() {
    const Message="Hello from Class A Component!";
    return (
      <div style={{ padding: "20px" }}>
        <h1>Class Component Example</h1>
        <MessageSender text={ Message }/>
        <MessageDisplay text="I am passed directly...."/>
      </div>
    );
  }
}
export default App;
