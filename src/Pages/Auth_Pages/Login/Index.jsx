import { useNavigate, useNavigation } from "react-router-dom"

function Login() {
  const navigation = useNavigate();
  const navigate_to_dashboard = ()=>{
    navigation("/SM_Pages/Home");
  }
  return (
    <div className='flex flex-col'>
      <div className="flex flex-col justify-center items-center h-screen gap-2">
        <label className="text-orange-500 font-bold text-3xl">Welcome back to Stock flow</label>

        <div className="flex flex-col p-10 shadow-xl gap-3">
          <label className="text-slate-500 font-bold text-lg">Enter your login credentials</label>
          <div className="flex flex-col">
            <label>Email:</label>
            <input type="text" placeholder="Enter your Email Address" className="border rounded-md p-1 outline-orange-500" />
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" className="border rounded-md p-1 outline-orange-500" />
          </div>
          <div>
            <button onClick={navigate_to_dashboard} className="w-full bg-orange-500 text-white text-lg rounded-md py-1 hover:bg-orange-600 shadow-lg">Login</button>
          </div>
        </div>
        <label className="text-slate-400 text-sm">Designed by Akila Edirisooriya | All right reserved</label>
      </div>
    </div>
  )
}

export default Login