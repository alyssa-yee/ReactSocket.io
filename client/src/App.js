import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import PlayerList from './components/PlayerList.js';
import Message from './components/Message';
import io from  'socket.io-client';
import {useEffect, useState} from 'react';

// cd server npm start to get the server running
// cd client/my-react-app -> npm start to get the page running


const socket = io.connect("http://localhost:3001")

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () =>{
    socket.emit("send_message", {message});
  };

  useEffect(() =>{
    socket.on("receive_message", (data) =>{
      // alert(data.message);
      setMessageReceived(data.message);
    });
  });


  return (
    <div className="App">

      <input placeholder='Message...' onChange ={(event) => {
        setMessage(event.target.value);
      }}/>

      <button onClick = {sendMessage}>Send Message</button>
      <h1>Message: </h1>
      {messageReceived}

      <Navbar />
      <PlayerList />
      <Message />

    </div>
  );
}

export default App;
