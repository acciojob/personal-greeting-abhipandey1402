
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState('');


  return (
    <div>
      <h3>Enter your name:</h3>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <p id="greeting">Hello {name}!</p>
    </div>
  )
}

export default App
