import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="w-screen justify-center flex flex-col md:flex-row gap-[5rem] md:gap-[6rem] pt-[5rem] md:pt-[8rem] items-center">
      <div className="flex flex-col max-w-[30rem] px-4">
        <h1 className="uppercase text-blue-600 font-md text-[19.4px]">
          Who are we
        </h1>
        <h2 className=" leading-[45px] font-semibold font-poppins text-[39.8px] pt-1">
          Assisting individuals in locating the appropriate real estate.
        </h2>
        <p className="text-[#808080] line-xl pt-1">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
          malesuada leo volutpat.
        </p>
        <div className="flex flex-row gap-4 shadow-lg shadow-slate-150 rounded-[30px] p-4">
          <Image
            height={50}
            width={50}
            src={"/Assets/Icons/smarthome.svg"}
            alt="smarthome"
          />
          <div>
            <h1 className="text-[#4361EE]">Donec porttitor euismod</h1>
            <p className="text-[#808080]">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 shadow-lg shadow-slate-150 rounded-[30px] p-4">
          <Image
            height={50}
            width={50}
            src={"/Assets/Icons/user.svg"}
            alt="user"
          />
          <div>
            <h1 className="text-[#4361EE]">Donec porttitor euismod</h1>
            <p className="text-[#808080]">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:top-0  max-w-full items-center justify-center">
        <div className="flex flex-row flex-wrap justify-center">
          <div className="relative hidden lg:block">
            <Image
              height={300}
              width={300}
              src={"/Assets/Images/house1.png"}
              alt=""
            />
          </div>
          <div>
            <Image
              className="absolute pt-[10rem] md:pt-[12rem] right-[6rem]"
              src={"/Assets/Images/Group.png"}
              height={200}
              width={200}
              alt=""
            />
            <Image
              height={200}
              width={300}
              src={"/Assets/Images/house2.png"}
              alt=""
            />
            <Image
              height={80}
              width={80}
              className="absolute top-[8rem] left-[50%] transform translate-x-[-50%]"
              src={"/Assets/Images/Ellipse.png"}
              alt=""
            />
            <Image
              height={300}
              width={300}
              src={"/Assets/Images/house3.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
