import React from 'react'
import Dashboard from '../../../Default_Layouts/Dashboard'
import { FDO_Menu_Items } from '../../../Data/FDO_Menu_Items'
import { useUser } from '@clerk/react'


function FDO_Dashboard() {
  const { user } = useUser();
  return (
    <div>
      <Dashboard user_name={user.fullName} role={user?.publicMetadata?.Description} menu_item={FDO_Menu_Items} home_url={"/SM_Pages/Home"} />
    </div>
  )
}

export default FDO_Dashboard