import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const InputField = () => {
  return (
    <div>

<div className="input">
        <label><FontAwesomeIcon icon = "magnifying-glass"/></label>
        <input id="input_user" placeholder="Find a user" />
      </div>
    </div>
  )
}

export default InputField