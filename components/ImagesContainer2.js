import Image from "next/image";
const ImagesContainer2 = () => {
  return (
    <div className="items-center justify-center">
      <Image
        className=" mx-[600px] mt-[50px]"
        src={"/Assets/Images/ellipsee.svg"}
        alt=""
        width={50}
        height={50}
      />
      <div className="mx-[100px] my-[100px]">
        <div>
          <h1 className="uppercase text-blue-600 font-md text-[19.4px]">
            Areas accross the town
          </h1>
          <h2 className=" font-semibold font-poppins text-[39.8px]">
            Neighborhood Properties
          </h2>
        </div>
      </div>
      <div className="items-center justify-center flex md:flex-col gap-1">
        <div className=" flex md:flex-row ">
          <Image src={"/Assets/Images/property1.png"} alt=""  width={350} height={40}  />
          <Image src={"/Assets/Images/property2.png"} alt="" width={350} height={40}/>
          <Image src={"/Assets/Images/property3.png"} alt="" width={350} height={40}/>
        </div>
        <div className="flex md:flex-row ">
          <Image src={"/Assets/Images/property4.png"} alt="" width={350} height={40}/>
          <Image src={"/Assets/Images/propert5.png"} alt="" width={700} height={40}/>
        </div>
      </div>
    </div>
  );
};

export default ImagesContainer2;
