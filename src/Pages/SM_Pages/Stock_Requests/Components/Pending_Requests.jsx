import React, { Fragment, useMemo } from 'react'
import { useState } from 'react';

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

import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import Request_Details from '@/Pages/SM_Pages/Stock_Requests/Components/Request_Details';
import { Pointer } from 'lucide-react';


function Pending_Requests({ items }) {

    const [search, setSearch] = useState("");

    const filterData = useMemo(() => {
        const normalizedQuery = String(search).toLowerCase();
        return items.filter((items) => (
            String(items.Request_ID).toLowerCase().includes(normalizedQuery) ||
            String(items.FDO).toLowerCase().includes(normalizedQuery) ||
            String(items.Warehouse).toLowerCase().includes(normalizedQuery) ||
            String(items.Route).toLowerCase().includes(normalizedQuery) ||
            String(items.Requested_Date).toLowerCase().includes(normalizedQuery) ||
            String(items.Products).toLowerCase().includes(normalizedQuery) ||
            String(items.Total_Units).toLowerCase().trim().includes(normalizedQuery) ||
            String(items.Status).toLowerCase().includes(normalizedQuery)
        ));
    }, [search]);

    const lengthArray = filterData.length === 0;

    const [selectedId, setSelectedId] = useState(null);
    const selectRow = (id) => {
        !selectedId ? setSelectedId(id) : id === selectedId ? setSelectedId(null) : setSelectedId(id);
    }

    return (
        <div>
            <div>
                <div>
                    <Field>
                        <FieldLabel htmlFor="input-demo-api-key">Search Pending Request details</FieldLabel>
                        <Input onChange={(e) => { setSearch(e.target.value) }} placeholder="Enter Request details" />
                    </Field>
                </div>
            </div>


            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Request ID</TableHead>
                        <TableHead>FDO</TableHead>
                        <TableHead>Warehouse</TableHead>
                        <TableHead>Route</TableHead>
                        <TableHead>Requested_Date</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Total Units</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterData.map((requests) => (
                        <Fragment>
                            <TableRow className={"cursor-pointer"} onClick={() => selectRow(requests.Request_ID)} key={requests.Request_ID}>
                                <TableCell>{requests.Request_ID}</TableCell>
                                <TableCell>{requests.FDO}</TableCell>
                                <TableCell>{requests.Warehouse}</TableCell>
                                <TableCell>{requests.Route}</TableCell>
                                <TableCell>{requests.Requested_Date}</TableCell>
                                <TableCell>{requests.Products}</TableCell>
                                <TableCell>{requests.Total_Units}</TableCell>
                                <TableCell>{requests.Status}</TableCell>
                                <TableCell>
                                    {selectedId === requests.Request_ID ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(90 12 12)"><path fill="#043890" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z" /></g></svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#043890" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z" /></svg>
                                    }
                                </TableCell>
                            </TableRow>
                            {
                                selectedId === requests.Request_ID ? <TableCell colSpan={8} className="bg-slate-50">
                                    <Request_Details Request_ID={requests.Request_ID}
                                        FDO={requests.FDO}
                                        Status={requests.Status}
                                        Warehouse={requests.Warehouse}
                                        Requested_Date={requests.Requested_Date}
                                        Products={requests.Products}
                                        Total_Units={requests.Total_Units} />
                                </TableCell> : null
                            }
                        </Fragment>
                    ))}
                    {
                        lengthArray ? <TableRow>
                            <TableCell colSpan={8} className="text-center text-lg text-slate-400">No products matched the selected filters</TableCell>
                        </TableRow> : null
                    }
                </TableBody>
            </Table>
        </div>

    )
}

export default Pending_Requests