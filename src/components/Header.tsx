import { cn } from "../lib/utils"
import Container from "./Container"
import LogoContainer from "./LogoContainer"
import NavbarContainer from "./NavbarContainer"

const Header = () => {
  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
      <Container>
        <div className="flex w-full items-center gap-4">
<div>

        <LogoContainer/>


        <nav>
           <NavbarContainer/>
        </nav>
</div>
        </div>
      </Container>
    </header>
  )
}

export default Header