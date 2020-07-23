import React from 'react'

const LockBoxForm = ({
  handleBoxContentsChange,
  handleLockBoxSubmit,
  handlePasswordChange,
  passwordInput,
  boxContents }) => {

  return (
    <form onSubmit={(e) => handleLockBoxSubmit(e)}>
    <input
      onChange={(e) => handleBoxContentsChange(e)}
      value={boxContents}
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
