import { useNavigate, useNavigation } from 'react-router-dom'

function Not_Found() {
    const navigation = useNavigate();

    const back_to_login = () => {
        navigation("/");
    }

    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <div className='flex flex-col justify-center items-center p-5 gap-3'>
                <div className='text-red-600 font-bold text-6xl'>404</div>
                <div className='text-orange-600 font-bold text-6xl'>Page Not Found!</div>
                <label className='text-lg text-slate-400'>The page you are looking for is temporary moved or not found.</label>
                <button onClick={back_to_login} className='p-2 rounded-xl shadow-md bg-orange-600 text-white hover:bg-orange-700'>Back to Login</button>
            </div>
        </div>
    )
}

export default Not_Found