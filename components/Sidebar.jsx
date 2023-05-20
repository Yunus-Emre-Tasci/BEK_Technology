import { GiHamburgerMenu } from "react-icons/gi";
import ImageSlider from "./ImageSlider";

const Sidebar = ({ toggleMenu }) => {
  return (
    <div className=" w-[20%] h-screen ">
      <div className="h-[33%]">
        <div className="flex items-center justify-between p-2 mx-1 border border-gray-400 rounded-sm shadow-md">
          <h4>Menü</h4>
          <span className="cursor-pointer" onClick={toggleMenu}>
            {" "}
            <GiHamburgerMenu />{" "}
          </span>
        </div>
        {isOpen ? (
          <div className="flex flex-col px-1 pt-1 text-xs gap-y-1 sm:text-xs md:text-xs lg:text-sm">
            <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">
              Formlar
            </button>
            <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">
              Faydalı Linkler
            </button>
            <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">
              Araçlar
            </button>
            <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">
              E-Fatura
            </button>
            <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">
              Sizi Dinliyoruz
            </button>
            <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">
              BEK Akademi
            </button>
          </div>
        ) : (
          <div className="mt-10 font-extrabold text-center text-blue-400 sm:text-base md:text-xl lg:text-4xl">
            <h2>BEK TEKNOLOJİ</h2>
          </div>
        )}
      </div>
      <div className="mx-2  h-[200px] mt-2">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Sidebar;
