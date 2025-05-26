import { useAuth } from "@clerk/clerk-react";
import { cn } from "../lib/utils";
import Container from "./Container";
import LogoContainer from "./LogoContainer";
import NavbarContainer from "./NavbarContainer";
import { NavLink } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import ToggleContainer from "./ToggleContainer";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn(
        "w-full flex items-center border-b duration-150 transition-all ease-in-out"
      )}
    >
      <Container>
        <div className="flex w-full items-center gap-4">
          {/* <div className="flex items-center gap-4"> */}

          <LogoContainer />

          <nav className=" items-center gap-2 hidden md:flex">
            <NavbarContainer />

            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "font-semibold text-neutral-900"
                  )
                }
              >
                Take an Interview
              </NavLink>
            )}
          </nav>
          {/* </div> */}

          {/* profile container */}

          <div className="flex items-center ml-auto gap-4">
            <ProfileContainer />

            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
