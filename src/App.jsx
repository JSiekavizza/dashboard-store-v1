import { useState } from "react";

import { RiMenu3Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { RiAddFill } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar.jsx";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/**Menu Movil */}
      <nav
        className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center 
      justify-around rounded-tl-xl rounded-tr-xl"
      >
        <button className="text-whit p-2">
          <FiUser />
        </button>
        <button className="text-whit p-2">
          <RiAddFill />
        </button>
        <button className="text-whit p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <IoIosClose /> : <RiMenu3Line />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          {/*Header */}
          <header>
            {/* Title and Search*/}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Rester</h1>
                <p className="text-gray-500">04/07/2024</p>
              </div>
              <form>
                <div className="w-full relative">
                  <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1F1D28] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Buscar"
                  ></input>
                </div>
              </form>
            </div>
            {/*tabs*/}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start lg:gap-8 border-b mb-6">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 
                before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
              >
                Hot Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Could Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2">
                Grill
              </a>
            </nav>
          </header>
          {/* Title content */}
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <FaAngleDown /> Dine in
            </button>
          </div>
          {/*Content*/}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/*Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-lg flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="food1.png"
                className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowuls available</p>
            </div>
            {/*Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-lg flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="food1.png"
                className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowuls available</p>
            </div>
            {/*Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-lg flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="food1.png"
                className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowuls available</p>
            </div>
            {/*Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-lg flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="food1.png"
                className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowuls available</p>
            </div>
            {/*Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-lg flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="food1.png"
                className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowuls available</p>
            </div>
            {/*Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-lg flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="food1.png"
                className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowuls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  );
}

export default App;
