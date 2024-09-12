import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-2 flex justify-between items-center border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-700'>
        <img className='h-[10vh] ' src={val.url}/>
        <span className='font-semibold text-zinc-300 mr-5'>{val.number}</span>

    </div>
  )
}

export default Stripe