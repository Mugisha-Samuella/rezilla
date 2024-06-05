const LatestProperties = () => {
  return (
    <div className="w-full flex flex-col justify-center px-3 gap-6 md:gap-[6rem] pt-[4rem] md:flex-row items-center">
      <div className="max-w-[40rem]">
        <h1 className="uppercase text-blue-600 font-md text-[19.4px]">
          Checkout our new
        </h1>
        <h2 className="font-semibold font-poppins text-[39.8px]">
          Latest Listed Properties
        </h2>
        <p>
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus.
        </p>
      </div>
      <div className="flex gap-6  md:gap-2">
        <a
          href="/"
          className="bg-white text-purple-900 hover:bg-purple-900 hover:border-collapse hover:text-white border-purple-900 border-2 shadow-md rounded-[50px] pr-4 pl-4 p-2"
        >
          Buy
        </a>
        <a
          href="/"
          className="bg-purple-900 text-white p-2 rounded-[50px] pr-4 pl-4 border-purple-900  hover:bg-purple-950 shadow-md"
        >
          Sell
        </a>
        <a
          href="/"
          className="bg-white text-purple-900 hover:bg-purple-900 hover:text-white border-purple-900 border-2 shadow-md rounded-[50px] pr-4 pl-4 p-2"
        >
          Rent
        </a>
      </div>
    </div>
  );
};

export default LatestProperties;
