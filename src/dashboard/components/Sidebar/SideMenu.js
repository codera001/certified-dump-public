import { GrOverview } from "react-icons/gr";
import { BiSupport, BiUserCircle } from "react-icons/bi";
import { ImLibrary } from "react-icons/im";
import { AiOutlineWallet } from "react-icons/ai";
import { MdOutlinePayment, MdOutlineSettingsPower } from "react-icons/md";
import { BsJournalBookmark } from "react-icons/bs";

export const sideMenu = [
  {
    title: "Overview",
    icon: <GrOverview />,
    path: "/dashboard",
  },
  {
    title: "Buy An Exam",
    icon: <BsJournalBookmark />,
    path: "/providers",
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
    title: "Finance",
    icon: <AiOutlineWallet />,
    path: "/wallet",
  },
  {
    title: "Top up your balance",
    icon: <MdOutlinePayment />,
    path: "/payment",
  },
  {
    title: "Support & Help",
    icon: <BiSupport />,
    path: "/support",
  },
  {
    title: "Log out",
    icon: <MdOutlineSettingsPower />,
    path: "/login",
  },
];
