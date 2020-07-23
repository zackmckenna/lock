import React from 'react'

const LockBoxForm = ({
  handleBoxContentChange,
  handleLockBoxSubmit,
  handlePasswordChange,
  passwordInput,
  boxContentInput }) => {

  return (
    <form onSubmit={(e) => handleLockBoxSubmit(e)}>
    <input
      onChange={(e) => handleBoxContentChange(e)}
      value={boxContentInput}
      placeholder='box contents'
      type='text'/>
    <input
      onChange={(e) => handlePasswordChange(e)}
      value={passwordInput}
      placeholder='password'
      type='password'/>
    <button>Submit</button>
  </form>
  )
}

export default LockBoxForm
