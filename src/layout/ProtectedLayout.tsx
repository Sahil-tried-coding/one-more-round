import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom'
import LoaderPage from '../routes/LoaderPage'

const ProtectedLayout = ({children}:{children:React.ReactNode}) => {




    const {isSignedIn, isLoaded} = useAuth()



    if(!isLoaded){
        return <LoaderPage/>
    }

    if(!isSignedIn){
        return <Navigate to={'/signin'} replace/>
    }
  return children
}

export default ProtectedLayout