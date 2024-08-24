import { useExpandContext } from "@/context/ExpandContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import TableComponent from "../Table/TableComponent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Investor = () => {
  const {id} = useParams();
  const { expand } = useExpandContext();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div
      className={`p-4 h-screen transition-all ${expand ? "pl-60" : "pl-20"}`}
    >
      <div className="mt-1 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="w-28 h-28 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 border-black">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="text-2xl font-bold">Example Name</div>
            <div className="text-md text-gray-500">Net worth: $5,000,000</div>
            <div className="text-md text-gray-500">Followers: 10k</div>
          </div>
        </div>
        <Button className="w-32 rounded-xl flex items-center overflow-hidden gap-1 bg-gray-300 p-[9px] px-4 transition-all hover:bg-black hover:text-white cursor-pointer">
          <p>Follow</p>
        </Button>
      </div>
      <div className="my-5 flex flex-col gap-3">
        <div className="text-2xl font-semibold">Description</div>
        <div className="text-md text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia aut fugit error et fugiat sapiente odio ullam nemo quisquam, voluptatibus voluptate, ducimus fuga distinctio molestias? Amet minima possimus aliquid!</div>
      </div>
      <div className="flex flex-col gap-5 pb-2">
        <div className="text-2xl font-semibold">Current Holdings</div>
        <div>
          <TableComponent />
        </div>
      </div>
    </div>
  );
};

export default Investor;
