import Image from "next/image";

const BecomeAnAgent = () => {
  return (
    <div className="bg-[#3A0CA3] mx-[80px] max-w-[1100px] h-[255px] rounded-[40px] inline-flex">
       <Image
          className=" "
          src={"/Assets/Images/agent.png"}
          alt=""
          width={350}
        height={350}
        />
      <Image
        className="absolute mx-[970px] -mt-6"
        src={"/Assets/Images/ellipse16.svg"}
        alt=""
        width={50}
        height={50}
      />
      <Image
        className="absolute mx-[320px] mt-[100px]"
        src={"/Assets/Images/ellipse17.svg"}
        alt=""
        width={50}
        height={50}
      />

      <div>
        
        <div className="text-white mx-1 w-[500px] ml-[400px] mt-[70px]">
          <h1 className="text-[30px] font-semibold word">Become an Agent.</h1>
          <h2 className="w-[380px]">
            Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis
            scelerisque.{" "}
          </h2>
        </div>
      </div>
      <div className="bg-white cursor-pointer pl-4  shadow-lg pr-4 mt-[90px] h-[50px] hover:bg-white hover:border-[#3A0CA3] border-2 rounded-[30px] pt-2 pb-2 -ml-[100px]">
        <a className="text-[#3A0CA3] hover:bg-[#b2a1d92b]">Register Now</a>
      </div>
    </div>
  );
};

export default BecomeAnAgent;