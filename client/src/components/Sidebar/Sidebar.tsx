import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../../constants";
import { IconType } from "react-icons";
import { useExpandContext } from "@/context/ExpandContext";

interface ILink {
  name: string;
  path: string;
  icon: IconType;
}

const Sidebar = () => {
  const { expand, setExpand } = useExpandContext();
  const { pathname } = useLocation();
  return (
    <aside className="h-screen fixed">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all ${
          expand ? "w-56" : "w-16"
        }`}
      >
        <div className="flex justify-between items-center p-4 pb-4 border-b">
          <div
            className={`text-2xl overflow-hidden transition-all ${
              expand ? "w-56" : "w-0"
            }`}
          >
            Logo
          </div>
          <button
            onClick={() => setExpand(!expand)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expand ? (
              <FaChevronLeft className="text-xl" />
            ) : (
              <FaChevronRight className="text-xl" />
            )}
          </button>
        </div>

        <ul className="flex-1">
          {links.map((link: ILink) => {
            const isActive = link.path === pathname;
            return (
              <li key={link.name} className={`relative group`}>
                <NavLink
                  to={link.path}
                  className={`flex gap-4 items-center py-4 ${
                    expand ? "m-4" : "ml-4 my-4"
                  }`}
                >
                  <div
                    className={`text-sm flex items-center gap-2 ${
                      isActive
                        ? "text-black font-semibold transition-all gap-3"
                        : "text-gray-500 group-hover:text-black group-hover:font-medium"
                    }`}
                  >
                    <link.icon
                      className={`text-[1.6rem] transition-all ${
                        isActive && "text-black"
                      }`}
                    />
                    <p
                      className={`truncate font-regular overflow-hidden transition-all  ${
                        !expand && "w-0"
                      }`}
                    >
                      {expand ? link.name : ""}
                    </p>
                  </div>

                  {!expand && (
                    <div
                      className={`
                        absolute left-full rounded-md px-2 py-1 ml-6
                        bg-black text-white text-md
                        invisible opacity-100 -translate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                    `}
                    >
                      {link.name}
                    </div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="border-t flex p-3 items-center">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expand ? "w-52 ml-2" : "w-0"
            }`}
          >
            <div className="leading-4">
              <p className="text-md font-semibold">
                {expand ? "John Doe" : ""}
              </p>
              <p className="text-xs text-gray-500">{expand ? "Admin" : ""}</p>
            </div>
            <BsThreeDotsVertical className="text-xl" />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
