import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  const [isLocked, setIsLocked] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [passwordInput, setPasswordInput ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/state')
      .then(res => res.data)
      .then(data => {
        setIsLocked(data.isLocked)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <header>
        <h1>LockBox</h1>
        <div>
          {isLoading && <p>loading . . .</p>}
          {!isLoading && isLocked ? <h1>box is locked</h1> : <h1>box is unlocked</h1>}
        </div>
        <input
           value={passwordInput} placeholder='password' type='password'/>
      </header>
    </div>
  );
}

export default App;
