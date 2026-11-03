import React from 'react'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

function Request_Tabs({ clickPending, clickHistory }) {
    return (
        <div>
            <Tabs defaultValue="overview" className="w-[400px]">
                <TabsList>
                    <TabsTrigger onClick={clickPending} value="overview">Pending Requests</TabsTrigger>
                    <TabsTrigger onClick={clickHistory} value="analytics">Request History</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default Request_Tabs