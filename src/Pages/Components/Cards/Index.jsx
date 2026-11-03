import React from 'react'

function Cards(props) {
  return (
    <div className='inline-flex flex-col shadow-sm py-5 px-10 gap-1 rounded-xl text-center justify-center items-center hover:shadow-lg hover:border border-orange-200 shadow-orange-100'>
      <div className='text-lg'>{props.title}</div>
      <div>{props.icon}</div>
      <div className='font-bold text-4xl'>{props.value}</div>
      <div>{props.description}</div>
    </div>
  )
}

export default Cards