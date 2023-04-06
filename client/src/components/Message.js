import React from 'react';
import io from  'socket.io-client';
import {useEffect, useState} from 'react';

const socket = io.connect("http://localhost:3001")

export default function Message() {

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
        <div className = 'Message-Div'>
            <div className='conversation-div'>
                <h1>Message: </h1>
                {messageReceived}
            </div>
            <div className='typemessage-div'>
                <input className='input-message' placeholder='Type your message here...' onChange ={(event) => {
                    setMessage(event.target.value);
                }}/>
                <button className = 'send-btn' onClick = {sendMessage}>Send</button>
            </div>
        </div>
    )
}