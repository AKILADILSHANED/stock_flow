import React from 'react'
import { useUser } from '@clerk/react'
import { useNavigate } from 'react-router-dom';
import Loading from '@/Pages/Components/Loading/Index';

function Continue() {

  const { user, isLoaded, isSignedIn } = useUser();
  const Navigate = useNavigate();

  if (!isLoaded) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <Loading/>
      </div>
    )
  }

  if (!isSignedIn) {
    Navigate("/Sign-in", { replace: true });
  }

  if (user?.publicMetadata?.Role === "SM") {
    Navigate("/SM_Pages/Home", { replace: true });
  }

  if (user?.publicMetadata?.Role === "FDO") {
    Navigate("/FDO_Pages/Home", { replace: true });
  }
}

export default Continue