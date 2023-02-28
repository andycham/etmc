import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  
  const handleInputChange = (e) => {    
    setInput(e.target.value);    
    setOutput("");
  }

  const sendClick = (e) => {    
    fetch(process.env.REACT_APP_SERVER_URL_PREFIX + '/sendInstruction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"input" : input})
    })
    .then(function(response){
      if(response.status==500){
        setOutput("An error occurred.");
      };
      return response.json();
    })
    .then(function(jsonData){    
      console.log("return: " + JSON.stringify(jsonData));
      setOutput(jsonData.output);
    });
  } 

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>Input</div>
          <div><textarea id="input" value={input} onChange={handleInputChange} /></div>
          <div><button id="send" onClick={sendClick} >Send</button></div>
          <div>Output</div>
          <div><textarea id="output" value={output} readOnly/></div>
        </div>
      </header>      
    </div>
  );
}

export default App;
