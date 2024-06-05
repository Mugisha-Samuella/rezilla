const Footer = () => {
  return (
    <div className="bg-[#4362ee2e] mt-[60px] h-[350px]">
      <div className="inline-flex space-x-[90px]">
        <div className="">
          <div className="inline-flex mt-[60px] mx-[120px] space-y-2 space-x-3">
            <div className=" shadow-2xl rounded-full bg-[#4361EE] p-[15px]">
              <Image
                className=" relative  items-center "
                src={"/Assets/Icons/logo.svg"}
                alt=""
              />
            </div>
            <h1 className="">Rezilla</h1>
          </div>
          <div className="mt-[20px] mx-[120px]">
            <h2 className="w-[200px]">
              2728 Hickory StreetSalt Lake City, UT 84104
            </h2>
            <div className="flex flex-col">
              <div className="inline-flex mt-[30px]">
                <Image src={"/Assets/Icons/phone.svg"} alt="" />
                <h2>+1 206-214-2298</h2>
              </div>
              <div className="inline-flex mt-[20px]">
                <Image src={"/Assets/Icons/mail.svg"} alt="" />
                <h2>support@rezilla.com</h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-[50px] inline-flex mt-6 space-x-[100px]">
          <div>
            <h1 className="font-bold text-black mb-4">Quick Links</h1>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Listings</h2>
            <h2>Services</h2>
            <h2>Blog</h2>
            <h2>Become an Agent</h2>
          </div>
          <div>
            <h1 className="font-bold text-black mb-4">Discovery</h1>
            <h2>Canada</h2>
            <h2>United States</h2>
            <h2>Germany</h2>
            <h2>Africa</h2>
            <h2>India</h2>
          </div>
          <div>
            <h1 className="font-bold text-black ">
              Subscribe to our Newsletter!
            </h1>
            <div className="bg-white mt-4 p-2 rounded-[30px] shadow-md">
              <div className="absolute -mt-[8px]  ml-[155px] shadow-2xl rounded-full bg-[#3A0CA3] p-[13px]">
                <Image src={"/Assets/Icons/arrowlast.svg"} alt="" />
              </div>
              <h4 className="text-[#AAAAAA] pl-2">Email...</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
