import React from 'react'

const UnlockBoxForm = ({ handleSubmit, handlePasswordChange, passwordInput}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => handlePasswordChange(e)}
        value={passwordInput}
        placeholder='password'
        type='password'/>
      <button>Submit</button>
    </form>
  )
}

export default UnlockBoxForm
