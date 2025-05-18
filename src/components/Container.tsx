import type React from "react"
import { cn } from "../lib/utils"


interface ContainerType {
    children:React.ReactNode,
    className?:string
}


const Container = ({children,className}:ContainerType) => {
  return (
    <div className={cn("container px-4 mx-auto md:px-8 w-full py-4",className)}>

        {children}
    </div>
  )
}

export default Container