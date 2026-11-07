import { NavLink, useNavigate } from 'react-router-dom'
import { UserButton } from '@clerk/react';

function Top_Nav_Bar({ user_name, role, home_url }) {
  const navigation = useNavigate();
  const navigate_to_login = () => {
    navigation("/");
  }
  console.log('Top nav bar', home_url)
  return (
    <div className='flex flex-row p-3 justify-between items-center w-screen bg-gradient-to-r  from-orange-100 to-orange-400 shadow-lg'>
      <NavLink to={home_url} className='text-3xl font-bold text-orange-600'>Welcome to Stock flow</NavLink>
      <div className='flex flex-row gap-8 items-center'>
        <div className='flex flex-col'>
          <div className='flex flex-row gap-2'>
            <UserButton />
            <label>Welcome, {user_name}!</label>
          </div>
          <label className='text-sm text-slate-600'>{role}</label>
        </div>
      </div>
    </div>
  )
}

export default Top_Nav_Bar