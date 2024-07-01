import { useState } from "react";

import { RiMenu3Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { RiAddFill } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar.jsx";

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
        <button onClick={toggleMenu} className="text-whit p-2">
          {showMenu ? <IoIosClose /> : <RiMenu3Line />}
        </button>
      </nav>
    </div>
  );
}

export default App;
