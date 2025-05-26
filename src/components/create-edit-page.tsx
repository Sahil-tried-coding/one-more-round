import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Interview } from "../types/User"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../config/firebase.config"
import FormMockInterview from "./form-mock-interview"

const CreateEditPage = () => {

const { interviewId} =     useParams<{interviewId:string}>()

const [interview, setInterview] = useState<Interview|null>(null)

useEffect(()=>{
const fetchInterview = async()=>{


    try {

      if(!interviewId) return

        const interviewDoc = await getDoc(doc(db,"Interview",interviewId))
        if(interviewDoc.exists()){
            setInterview({...interviewDoc.data()} as Interview)
        }
    } catch (error) {
        console.log(error)
    }
  }
  fetchInterview()
},[interviewId])
  return (
    <div className="my-6 flex-col w-full">

      <FormMockInterview initialData={interview} />
    </div>
  )
}

export default CreateEditPage