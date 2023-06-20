import React from 'react'
import './Message.css'

const Message = ({ count }) => {
  return (
    <div>
      <p>
        You have generated <strong>{count}</strong> pieces of advice
      </p>
    </div>
  )
}
export default Message
