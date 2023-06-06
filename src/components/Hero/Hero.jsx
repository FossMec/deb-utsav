import image from'../../assets/Conference-amico.svg'
const Hero = () => {
  return (
    <>
      <div className=" text-black mt-10 sm:mt-10 lg:mt-10  py-16 md:mt-10 xl:mt-4 md:py-10  ">
        <div className="grid max-w-screen-xl min-h-[100vh]  px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-semibold  text-black md:text-6xl xl:text-7xl  ">
              Welcome to <br /> <span className="text-red">DebUtsav</span> 2023
            </h1>
            <p className="text-xl font-semibold mb-2">June 17th 2023</p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              DebUtsav is an upcoming conference that is set to bring together
              members of the Debian community to celebrate Free and Open Source
              Software (FOSS).
            </p>
            <div className="flex gap-2">
              <a href="/Register">
                <button className="inline-flex register bg-red text-white  text-red-500 items-center justify-center px-10 py-3 mr-3 text-xl font-medium text-center   bg-primary-700 hover:bg-primary-800 ">
                  Register
                </button>
              </a>
              <a href="/Schedule">
                <button className="inline-flex register bg-transparent outline-maroon outline text-maroon  items-center justify-center px-10 py-3 mr-3 text-xl font-medium text-center   ">
                  About
                </button>
              </a>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image} alt="mockup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
