import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

import UnlockBoxForm from './components/UnlockBoxForm'
import LockBoxForm from './components/LockBoxForm';

const App = () => {
  const [isLocked, setIsLocked] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [passwordInput, setPasswordInput ] = useState('')
  const [boxContentInput, setBoxContentInput] = useState('')

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
    setPasswordInput(e.target.value)
  }

  const handleBoxContentChange = (e) => {
    e.preventDefault()
    setBoxContentInput(e.target.value)
  }

  const handleUnlockBoxSubmit = async (e) => {
    e.preventDefault()
    console.log(passwordInput)
    setPasswordInput('')
    const response = await axios.post('http://localhost:3001/api/lock')
  }

  const handleLockBoxSubmit = async (e) => {
    e.preventDefault()
    const boxData = {
      content: boxContentInput,
      password: passwordInput
    }

    const success = await axios.post('http://localhost:3001/api/lock', boxData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

    console.log(passwordInput)
    console.log(boxContentInput)
    setPasswordInput('')
    setBoxContentInput('')
  }

  const renderBoxForm = () => {
    if (isLocked) {
      return  <UnlockBoxForm
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleUnlockBoxSubmit}
      passwordInput={passwordInput} />
    } else if (!isLocked) {
      return <LockBoxForm
        handlePasswordChange={handlePasswordChange}
        handleLockBoxSubmit={handleLockBoxSubmit}
        handleBoxContentChange={handleBoxContentChange}
        passwordInput={passwordInput}
        boxContentInput={boxContentInput}
      />
    }
  }

  return (
    <div className="App">
      <header>
        <h1>LockBox</h1>
        <div>
          {isLoading && <p>loading . . .</p>}
          {!isLoading && isLocked ? <h1>box is locked</h1> : <h1>box is unlocked</h1>}
        </div>
        {renderBoxForm()}
      </header>
    </div>
  );
}

export default App;
