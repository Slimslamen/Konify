import { Icon } from "@iconify/react";
import SidebarMenu from "../Components/SidebarMenu";
import { useState, useContext } from "react";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";
import { ProductContext } from "../Components/ProductContext";

function NavBar() {
  const { cartCount = 0 } = useContext(ProductContext);
  const [isMenuVisible, setMenuVisible] = useState(false);
  function toggleMenu() {
    return setMenuVisible(!isMenuVisible);
  }
  return (
    <>
      <nav className="bg-purple-300 w-full p-2 sticky top-0 z-10">
        <div className="grid grid-cols-3 flex-row md:grid-cols-3 justify-items-center items-center">
          {/*Categories - left */}

          <a
            className="text-black text-sm md:text-lg md:mr-0 mr-auto justify-self-start cursor-pointer hover:font-semibold"
            onMouseEnter={toggleMenu}
          >
            Categories
          </a>

          {/* Konify with Fashion - center */}
          <Link to="/">
            <div className=" flex flex-col items-center text-center justify-self-center">
              <h1 className="font-libre mb-0 font-bold xs:text-3xl sm:text-4xl">
                Konify .
              </h1>
              <h4 className="font-libre mt-0 text-xs tracking-widest">
                Fashion
              </h4>
            </div>
          </Link>
          {/* Icons  right */}
          <div className="md:col-span-1 flex items-center space-x-2 md:space-x-5 md:inline-flex justify-self-end cursor-pointer">
            <a href="#" className="hidden sm:inline-block">
              Login
            </a>
            <Link to="/">
              {/*   <Icon
                icon="material-symbols:home-outline"
                className="md:w-8 h-8"
              /> */}
            </Link>
            <Icon
              icon="mdi:heart-outline"
              className=" md:w-8 h-8 text-gray-900"
            />
            <Icon
              icon="material-symbols:mail-outline"
              className=" md:w-8 h-8 text-gray-900"
            />
            {/* <Link to="/cart"><Icon icon="mdi:cart-outline" className="md:w-8 h-8 text-gray-900" /></Link> */}
            <Link to="/cart" className="relative">
              <Icon
                icon="mdi:cart-outline"
                className="md:w-8 h-8 text-gray-900"
              />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-2 bg-red-500 text-white rounded-full px-2">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
      {isMenuVisible && (
        <div
          className="bg-purple-300 w-[180px] h-96 md:w-65 md:h-96 space-y-3 fixed z-10 rounded-br-lg"
          onMouseLeave={toggleMenu}
        >
          <Searchbar />
          <SidebarMenu />
        </div>
      )}
    </>
  );
}

export default NavBar;

