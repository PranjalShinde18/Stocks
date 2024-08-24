import { useExpandContext } from "@/context/ExpandContext";
import { ChangeEvent, useEffect } from "react";
// import { IoSearchOutline } from "react-icons/io5";
import { ScrollArea } from "../ui/scroll-area";
// import investors from "@/investors";
import { useState } from "react";
import InvestorCard from "./InvestorCard";
import Loader from "../Loader/Loader";
// import { Link } from "react-router-dom";

interface investorType {
  name: string;
  image_url: string;
  description: string;
}

const TopInvestors = () => {
  const { expand } = useExpandContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [investors, setInvestors] = useState<investorType[]>([]);
  const [filteredInvestors, setFilteredInvestors] = useState<investorType[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = investors.filter(
      (investor) =>
        investor.name.toLowerCase().includes(query) ||
        investor.description.toLowerCase().includes(query)
    );

    setFilteredInvestors(filtered);
  };

  useEffect(() => {
    const getInvestors = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/investors`
        );
        const data = await response.json();
        setInvestors(data);
        setFilteredInvestors(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getInvestors();
    console.log(investors);
  }, []);

  return (
    <div
      className={`p-4 h-screen transition-all ${expand ? "pl-60" : "pl-20"}`}
    >
      <div className="sticky top-5 bg-white z-10">
        <h1 className="text-3xl mb-5 font-semibold inline-block">
          Top Investors
        </h1>
        {/* search bar */}
        <div className="flex items-center overflow-hidden gap-1 py-2">
          <input
            type="text"
            placeholder="Search top investor"
            className="p-2 px-5 rounded-xl border w-full focus:border-black focus:outline-none focus:border-2"
            value={searchQuery}
            onChange={handleSearch}
          />
          {/* <button className="rounded-xl flex items-center overflow-hidden gap-1 bg-gray-300 p-[9px] px-4 transition-all hover:bg-black hover:text-white cursor-pointer">
            <p>Search</p>
            <IoSearchOutline className="text-2xl"/>
          </button> */}
        </div>
      </div>

      {/* Top Investors Cards */}
      {!loading ? (
        <ScrollArea className="w-full h-full">
          <div className="flex gap-5 flex-wrap pt-2">
            {filteredInvestors.length > 0 ? (
              filteredInvestors.map((investor) => (
                <InvestorCard
                  key={investor.name}
                  name={investor.name}
                  image_url={investor.image_url}
                  description={investor.description}
                />
              ))
            ) : (
              <div className="flex w-full justify-center items-center">
                No Investors Found
              </div>
            )}
          </div>
        </ScrollArea>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TopInvestors;
