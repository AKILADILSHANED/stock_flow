import React from 'react'
import { product } from '@/Data/Mock_Data/Stock_Request'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function Request_Details({ Request_ID, FDO, Status, Warehouse, Requested_Date, Products, Total_Units }) {
    return (
        <div className='flex flex-col p-3 gap-3'>
            <div>
                <label className='text-md font-bold underline'>Request Details for Request ID: {Request_ID}</label>
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-row justify-between'>
                    <label className='flex flex-row gap-2'><h className={"font-bold"}>Requested By:</h><p>{FDO}</p></label>
                    <label className='text-red-400'>Status on: {Status}</label>
                </div>
                <div>
                    <label className='flex flex-row gap-2'><h className={"font-bold"}>Requested Warehouse:</h><p>{Warehouse}</p></label>
                </div>
                <div>
                    <label className='flex flex-row gap-2'><h className={"font-bold"}>Requested Date:</h><p>{Requested_Date}</p></label>
                </div>
                <div>
                    <p className='text-green-500'>{Products} were requested with total units of {Total_Units}</p>
                </div>
            </div>

            <div className='border border-slate-400 rounded-xl p-5'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Product</TableHead>
                            <TableHead>SKU</TableHead>
                            <TableHead>Requested_Qty</TableHead>
                            <TableHead>Available</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {product.map((products) => (
                            <TableRow key={products.Product}>
                                <TableCell>{products.Product}</TableCell>
                                <TableCell>{products.SKu}</TableCell>
                                <TableCell>{products.Requested_Qty}</TableCell>
                                <TableCell>{products.Availale}</TableCell>
                                <TableCell>{products.Status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className='flex flex-row'>
                        
            </div>
        </div>
    )
}

export default Request_Details