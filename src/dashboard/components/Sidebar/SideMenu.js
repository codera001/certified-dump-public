import { GrOverview } from "react-icons/gr"
import { BiUserCircle } from "react-icons/bi";
import { ImLibrary } from "react-icons/im";
import { AiOutlineWallet } from "react-icons/ai";
import { MdOutlineSettingsPower } from "react-icons/md";

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
  {
    title: "Wallet",
    icon: <AiOutlineWallet />,
    path: "/wallet",
  },
  {
    title: "Log out",
    icon: <MdOutlineSettingsPower />,
    path: "/",
  },
];