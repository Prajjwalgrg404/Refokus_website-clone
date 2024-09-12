import React from 'react'
import { PiArrowBendDownRightBold } from "react-icons/pi";

function Button({title = 'Get Started'}) {
  return (
    <div className='w-36 px-4 py-1 rounded-full text-black bg-white flex items-center justify-between '>
        <span className='font-medium text-sm'>{title}</span>
        <PiArrowBendDownRightBold />
    </div>

  )
}

export default Button