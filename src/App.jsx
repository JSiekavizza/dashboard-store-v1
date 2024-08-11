import { useState } from "react";

import { RiMenu3Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { RiAddFill } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar.jsx";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/**Menu Movil */}
      <nav
        className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center 
      justify-around rounded-tl-xl rounded-tr-xl"
      >
        <button className="p-2">
          <FiUser />
        </button>
        <button className="p-2">
          <RiAddFill />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <IoIosClose /> : <RiMenu3Line />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20">
        <div className="lg:col-span-6 md:p-8 p-4">
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
        <div
          className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:rigth-0 h-full transition-all 
            ${showOrder ? "right-0" : "-right-full"}
            `}
        >
          {/**Orders */}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
            <IoIosClose
              onClick={toggleOrders}
              className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#1F1D2B] rounded-full text-xl"
            />
            <h1 className="text-2xl mt-4 my-4">Order #511416</h1>
            {/*Phills*/}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                Dine In
              </button>
              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                To Go
              </button>
              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                Delivery
              </button>
            </div>
            {/**Car*/}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col col-span-4 ">Item</h5>
                <h5>Qtic</h5>
                <h5>Price</h5>
              </div>
            </div>
            {/**Products */}
            <div className="h-[400px] md:h-[700px] lg:h[540px] p-2 overflow-y-auto">
              {/**Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/**Product Description */}
                  <div className="col-span-4 flex items-center gap-2">
                    <img
                      src="food1.png"
                      className="w-12 h-12 object-cover"
                    ></img>
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/**Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/**Price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/**Note */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5">
                    <input
                      type="text"
                      className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none"
                      placeholder="order note..."
                    ></input>
                  </form>
                  <div>
                    <button className=" border border-red-500 p-2 rounded-lg ">
                      <LuTrash2 className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/**Product Description */}
                  <div className="col-span-4 flex items-center gap-2">
                    <img
                      src="food1.png"
                      className="w-12 h-12 object-cover"
                    ></img>
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/**Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/**Price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/**Note */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5">
                    <input
                      type="text"
                      className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none"
                      placeholder="order note..."
                    ></input>
                  </form>
                  <div>
                    <button className=" border border-red-500 p-2 rounded-lg ">
                      <LuTrash2 className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/**Product Description */}
                  <div className="col-span-4 flex items-center gap-2">
                    <img
                      src="food1.png"
                      className="w-12 h-12 object-cover"
                    ></img>
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/**Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/**Price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/**Note */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5">
                    <input
                      type="text"
                      className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none"
                      placeholder="order note..."
                    ></input>
                  </form>
                  <div>
                    <button className=" border border-red-500 p-2 rounded-lg ">
                      <LuTrash2 className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/**Product Description */}
                  <div className="col-span-4 flex items-center gap-2">
                    <img
                      src="food1.png"
                      className="w-12 h-12 object-cover"
                    ></img>
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/**Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/**Price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/**Note */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5">
                    <input
                      type="text"
                      className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none"
                      placeholder="order note..."
                    ></input>
                  </form>
                  <div>
                    <button className=" border border-red-500 p-2 rounded-lg ">
                      <LuTrash2 className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/**Submit payment */}
            <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Discount</span>
                <span>0$</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Subtotal</span>
                <span>$201.03</span>
              </div>
              <div>
                <bottom className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                  Continue to payment
                </bottom>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
