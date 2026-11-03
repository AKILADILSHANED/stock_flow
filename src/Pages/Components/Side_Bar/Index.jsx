import React from 'react'
import { NavLink } from 'react-router-dom'

function Side_Bar({ menu_items }) {
  return (
    <div className='flex flex-col border border-slate-200 w-70 h-full shadow-md'>
      <div className='text-xl px-2 py-1 font-bold text-white bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-gradient-to-r from-orange-400 to-orange-600'>Menu</div>
      <div className='flex flex-col p-2 gap-2'>
        {
          menu_items.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => { if (isActive) { return "bg-orange-400 text-lg p-1 rounded-md text-white flex flex-row items-center" } else { return "hover:bg-orange-500 text-lg p-1 hover:text-white rounded-md flex flex-row items-center gap-1" } }}>
              {item.icon}{item.label}</NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Side_Bar