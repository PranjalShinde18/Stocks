import { GoHomeFill } from "react-icons/go";
import { PiChartLineFill } from "react-icons/pi";
import { RiStockFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { MdInsertChart } from "react-icons/md";
import { HiMiniBookmark } from "react-icons/hi2";

interface Link {
  name: string;
  path: string;
  icon: IconType;
}

export const links: Link[] = [
  {
    name: "Home",
    path: "/",
    icon: GoHomeFill,
  },
  {
    name: "Stocks",
    path: "/stocks",
    icon: MdInsertChart,
  },
  {
    name: "Top Investors",
    path: "/top-investors",
    icon: PiChartLineFill,
  },
  {
    name: "Wishlist",
    path: "/wishlist",
    icon: HiMiniBookmark,
  },
  {
    name: "Paper Trading",
    path: "/paper-trading",
    icon: RiStockFill,
  },
];
