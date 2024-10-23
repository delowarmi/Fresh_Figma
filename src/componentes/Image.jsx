import React from 'react'

const image = ({ImageSrc,ImageAlt,className}) => {
  return (
        <img src={ImageSrc} alt={ImageAlt} className={`${className}`} />
  )
}

export default image
