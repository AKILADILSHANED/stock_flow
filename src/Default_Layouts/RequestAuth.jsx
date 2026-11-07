import React from 'react'
import { useUser } from '@clerk/react'
import { Navigate } from 'react-router-dom';
import Loading from '@/Pages/Components/Loading/Index';

function RequestAuth({ children, Access, Role }) {
    const { isLoaded, isSignedIn, user } = useUser();

    if (Access === 'PUBLIC') {
        return <div>{children}</div>
    } else if (Access === 'PROTECTED') {
        if (!isLoaded) {
            return <Loading/>
        }
        if (!isSignedIn) {
            return <Navigate to="/Sign-in" replace />
        }

        if (user?.publicMetadata?.Role === Role || Role === null) {
            return <div>{children}</div>
        }
        if (user?.publicMetadata?.Role !== Role) {
            return <Navigate to="/Access_Denied" replace />
        }
    }
}

export default RequestAuth