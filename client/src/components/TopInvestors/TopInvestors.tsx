import { useExpandContext } from "@/context/ExpandContext";
import { IoSearchOutline } from "react-icons/io5";
import { ScrollArea } from "../ui/scroll-area";

const TopInvestors = () => {
  const { expand } = useExpandContext();

  return (
    <div
      className={`p-4 h-screen transition-all ${expand ? "pl-60" : "pl-20"}`}
    >
      <div className="">
        <h1 className="text-3xl mb-5 font-semibold inline-block">
          Top Investors
        </h1>
        {/* search bar */}
        <div className="flex items-center gap-1 py-2">
          <input
            type="text"
            placeholder="Search top investor"
            className="p-2 px-5 rounded-xl border w-full focus:border-black focus:outline-none focus:border-2"
          />
          <div className="rounded-xl flex items-center gap-1 bg-gray-300 p-[9px] px-4 transition-all hover:bg-black hover:text-white cursor-pointer">
            <p>Search</p>
            <IoSearchOutline className="text-2xl" />
          </div>
        </div>
      </div>
      {/* Top Investors Cards */}
      <ScrollArea className="w-full h-[734px]">
        <div className="flex gap-5 flex-wrap">
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              expand ? "w-[340.5px]" : "w-[380.6px]"
            } h-96 p-4 border rounded-xl shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400`}
          >
            <div className="bg-gray-200 rounded-full w-40 h-40 mb-2"></div>
            <div className="font-semibold w-full mb-2">Elon Musk</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tempore modi velit dolorem placeat dolores, dicta ipsam iste
              deleniti natus eos minus, nisi fugit cum similique aperiam
              mollitia odio id?
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TopInvestors;
