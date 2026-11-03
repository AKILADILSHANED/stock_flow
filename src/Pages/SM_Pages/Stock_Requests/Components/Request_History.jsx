import { React, useState, useMemo } from 'react'

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

function Request_History({ items }) {

    const [search, setSearch] = useState("");

    const filterData = useMemo(() => {
        const normalizedQuery = String(search).toLowerCase();
        return items.filter((items) => (
            String(items.Request_ID).toLowerCase().includes(normalizedQuery) ||
            String(items.FDO).toLowerCase().includes(normalizedQuery) ||
            String(items.Warehouse).toLowerCase().includes(normalizedQuery) ||
            String(items.Route).toLowerCase().includes(normalizedQuery) ||
            String(items.Requested_Date).toLowerCase().includes(normalizedQuery) ||
            String(items.Total_Units).toLowerCase().trim().includes(normalizedQuery) ||
            String(items.Status).toLowerCase().includes(normalizedQuery)
        ));
    },[search]);

    const lengthArray = filterData.length === 0;

    return (
        <div>

            <div>
                <div>
                    <Field>
                        <FieldLabel htmlFor="input-demo-api-key">Search Request History details</FieldLabel>
                        <Input onChange={(e) => { setSearch(e.target.value) }} placeholder="Enter Request History details" />
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
                        <TableHead>Total Units</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterData.map((requests) => (
                        <TableRow key={requests.Request_ID}>
                            <TableCell>{requests.Request_ID}</TableCell>
                            <TableCell>{requests.FDO}</TableCell>
                            <TableCell>{requests.Warehouse}</TableCell>
                            <TableCell>{requests.Route}</TableCell>
                            <TableCell>{requests.Requested_Date}</TableCell>
                            <TableCell>{requests.Total_Units}</TableCell>
                            <TableCell>{requests.Status}</TableCell>
                        </TableRow>
                    ))}
                    {
                        lengthArray ? <TableRow>
                            <TableCell colSpan={6} className="text-center text-lg text-slate-400">No products matched the selected filters</TableCell>
                        </TableRow> : null
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Request_History