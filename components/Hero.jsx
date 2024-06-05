import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="w-screen flex flex-col items-center gap-5 min-h-[80vh] pt-[8rem] pb-[2rem] bg-[#ecf4f8]"
    >
      <h1 className="text-[1.5rem] lg:text-5xl text-center font-extrabold">
        Find a perfect home you love!
      </h1>
      <div className="flex flex-col gap-1">
        <p className="text-center max-w-[30rem] px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
      <div className="">
        <a
          href="#"
          className="bg-blue-500 w-[120px] py-2 text-white px-3 rounded-[20px] inline-block shadow-md hover:bg-blue-600"
        >
          Get started
        </a>
      </div>
      <div className="w-full relative flex flex-col gap-4 max-w-[55rem]">
        <div className="absolute left-2 top-4 h-[50px] w-[50px] sm:top-0 ">
          <Image fill={true} src={"/Assets/Images/Ellipse.png"} alt="ellipse" />
        </div>
        <h1 className="text-center text-md text-slate-400 px-4">
          Trusted by 100+ Companies accross the globe
        </h1>
        <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center  px-4">
          <Image
            className="cursor-pointer"
            width={100}
            height={100}
            src={"/Assets/Images/google.png"}
            alt="Google"
          />
          <Image
            className="cursor-pointer mt-2"
            width={100}
            height={100}
            src={"/Assets/Images/amazon.png"}
            alt="Amazon"
          />
          <Image
            className="cursor-pointer"
            height={100}
            width={100}
            src={"/Assets/Images/logitech.png"}
            alt="Netflix"
          />
          <Image
            className="cursor-pointer"
            height={100}
            width={100}
            src={"/Assets/Images/spotify.png"}
            alt="Netflix"
          />
          <Image
            className="cursor-pointer"
            height={100}
            width={100}
            src={"/Assets/Images/samsung.png"}
            alt="Netflix"
          />
          <Image
            className="cursor-pointer"
            height={100}
            width={100}
            src={"/Assets/Images/netflix.png"}
            alt="Netflix"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
