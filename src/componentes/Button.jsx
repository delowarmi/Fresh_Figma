import React from 'react'

const Button = ({btnText,className}) => {
  return (
    <button className={` font-pop text-2xl font-semibold ${className}`}>
      {btnText}
    </button>
  )
}

export default Button
