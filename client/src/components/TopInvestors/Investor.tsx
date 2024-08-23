import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  name: string;
  image_url: string;
  description: string;
}

const Investor = ({ name, image_url, description }: Props) => {
  return (
    <div
      className={`flex flex-col items-center overflow-hidden group
                      w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]
                      h-[280px] sm:h-64 md:h-72 lg:h-[340px] p-4 border rounded-xl shadow-md shadow-gray-400 
                      transition-all hover:shadow-lg hover:shadow-gray-400`}
    >
      <Avatar className="w-28 h-28 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-40 lg:h-40 border-2 border-black">
        <AvatarImage src={image_url} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="font-semibold w-full mt-4 mb-2 text-left line-clamp-1">
        {name}
      </div>
      <div className="text-sm sm:text-base text-left line-clamp-2 w-full">
        {description}
      </div>
      <div className="w-full flex justify-end items-center mt-4 pr-2 transition-all group-hover:pr-0">
        <FaArrowRight className="text-lg" />
      </div>
    </div>
  );
};

export default Investor;
