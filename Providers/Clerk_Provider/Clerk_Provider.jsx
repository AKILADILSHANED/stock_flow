import { ClerkProvider } from '@clerk/react'
import { useNavigate } from 'react-router-dom'
const pulishable_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function Clerk_Provider({ children }) {
    const navigate = useNavigate();
    return (
        <ClerkProvider
            publishableKey={pulishable_key}
            routerPush={(to) => { navigate(to) }}
            routerReplace={(to) => { navigate(to, { replace: true }) }}
            signInUrl='/Sign-in'
            signUpUrl='/Sign-up'
            signInFallbackRedirectUrl='/Continue'
            signUpFallbackRedirectUrl='/Sign-in'
            afterSignOutUrl='/Sign-in'
        >
            {children}
        </ClerkProvider>
    )
}

export default Clerk_Provider