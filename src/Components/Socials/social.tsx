import Data from "../Socials/links";
import './social.css';

const Social = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center mb-10">
        <div className="text-3xl font-semibold my-10">Find Us On</div>
        <div className="flex justify-center">
          {Data.map((item, index) => (
            <div className="w-11 h-14 mx-2 transfrom transition-transform hover:scale-125 duration-500 cursor-pointer" key={index}>
              <a href={item.link} target="_blank">
              {/* <img src={item.img} alt={item.alt} className="socials-icons" /> */}
              <div className="text-4xl">{item.img}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Social;
