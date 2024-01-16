import Data from "../Socials/links";

const Social = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center mb-10">
        <div className="text-3xl font-semibold my-10">Find Us On</div>
        <div className="flex justify-center">
          {Data.map((item, index) => (
            <div className="w-14 h-14 mx-3 transfrom transition-transform hover:scale-125 duration-500 cursor-pointer" key={index}>
              <a href={item.link} target="_blank">
              <img src={item.img} alt={item.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Social;
