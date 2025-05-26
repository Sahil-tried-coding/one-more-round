import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../components/ui/sheet";
import NavbarContainer from "./NavbarContainer";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";
import { useAuth } from "@clerk/clerk-react";

const ToggleContainer = () => {
  const { userId } = useAuth();
  return (
    <div className="block md:hidden ">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="flex flex-col items-start gap-6 justify-center">
              <NavbarContainer isMobile />

              {userId && (
                <NavLink
                  to={"/generate"}
                  className={({ isActive }) =>
                    cn(
                      "text-base text-neutral-600  ",
                      isActive && "font-semibold text-neutral-900"
                    )
                  }
                >
                  Take an Interview
                </NavLink>
              )}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ToggleContainer;
