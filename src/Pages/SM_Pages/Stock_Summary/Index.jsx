import React from 'react'
import Dashboard from '../../../Default_Layouts/Dashboard'
import { SM_Menu_Items } from '../../../Data/SM_Menu_Items'
import Stock_Overview from './Components/Stock_Overview'
import Stock_Summary_Filters from './Components/Stock_Summary_Filters'
import Greeting_Banner from './Components/Greeting_Banner'
import Monthly_Stock_Movements from './Components/Monthly_Stock_Movements'
import Product_Stock from './Components/Product_Stock'
import RequestAuth from '@/Default_Layouts/RequestAuth'

function Stock_Summary() {
  return (
    <div>      
        <Dashboard user_name={"Akila Edirisooriya"} role={"Stock Manager"} menu_item={SM_Menu_Items} home_url={"/SM_Pages/Home"}>
          <div className='flex flex-col gap-4'>
            <Stock_Summary_Filters />
            <Greeting_Banner />
            <Stock_Overview />
            <Monthly_Stock_Movements />
            <Product_Stock />
          </div>
        </Dashboard>
    </div>
  )
}

export default Stock_Summary