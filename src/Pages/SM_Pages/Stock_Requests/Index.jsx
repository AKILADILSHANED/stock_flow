import React, { useState } from 'react'
import Dashboard from '../../../Default_Layouts/Dashboard'
import { SM_Menu_Items } from '../../../Data/SM_Menu_Items'
import Stock_Request_Title from './Components/Stock_Request_Title'

import Pending_Requests from '@/Pages/SM_Pages/Stock_Requests/Components/Pending_Requests'
import Request_Tabs from './Components/Request_Tabs'
import Request_History from '@/Pages/SM_Pages/Stock_Requests/Components/Request_History'

import { pendingRequests } from '@/Data/Mock_Data/Stock_Request'
import { requestHistory } from '@/Data/Mock_Data/Stock_Request'

function Stock_Requests() {

  // Pending Request - 1;
  // Request History = 2;
  const [tabStatus, setTabStatus] = useState("pending");

  const clickPending = () => {
    setTabStatus("pending");
  }
  const clickHistory = () => {
    setTabStatus("history");
  }

  return (
    <Dashboard user_name={"Akila Edirisooriya"} role={"Stock Manager"} menu_item={SM_Menu_Items} home_url={"/SM_Pages/Home"}>
      <div className='flex flex-col gap-4 min-w-full'>
        <div>
          <Stock_Request_Title pending={"2"} />
        </div>
        <div className='flex flex-col border border-slate-300 rounded-2xl p-6 gap-3'>
          <Request_Tabs clickPending={clickPending} clickHistory={clickHistory} />
          {
            tabStatus === "pending"? <Pending_Requests items={pendingRequests} />:
            tabStatus === "history"? <Request_History items={requestHistory} />:null
          }          
        </div>
      </div>
    </Dashboard>
  )
}

export default Stock_Requests