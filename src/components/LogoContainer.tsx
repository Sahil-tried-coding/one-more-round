import { Link } from "react-router-dom"

const LogoContainer = () => {
  return (
    <Link to={"/"}>
        <img className="min-h-6 min-w-6 object-contain" src="/assets/svg/logo.svg"/>
    </Link>
  )
}

export default LogoContainer