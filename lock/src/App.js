import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  const [isLocked, setIsLocked] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [passwordInput, setPasswordInput ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/api/state')
      .then(res => res.data)
      .then(data => {
        setIsLocked(data.isLocked)
        setIsLoading(false)
      })
  }, [])

  const handlePasswordChange = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <header>
        <h1>LockBox</h1>
        <div>
          {isLoading && <p>loading . . .</p>}
          {!isLoading && isLocked ? <h1>box is locked</h1> : <h1>box is unlocked</h1>}
        </div>
        <input
          onChange={(e) => handlePasswordChange(e)}
          value={passwordInput}
          placeholder='password'
          type='password'/>
      </header>
    </div>
  );
}

export default App;
