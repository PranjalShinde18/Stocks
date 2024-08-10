import { GoHome } from "react-icons/go";
import { GrLineChart } from "react-icons/gr";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IconType } from "react-icons";
import { LuFile } from "react-icons/lu";
import { LuCandlestickChart } from "react-icons/lu";

interface Link {
  name: string;
  path: string;
  icon: IconType;
}

export const links: Link[] = [
  {
    name: "Home",
    path: "/",
    icon: GoHome,
  },
  {
    name: "Stocks",
    path: "/stocks",
    icon: GrLineChart,
  },
  {
    name: "Top Investors",
    path: "/top-investors",
    icon: FaIndianRupeeSign,
  },
  {
    name: "Wishlist",
    path: "/wishlist",
    icon: LuFile,
  },
  {
    name: "Paper Trading",
    path: "/paper-trading",
    icon: LuCandlestickChart,
  },
];
