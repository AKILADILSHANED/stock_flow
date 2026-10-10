import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const navigation = (e) => {
        e.preventDefault();
        navigate("/Dashboard");
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen min-w-screen">
            <div className="flex flex-col px-15 py-5 shadow-lg rounded-xl items-center">
                <div className="text-3xl font-bold font-serif py-2 text-orange-600">Login</div>
                <div className="font-serif text-lg">Welcom back to the Stock Flow</div>
                <div className="text-slate-400 font-serif">
                    Enter your email and password to login
                </div>
                <form onSubmit={navigation} className="flex flex-col text-left w-full gap-2 py-10 font-serif">
                    <div className="flex flex-col gap-2">
                        <label>Email</label>
                        <input className="border border-slate-400 rounded-md px-2 py-0.5" placeholder="youremail@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Password</label>
                        <input type="password" className="border border-slate-400 rounded-md px-2 py-0.5" placeholder="Enter Password" />
                    </div>
                    <div>
                        <button type="submit" className="bg-orange-700 text-white py-1 w-full rounded-md hover:bg-orange-600">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;