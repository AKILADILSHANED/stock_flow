import React from 'react'
import Dashboard from '../../../Default_Layouts/Dashboard'
import { SM_Menu_Items } from '../../../Data/SM_Menu_Items'


function SM_Dashboard() {
  return (
    <div>
        <Dashboard user_name={"Akila Edirisooriya"} role={"Stock Manager"} menu_item={SM_Menu_Items} home_url={"/SM_Pages/Home"}/>
    </div>
  )
}

export default SM_Dashboard