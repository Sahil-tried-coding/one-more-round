import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative ">
        <img className="w-full h-full object-cover absolute opacity-20" src="assets/img/bg.png" />
        <Outlet/>
    </div>
  )
}

export default AuthLayout