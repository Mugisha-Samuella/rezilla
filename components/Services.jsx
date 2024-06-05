import Image from "next/image";
const Services = () => {
  return (
    <div className="bg-[#d4d4d42c] pt-9">
      <h2 className="text-center font-medium text-[19.4px] pt-[60px]">
        Our Services
      </h2>
      <h1 className="text-center font-medium text-[39.8px]">
        Donec porttitor euismod dignissim
      </h1>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center pt-4">
        <div className="bg-white w-[340px] h-[330px] shadow-lg rounded-[30px] relative">
          <div className="absolute mt-[60px] mx-[120px] shadow-2xl rounded-full bg-[#4361EE] p-[15px]">
            <Image
              className=" relative  items-center "
              alt=""
              src={"/Assets/Icons/search.svg"}
              width={50}
              height={50}
            />
          </div>
          <div className="static">
            <div className="absolute mt-[170px]">
              <h1 className="text-[#2B2B2B]  text-center font-medium  mx-[70px] text-lg">
                Buy a New Home
              </h1>
              <p className="text-center  font-light mt-[10px] mx-6 text-[#808080]">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white w-[340px] h-[330px] shadow-lg rounded-[30px] relative">
          <div className="absolute mt-[60px] mx-[120px] shadow-2xl rounded-full bg-[#4361EE] p-[15px]">
            <Image
              className=" relative  items-center "
              alt=""
              src={"/Assets/Icons/home2.svg"}
              width={50}
              height={50}
            />
          </div>
          <div className="static">
            <div className="absolute mt-[170px]">
              <h1 className="text-[#2B2B2B]  text-center font-medium  mx-[70px] text-lg">
                Sell a house
              </h1>
              <p className="text-center  font-light mt-[10px] mx-6 text-[#808080]">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white w-[340px] h-[330px] shadow-lg rounded-[30px] relative">
          <div className="absolute mt-[60px] mx-[120px] shadow-2xl rounded-full bg-[#4361EE] p-[15px]">
            <Image
              className=" relative  items-center "
              src={"/Assets/Icons/bedd.svg"}
              alt=""
              width={50}
              height={50}
            />
          </div>
          <div className="static">
            <div className="absolute mt-[170px]">
              <h1 className="text-[#2B2B2B]  text-center font-medium  mx-[70px] text-lg">
                Rent a house
              </h1>
              <p className="text-center  font-light mt-[10px] mx-6 text-[#808080]">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
