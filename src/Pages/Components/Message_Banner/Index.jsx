import React from 'react'
import { useState } from 'react'

function Message_Banner(props) {
    const [visible, setVisible] = useState(true);
    if (!visible) {
        return null;
    } else {
        return (
            <div>
                <div className='flex flex-col bg-gradient-to-l h-30 from-orange-500 to-orange-400 rounded-lg p-4 gap-2'>
                    <div className='flex flex-row justify-between'>
                        <label className='text-xl text-white font-bold'>{props.Banner_Title}</label>
                        <button onClick={() => setVisible(false)} className='text-sm text-white border px-1 rounded-md hover:bg-slate-600 hover:border-none'>Close</button>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white text-lg'>Good Evening, {props.user_name}!</label>
                        <label className='text-white text-lg'>Monitor Stock levels, review distribution requests and manage FDO runs across all warehouses</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message_Banner