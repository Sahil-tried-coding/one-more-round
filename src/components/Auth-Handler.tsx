import { useAuth, useUser } from "@clerk/clerk-react"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { useState, useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { db } from "../config/firebase.config"
import type { User } from "../types/User"
import LoaderPage from "../routes/LoaderPage"

const AuthHandler = () => {


    const {isSignedIn} = useAuth()

    const {user} = useUser()

    const pathname = useLocation().pathname

    const navigate = useNavigate()

    const  [loading,setLoading] = useState(false)

    useEffect(()=>{

      const saveUserInDb = async()=>{

        if(isSignedIn && user){
          try {
            const userSnap = await getDoc(doc(db,"users",user.id))

            if(!userSnap.exists()){
              const newUser:User = {
                id:user.id,
                email:user.primaryEmailAddress?.emailAddress || "example@gmail.com",
                name: user.fullName ||user.firstName || user.lastName || "Anonymous",
                createdAt:serverTimestamp(),
                uploadedAt:serverTimestamp(),
                imageUrl:user.imageUrl


              }
              await setDoc(doc(db,"users",newUser.id),newUser )
            }
          } catch (error) {
            console.log("There is the error in the authentication page",error)
          }
          finally {
            setLoading(false)
          }
        }

      }

      saveUserInDb()
    },[isSignedIn,user,pathname,navigate])

    

    if(loading){
      return <LoaderPage/>
    }


  return (
    null
  )
}

export default AuthHandler