import React from 'react'

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"


function Stock_Request_Title(props) { 

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col border border-slate-300 rounded-2xl p-6 shadow-md'>
        <label className='text-xl font-bold'>Stock Requests</label>
        <label>{...props.pending} pending requests awaiting for decision</label>
      </div>
    </div>

  )
}

export default Stock_Request_Title