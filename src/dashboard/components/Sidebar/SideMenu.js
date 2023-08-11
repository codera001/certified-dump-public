import { GrOverview } from "react-icons/gr"
import { BiUserCircle } from "react-icons/bi";
import { ImLibrary } from "react-icons/im";

// MdOutlineSettingsPower

export const sideMenu = [
  {
    title: "Overview",
    icon: <GrOverview />,
    path: "/dashboard",
  },
  {
    title: "Profile",
    icon: <BiUserCircle />,
    path: "/profile",
  },
  {
    title: "Library",
    icon: <ImLibrary />,
    path: "/library",
  },
];