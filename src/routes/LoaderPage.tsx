import { cn } from "../lib/utils"
import {Loader} from "lucide-react"
const LoaderPage = ({className}:{className?:string}) => {
  return (
    <div
    className={cn("h-screen w-screen z-50 bg-transparent flex items-center justify-center",className)}
    >
        <Loader className="h-6 w-6 min-h-6 min-w-6 animate-spin"/>
    </div>
  )
}

export default LoaderPage