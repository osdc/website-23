import osdc_logo from "/assets/osdc logo.png";

const Navbar = () => {
  return (
    <>
      <section className="flex justify-between fixed top-0 h-fit z-1 w-full shadow-lg bg-transparent backdrop-blur-md shadow-indigo-200/20 z-10">
        <div>
          <img src={osdc_logo} alt="osdc logo" className="px-4 w-24 cursor-pointer transition-transform transform hover:scale-105" />
        </div>

        <div className="text-white flex items-center list-none text-xl cursor-pointer">
          <li className="transition-transform transform hover:scale-110">About Us</li>
          <li className="mx-6 transition-transform transform hover:scale-110">Contact Us</li>
        </div>
      </section>
    </>
  );
};

export default Navbar;
