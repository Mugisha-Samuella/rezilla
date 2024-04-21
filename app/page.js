import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="bg-white-100 py-2 px-2 shadow-lg  space-x-5">
          <h1 className="text-3xl">Rezilla</h1>
        </div>
      </div>
      {/* Hero */}
      <Image className="absolute" src={"/Assets/Images/circle.png"} alt="" />
      <div className="relative">
        <h1 className="text-5xl mb-5 text-center my-[90px] font-extrabold">
          Find a perfect home you love!
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt.
        </p>
        <p className="text-center">
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="">
          <a
            href="#"
            className="bg-blue-500 w-[120px] py-2 mx-[600px] absolute text-white px-3 rounded-[20px] inline-block shadow-md hover:bg-blue-600 mt-5"
          >
            Get started
          </a>
        </div>
      </div>
      {/* Trust */}
      <div className="mt-[170px] ">
        <Image
          className="absolute my-[-100px] mx-[250px]"
          src={"/Assets/Images/ellipse.png"}
          alt="allipse"
        />
        <h1 className="text-center text-md text-slate-400 mb-5 ">
          Trusted by 100+ Companies accross the globe
        </h1>
        <div className="lg:inline-flex space-x-[80px] mx-[200px]">
          <Image className="" src={"/Assets/Images/google.png"} alt="Netflix" />
          <Image className="" src={"/Assets/Images/amazon.png"} alt="Netflix" />
          <Image
            className=""
            src={"/Assets/Images/logitech.png"}
            alt="Netflix"
          />
          <Image
            className=""
            src={"/Assets/Images/spotify.png"}
            alt="Netflix"
          />
          <Image
            className=""
            src={"/Assets/Images/samsung.png"}
            alt="Netflix"
          />
          <Image
            className=""
            src={"/Assets/Images/netflix.png"}
            alt="Netflix"
          />
        </div>
      </div>
      {/* who are we */}
      <div className="inline-flex">
        <div className="w-[500px] mx-[100px] my-[150px]">
          <h1 className="uppercase text-blue-600 font-md text-[19.4px]">
            Who are we
          </h1>
          <h2 className=" font-semibold font-poppins text-[39.8px]">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p className="mb-5">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>
          <div className="mb-5 inline-flex space-x-5 shadow-lg shadow-slate-200 rounded-[30px] p-4">
            <Image
              className=""
              src={"/Assets/Icons/smarthome.svg"}
              alt="smarthome"
            />
            <div>
              <h1 className="text-[#4361EE]">Donec porttitor euismod</h1>
              <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
          </div>
          <div className="inline-flex space-x-5 shadow-lg shadow-slate-200 rounded-[30px] p-4">
            <Image
              className=""
              src={"/Assets/Icons/user.svg"}
              alt="smarthome"
            />
            <div>
              <h1 className="text-[#4361EE]">Donec porttitor euismod</h1>
              <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
          </div>
        </div>
        <div className="inline-flex my-[150px]">
          {/* <Image src={house1}/> */}
          <div className="absolute">
            <Image
              className="absolute mx-[200px] my-[200px]"
              src={"/Assets/Images/group.png"}
              alt=""
            />
            <Image src={"/Assets/Images/house2.png"} alt="" />
            <Image className="absolute ml-6 mt-[160px]" src={ellipse} alt="" />
            <Image
              className="mx-[100px]"
              src={"/Assets/Images/house3.png"}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Latest Listed Properties     */}
      <div className="inline-flex">
        <div className="w-[500px] mx-[100px] mt-[1px]">
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
        <div className="space-x-5 mt-[50px]">
          <a
            href="/"
            className="bg-white text-purple-900 hover:bg-purple-900 hover:border-collapse hover:text-white border-purple-900 border-2 shadow-md rounded-[50px] pr-4 pl-4 p-2"
          >
            Buy
          </a>
          <a
            href="/"
            className="bg-purple-900 text-white p-2 rounded-[50px] pr-4 pl-4 hover:bg-purple-950 shadow-md"
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

      {/* Image Container */}
      <div className="mt-[40px] inline-flex mx-[100px] space-x-6 mb-[100px]">
        <div>
          <div className="absolute bg-[#FFE1E1] inline-flex mt-[215px] ml-[20px] p-1 rounded-[20px] space-x-2 px-3">
            <Image src={"/Assets/Icons/fire.svg"} alt="" />
            <h1 className="text-[#FF1111]">Popular</h1>
          </div>
          <Image className="" src={"/Assets/Images/housea.png"} alt="Netflix" />
          <div>
            <h1 className="font-semibold text-[27.6px] text-[#2B2B2B] mb-[10px] mt-[40px]">
              $ 5,970
            </h1>
            <h2 className=" font-medium text-[16px] mb-[10px]">
              Tranquil Haven in the Woods
            </h2>
            <p className="font- text-[16px] text-[#808080] mb-[10px]">
              103 Wright CourtBurien, WA 98168
            </p>
            <div className="inline-flex space-x-[20px] mb-[20px]">
              <div className="inline-flex space-x-1">
                <Image src={"/Assets/Icons/bed.svg"} alt="" />
                <p>4 Beds</p>
              </div>
              <div className="inline-flex space-x-1">
                <Image src={"/Assets/Icons/bathroom.svg"} alt="" />
                <p>4 Bath</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute bg-[#D7EEFF] inline-flex mt-[215px] ml-[20px] p-1 rounded-[20px] space-x-2 px-3">
            <Image src={"/Assets/Icons/home.svg"} alt="" />
            <h1 className="text-[#119BFF]">New Listing</h1>
          </div>
          <Image className="" src={"/Assets/Images/houseb.png"} alt="Netflix" />
          <div>
            <h1 className="font-semibold text-[27.6px] text-[#2B2B2B] mb-[10px] mt-[40px]">
              $ 1,970
            </h1>
            <h2 className=" font-medium text-[16px] mb-[10px]">
              Serene Retreat by the Lake
            </h2>
            <p className="font- text-[16px] text-[#808080] mb-[10px]">
              1964 Jehovah Drive, VA 22408
            </p>
            <div className="inline-flex space-x-[20px] mb-[20px]">
              <div className="inline-flex space-x-1">
                <Image src={"/Assets/Icons/bed.svg"} alt="" />
                <p>3 Beds</p>
              </div>
              <div className="inline-flex space-x-1">
                <Image src={"/Assets/Icons/bathroom.svg"} alt="" />
                <p>2 Bath</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute bg-[#F1FFF1] inline-flex mt-[215px] ml-[20px] p-1 rounded-[20px] space-x-2 px-3">
            <Image src={"/Assets/Icons/dollar.svg"} alt="" />
            <h1 className="text-[#00CE3A]">Discounted Price</h1>
          </div>
          <Image className="" src={"/Assets/Images/housec.png"} alt="Netflix" />
          <div>
            <h1 className="font-semibold text-[27.6px] text-[#2B2B2B] mb-[10px] mt-[40px]">
              $ 3,450
            </h1>
            <h2 className=" font-medium text-[16px] mb-[10px]">
              Cottage in the Meadows
            </h2>
            <p className="font- text-[16px] text-[#808080] mb-[10px]">
              1508 Centennial Farm, 51537
            </p>
            <div className="inline-flex space-x-[20px] mb-[20px]">
              <div className="inline-flex space-x-1">
                <Image src={"/Assets/Icons/bed.svg"} alt="" />
                <p>4 Beds</p>
              </div>
              <div className="inline-flex space-x-1">
                <Image src={"/Assets/Icons/bathroom.svg"} alt="" />
                <p>4 Bath</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" w-[70px] absolute bg-[#FFE1E1] inline-flex mt-[215px] ml-[20px] p-1 rounded-[20px] space-x-0 px-3">
            <Image src={"/Assets/Icons/fire.svg"} alt="" />
            <h1 className="text-[#FF1111] text-wrap">Pop</h1>
          </div>
          <Image className="" src={"/Assets/Images/housed.png"} alt="Netflix" />
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-[#d4d4d42c] ">
        <h2 className="text-center font-medium text-[19.4px] pt-[60px]">
          Our Services
        </h2>
        <h1 className="text-center font-medium text-[39.8px]">
          Donec porttitor euismod dignissim
        </h1>
        <div className="inline-flex space-x-5 mx-[80px] mt-6 mb-[80px]">
          <div className="bg-white w-[340px] h-[330px] shadow-lg rounded-[30px] relative">
            <div className="absolute mt-[60px] mx-[120px] shadow-2xl rounded-full bg-[#4361EE] p-[15px]">
              <Image
                className=" relative  items-center "
                alt=""
                src={"/Assets/Icons/search.svg"}
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
      {/* I don't know what to do with this space*/}
      <div className="mb-6">
        <Image
          className=" mx-[600px] mt-[50px]"
          src={"/Assets/Images/ellipsee.svg"}
          alt=""
        />
        <div className="w-[500px] mx-[100px] my-[100px]">
          <div>
            <h1 className="uppercase text-blue-600 font-md text-[19.4px]">
              Areas accross the town
            </h1>
            <h2 className=" font-semibold font-poppins text-[39.8px]">
              Neighborhood Properties
            </h2>
          </div>
        </div>
        <div className="mx-[100px] -mt-[60px]">
          <div className="inline-flex">
            <Image src={"/Assets/Images/property1.png"} alt="" />
            <Image src={"/Assets/Images/property2.png"} alt="" />
            <Image src={"/Assets/Images/property3.png"} alt="" />
          </div>
          <div className="inline-flex">
            <Image src={"/Assets/Images/property4.png"} alt="" />
            <Image src={"/Assets/Images/property5.png"} alt="" />
          </div>
        </div>
      </div>
      {/* Team of experts */}
      <div>
        <Image
          className="absolute -my-[30px] mx-[1000px]"
          alt=""
          src={ellipse}
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
          <div className="inline-flex mx-[170px] mt-[60px] space-x-[80px] text-center">
            <div>
              <Image src={"/Assets/Images/person4.png"} alt="" />
              <h2 className=" font-semibold font-poppins text-[19.8px]">
                Brendon M
              </h2>
              <h1 className=" text-blue-600 font-md text-[14.4px]">
                CEO & Founder
              </h1>
            </div>
            <div>
              <Image src={"/Assets/Images/person3.png"} alt="" />
              <h2 className=" font-semibold font-poppins text-[19.8px]">
                Jodi J. Appleby
              </h2>
              <h1 className=" text-blue-600 font-md text-[14.4px]">
                Real Estate Developer
              </h1>
            </div>
            <div>
              <Image src={"/Assets/Images/person2.png"} alt="" />
              <h2 className=" font-semibold font-poppins text-[19.8px]">
                Justin S. Meza
              </h2>
              <h1 className=" text-blue-600 font-md text-[14.4px]">
                Listing Agent
              </h1>
            </div>
            <div>
              <Image src={"/Assets/Images/person1.png"} alt="" />
              <h2 className=" font-semibold font-poppins text-[19.8px]">
                Susan T. Smith
              </h2>
              <h1 className=" text-blue-600 font-md text-[14.4px]">
                Buyer's Agent
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blogs and Posts */}
      <div className="bg-[#3A0CA3] mt-[150px] pb-[40px]">
        <h2 className="uppercase text-white text-center font-medium text-[19.4px] pt-[60px]">
          what's trending
        </h2>
        <h1 className="text-center text-white font-medium text-[39.8px]">
          Latest Blogs & Posts
        </h1>
        <div className="inline-flex mx-6 mt-5">
          <div className="inline-block">
            <Image src={"/Assets/Images/blog1.png"} alt="" />
            <div className="w-[250px] -mt-1 ml-5">
              <h1 className="text-white text-[24px] font-medium">
                Top 10 Home Buying Mistakes to Avoid
              </h1>
              <h2 className="text-[#FFFFFF] mt-2 font-light">
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
              </h2>
            </div>
            <div className="ml-[300px] mt-3">
              <Image
                className="hover:shadow-[#3A0CA3] shadow-lg rounded-full"
                src={"/Assets/Icons/arrow.svg"}
                alt=""
              />
            </div>
          </div>
          <div className="inline-block">
            <Image src={"/Assets/Images/blog2.png"} alt="" />
            <div className="w-[250px] -mt-1 ml-5">
              <h1 className="text-white text-[24px] font-medium">
                How to Stage Your Home for a Sale
              </h1>
              <h2 className="text-[#FFFFFF] mt-2 font-thin">
                Nullam odio lacus, dictum quis pretium congue, vehicula
                venenatis nunc.
              </h2>
            </div>
            <div className="ml-[300px] mt-3">
              <Image src={arrow} alt="" />
            </div>
          </div>
          <div className="inline-block">
            <Image src={"/Assets/Images/blog3.png"} alt="" />
            <div className="w-[250px] -mt-1 ml-5">
              <h1 className="text-white text-[24px]">
                5 Tips for First-Time Home Sellers
              </h1>
              <h2 className="text-[#FFFFFF] mt-2 font-extralight">
                In hac habitasse platea dictumst. Phasellus vel velit vel augue
                maximus.
              </h2>
            </div>
            <div className="ml-[300px] mt-3">
              <Image src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="inline-flex">
        <div className="w-[500px] mx-[100px] my-[150px]">
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
          <div className="inline-flex space-x-6">
            <Image
              className="hover:shadow-blue-500  shadow-sm rounded-full"
              src={"/Assets/Icons/arrowl.svg"}
              alt=""
            />
            <Image
              className="hover:shadow-blue-500  shadow-sm rounded-full"
              src={"/Assets/Icons/arrowr.svg"}
              alt=""
            />
          </div>
        </div>
        <div className="relative my-[150px]">
          <Image
            className="ml-[20px]"
            src={"/Assets/Images/ellipse3.svg"}
            alt=""
          />
          <div className="bg-white absolute h-[300px] w-[450px] -mt-[35px] shadow-lg rounded-[30px] mx-[50px] my-[150px]">
            <div className="p-6">
              <Image src={"/Assets/Icons/quotes.svg"} alt="" />
              <p className="mt-3">
                I highly recommend Jodi J. Appleby. She was attentive to our
                needs and worked tirelessly to find us the perfect home. We
                couldn't be happier with our new place!
              </p>
            </div>
            <Image
              className="ml-4 -mt-5"
              src={"/Assets/Icons/line.svg"}
              alt=""
            />
            <div className="inline-flex space-x-[70px] mt-3">
              <div className="inline-flex space-x-3 ml-6">
                <Image src={"/Assets/Images/barbara.png"} alt="" />
                <h2 className="mt-3 font-semibold">Barbara D. Smith</h2>
              </div>
              <Image src={"/Assets/Icons/stars.svg"} />
            </div>
          </div>
        </div>
      </div>

      {/* Become an Agent */}
      <div className="bg-[#3A0CA3] mx-[80px] w-[1100px] h-[255px] rounded-[40px] inline-flex">
        <Image
          className="absolute mx-[970px] -mt-6"
          src={"/Assets/Images/ellipse16.svg"}
          alt=""
        />
        <Image
          className="absolute mx-[320px] mt-[100px]"
          src={"/Assets/Images/ellipse17.svg"}
          alt=""
        />
        <div>
          <Image
            className="absolute -mt-6 ml-5"
            src={"/Assets/Images/agent.png"}
            alt=""
          />
          <div className="text-white mx-1 w-[500px] ml-[400px] mt-[70px]">
            <h1 className="text-[30px] font-semibold word">Become an Agent.</h1>
            <h2 className="w-[380px]">
              Fusce venenatis tellus a felis scelerisque. venenatis tellus a
              felis scelerisque.{" "}
            </h2>
          </div>
        </div>
        <div className="bg-white pl-4 hover:bg-[#b2a1d92b] shadow-lg pr-4 mt-[90px] h-[50px] rounded-[30px] pt-2 pb-2 -ml-[100px]">
          <a className="text-[#3A0CA3]">Register Now</a>
        </div>
      </div>

      {/* Footer */}
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

      {/* Last footer */}
      {/*       
      <div className="bg-black">
        <h1 className="text-white">All rights reserved @2024</h1>
      </div> */}
    </>
  );
}
