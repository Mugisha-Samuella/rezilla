import Image from "next/image";
const Experts = () => {
  return (
    <div>
      <Image
        className="absolute -my-[30px] mx-[1000px]"
        alt=""
        src={"/Assets/Images/Ellipse.png"}
        width={50}
        height={50}
      />
      <div>
        <div className="text-center mt-[170px]">
          <h1 className="uppercase text-blue-600 font-md text-[19.4px]">
            Introduce yourself to
          </h1>
          <h2 className=" font-semibold font-poppins text-[39.8px]">
            Our Team of Experts
          </h2>
        </div>
        <div className="flex flex-col md:flex-row space-x-[5rem]  pt-[2rem] items-center justify-center">
          <div className="flex flex-row gap-4 space-x-[5rem]">
            <div className="text-center">
              <Image
                src={"/Assets/Images/person4.png"}
                width={150}
                height={10}
                alt=""
              />
              <h2 className=" font-semibold font-poppins text-[19.8px]">
                Brendon M
              </h2>
              <h1 className=" text-blue-600 font-md text-[15px]">
                CEO & Founder
              </h1>
            </div>
            <div className="text-center">
              <Image
                src={"/Assets/Images/person3.png"}
                width={150}
                height={10}
                alt=""
              />
              <h2 className=" font-semibold font-poppins text-[19.8px]">
                Jodi J. Appleby
              </h2>
              <h1 className=" text-blue-600 font-md text-[15px]">
                Real Estate Developer
              </h1>
            </div>
          </div>
          <div className="flex flex-row gap-4  space-x-[5rem] text-center">
            <div>
              <Image
                width={150}
                height={10}
                src={"/Assets/Images/person2.png"}
                alt=""
              />
              <h2 className=" font-semibold font-poppins text-[19.8px]">
                Justin S. Meza
              </h2>
              <h1 className=" text-blue-600 font-md text-[15px]">
                Listing Agent
              </h1>
            </div>
            <div className="text-center">
              <Image
                width={150}
                height={10}
                src={"/Assets/Images/person1.png"}
                alt=""
              />
              <h2 className=" font-semibold font-poppins text-[19.8px]">
                Susan T. Smith
              </h2>
              <h1 className=" text-blue-600 font-md text-[15px]">
                Buyer's Agent
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
