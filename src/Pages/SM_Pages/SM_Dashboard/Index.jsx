import React from 'react'
import Dashboard from '../../../Default_Layouts/Dashboard'
import { SM_Menu_Items } from '../../../Data/SM_Menu_Items'
import { useUser } from '@clerk/react'


function SM_Dashboard() {
  const { user } = useUser();
  return (
    <div>
      <Dashboard user_name={user?.fullName} role={user?.publicMetadata?.Description} menu_item={SM_Menu_Items} home_url={"/SM_Pages/Home"} />
    </div>
  )
}

export default SM_Dashboard