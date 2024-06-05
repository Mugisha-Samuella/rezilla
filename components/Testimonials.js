import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-1 md:gap-[10rem] pt-[1rem] md:flex-row items-center">
      <div className="w-[500px]  px-4">
        <h1 className="uppercase text-blue-600 font-md text-[19.4px]">
          Testimonials
        </h1>
        <h2 className=" font-semibold font-poppins text-[39.8px]">
          Look What Our Customers Say!
        </h2>
        <p className="mb-5">
          Fusce venenatis tellus a felis scelerisque, non pulvinar est
          pellentesque.
        </p>
        <div className="flex flex-row gap-5">
          <Image
            className="hover:shadow-blue-500  shadow-sm rounded-full"
            src={"/Assets/Icons/arrowl.svg"}
            alt=""
            width={50}
            height={50}
          />
          <Image
            className="hover:shadow-blue-500  shadow-sm rounded-full"
            src={"/Assets/Icons/arrowr.svg"}
            alt=""
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="relative my-[150px]">
        <Image
          className="ml-[20px]"
          src={"/Assets/Images/ellipse3.svg"}
          alt=""
          width={35}
            height={35}
        />
        <div className="bg-white h-[300px] w-[450px] shadow-lg rounded-[30px] ">
          <div className="p-6">
            <Image src={"/Assets/Icons/quotes.svg"} alt="" width={30} height={30} />
            <p className="mt-3">
              I highly recommend Jodi J. Appleby. She was attentive to our needs
              and worked tirelessly to find us the perfect home. We couldn't be
              happier with our new place!
            </p>
          </div>
          <Image className="ml-4 -mt-5" src={"/Assets/Icons/line.svg"} width={50}
            height={10} alt="" />
          <div className="inline-flex space-x-[70px] mt-3">
            <div className="inline-flex space-x-3 ml-6">
              <Image src={"/Assets/Images/barbara.png"} width={50}
            height={50} alt="" />
              <h2 className="mt-3 font-semibold">Barbara D. Smith</h2>
            </div>
            <Image src={"/Assets/Icons/stars.svg"} width={100}
            height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
