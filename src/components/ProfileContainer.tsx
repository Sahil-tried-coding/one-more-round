import { useAuth, UserButton } from '@clerk/clerk-react'
import { Loader } from 'lucide-react'
import { Button } from '../components/ui/button'

const ProfileContainer = () => {



    const {isLoaded,isSignedIn} = useAuth()

    if(!isLoaded){
        return <div className='flex items-center'>
            <Loader className='h-6 w-6 animate-spin '/>
        </div>
    }
  return (
    <div>
        {
            isSignedIn ? <UserButton afterSwitchSessionUrl='/' /> : <div>
                <Button>Get Started</Button>
            </div>
        }



    </div>
  )
}

export default ProfileContainer