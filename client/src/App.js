import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import PlayerList from './components/PlayerList.js';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PlayerList />
      <Message />
    </div>
  );
}

export default App;
