import {  NavLink } from "react-router-dom"
import { navItems } from "../lib/helpers"
import { cn } from "../lib/utils"


interface NavbarContainerType {
    isMobile?:boolean
}


const NavbarContainer = ({isMobile=false}:NavbarContainerType) => {
  return (
    <ul className={cn("flex items-center gap-3" , isMobile && "items-start flex-col gap-8")}>
{
    navItems.map((route)=>(
        <NavLink key={route.href} to={route.href}
        className={({isActive}) => 
            cn("text-base text-neutral-600",isActive&&"font-semibold text-neutral-900")}
        >
        {route.label}
        </NavLink>
    ))
}

    </ul>
  )
}

export default NavbarContainer