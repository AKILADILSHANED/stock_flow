import { SignIn } from "@clerk/react";

function Login() {
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <SignIn routing="path" path="/Sign-in" />
    </div>
  )
}

export default Login