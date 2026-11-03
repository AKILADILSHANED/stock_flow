import React from 'react'
import Dashboard from '../../../Default_Layouts/Dashboard'
import { SM_Menu_Items } from '../../../Data/SM_Menu_Items'
import Message_Banner from '../../Components/Message_Banner/Index'

function Distribution_Run() {
  return (
    <div>
      <Dashboard user_name={"Akila Edirisooriya"} role={"Stock Manager"} menu_item={SM_Menu_Items} home_url={"/SM_Pages/Home"}>
        <Message_Banner Banner_Title={"Distribution_Run"}/>
      </Dashboard>
    </div>
  )
}

export default Distribution_Run