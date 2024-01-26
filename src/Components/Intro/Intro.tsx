import osdc from "/assets/osdc.png";
import { FaArrowDown } from "react-icons/fa";
import "./intro.css";

const Intro = () => {
  return (
    <>
      <div
        className="intro flex justify-center flex-col items-center"
        id="home"
      >
        <div className="flex justify-center glowing-image">
          <img src={osdc} alt="" className="osdc-image relative z-0" />
          {/* <div className='text-white text-center text-2xl'>Open Source Developers Community</div> */}
        </div>
        {/* <div className="text-2xl text-white mt-48">
        <div
          className="rounded-full h-60 w-60 blur-3xl absolute"
          style={{
            backgroundImage:
              "linear-gradient(#6366f1 0%, rgb(59 90 229) 100%)",
          }}
        ></div>
        <div>Join Our Discord Server</div>
        <div className="flex justify-center mt-4">
          <button className="bg-button text-white py-2 px-4 rounded-xl transition-transform transform hover:scale-110 duration-300">
            JODC SERVER
          </button>
        </div>
      </div> */}
      </div>
      <a href="#about" className="downarrow"><FaArrowDown /></a>
    </>
  );
};

export default Intro;
