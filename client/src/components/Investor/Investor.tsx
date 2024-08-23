import { useExpandContext } from "@/context/ExpandContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Investor = () => {
  const { expand } = useExpandContext();
  return (
    <div
      className={`p-4 h-screen transition-all ${expand ? "pl-60" : "pl-20"}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="w-28 h-28 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 border-black">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="text-2xl">Example Name</div>
            <div className="text-lg text-gray-500">Net Worth: $5 billion</div>
          </div>
        </div>
        <Button className="rounded-xl flex items-center overflow-hidden gap-1 bg-gray-300 p-[9px] px-4 transition-all hover:bg-black hover:text-white cursor-pointer">
          <p>Follow</p>
        </Button>
      </div>
    </div>
  );
};

export default Investor;
