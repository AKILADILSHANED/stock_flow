import { NavLink, useNavigate } from 'react-router-dom'

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
          <div className='flex flex-row'>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
            </svg>
            <label>Welcome, {user_name}!</label>
          </div>
          <label className='text-sm text-slate-600'>{role}</label>
        </div>
        <button onClick={navigate_to_login} className='flex flex-row items-center gap-1 px-2 py-1 rounded-lg bg-orange-600 text-white hover:bg-orange-500'>Logout
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12h7m0 0l-3 3m3-3l-3-3m3-3V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" /></svg>
        </button>
      </div>
    </div>
  )
}

export default Top_Nav_Bar