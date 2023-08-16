import React from 'react'
import './Button.css'
export const Button = ({children}) => {
  return (
    <button className="secondary-btn">{children}
    </button>
  )
}

// export default Button