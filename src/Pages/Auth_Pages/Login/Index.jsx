import { useNavigate } from "react-router-dom"
import { SignIn } from "@clerk/react";

function Login() {
  const navigation = useNavigate();
  const navigate_to_dashboard = () => {
    navigation("/SM_Pages/Home");
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <SignIn/>
    </div>
  )
}

export default Login