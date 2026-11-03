import Top_Nav_Bar from '../Pages/Components/Top_Nav_Bar/Index'
import Side_Bar from '../Pages/Components/Side_Bar/Index'

function Dashboard({ user_name, role, menu_item, home_url, children }) {
  console.log('Dashboard', home_url)
  return (
    <div className='flex flex-col h-screen gap-2'>
      <Top_Nav_Bar user_name={user_name} role={role} home_url={home_url} />
      <div className='flex flex-row flex-1 min-h-0 gap-2'>
        <Side_Bar menu_items={menu_item} />
        <div className='flex flex-1 shadow-xl overflow-y-auto min-h-0 p-5'>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Dashboard