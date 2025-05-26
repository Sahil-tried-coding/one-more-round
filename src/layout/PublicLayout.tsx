import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import AuthHandler from "../components/Auth-Handler"

const PublicLayout = () => {
  return (
    <div className="w-full">
        <Header/>
        <AuthHandler/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PublicLayout