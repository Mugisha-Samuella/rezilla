import Image from "next/image";
const BlogsAndPosts = () => {
  return (
    <div className="bg-[#3A0CA3] mt-[150px] pb-[40px]">
      <h2 className="uppercase text-white text-center font-medium text-[19.4px] pt-[60px]">
        what's trending
      </h2>
      <h1 className="text-center text-white font-medium text-[39.8px]">
        Latest Blogs & Posts
      </h1>
      <div className="flex flex-col md:flex-row mx-4 mt-5">
        <div className="inline-block">
          <Image src={"/Assets/Images/blog1.png"} width={400} height={400} alt="" />
          <div className="w-[250px] -mt-1 ml-5">
            <h1 className="text-white text-[24px] font-medium">
              Top 10 Home Buying Mistakes to Avoid
            </h1>
            <h2 className="text-[#FFFFFF] mt-2 font-light">
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
            </h2>
          </div>
          <div className="hidden md:block ml-[300px] mt-3">
            <Image
              className="hover:shadow-[#3A0CA3] shadow-lg rounded-full"
              src={"/Assets/Icons/arrow.svg"}
              alt=""
              width={50} height={50}
            />
          </div>
        </div>
        <div className="inline-block">
          <Image src={"/Assets/Images/blog2.png"} width={400} height={400} alt="" />
          <div className="w-[250px] -mt-1 ml-5">
            <h1 className="text-white text-[24px] font-medium">
              How to Stage Your Home for a Sale
            </h1>
            <h2 className="text-[#FFFFFF] mt-2 font-thin">
              Nullam odio lacus, dictum quis pretium congue, vehicula venenatis
              nunc.
            </h2>
          </div>
          <div className="hidden md:block ml-[300px] mt-3">
            <Image src={"/Assets/Icons/arrow.svg"} width={50} height={50} alt="" />
          </div>
        </div>
        <div className="inline-block">
          <Image src={"/Assets/Images/blog3.png"} width={400} height={400} alt="" />
          <div className="w-[250px] -mt-1 ml-5">
            <h1 className="text-white text-[24px]">
              5 Tips for First-Time Home Sellers
            </h1>
            <h2 className="text-[#FFFFFF] mt-2 font-extralight">
              In hac habitasse platea dictumst. Phasellus vel velit vel augue
              maximus.
            </h2>
          </div>
          <div className=" hidden md:block ml-[300px] mt-3">
            <Image src={"/Assets/Icons/arrow.svg"} width={50} height={50} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsAndPosts;
