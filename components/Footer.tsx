import SignupFormDemo from "./signup-form-demo";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-[100vw] bg-black-100 text-white">
      {/* Main Section */}
      <div className="flex flex-wrap w-full h-screen md:h-[80vh] px-6 md:px-16">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 h-full flex flex-col items-center justify-center">
          

          <div className="relative z-10 text-center">
            <h1 className="heading max-w-[80%] md:max-w-[45vw]">
              Creating <span className="text-purple">intuitive, engaging designs</span> that connect with your audience.
            </h1>
            <p className="text-white-200 mt-5 md:mt-10">
              Reach out to me today and let&apos;s discuss how I can help you connect with your users.
            </p>
            
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <SignupFormDemo />
        </div>
      </div>

      {/* Footer Text */}
      <div className="w-full py-6 flex justify-center border-t border-gray-700">
        <p className="text-sm md:text-base font-light">
          Designed and Developed by Rohit Kakkar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
