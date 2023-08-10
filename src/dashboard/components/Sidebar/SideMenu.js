import { GrOverview } from "react-icons/gr"
import { BiUserCircle } from "react-icons/bi";

export const sideMenu = [
  {
    title: 'Overview',
    icon: <GrOverview />,
    path: "/dashboard",
  },
  {
    title: 'Profile',
    icon: <BiUserCircle />,
    path: "/profile",
  },
]