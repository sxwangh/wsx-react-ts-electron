import React, { useState } from 'react';
import logo from './wsx.png';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    if (userName === 'wangsixue' && password === 'star') {

    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          userName: <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
        </p>
        <p>
          password: <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </p>
        <button onClick={submit}>submit</button>
      </header>
    </div>
  );
}

export default App;
