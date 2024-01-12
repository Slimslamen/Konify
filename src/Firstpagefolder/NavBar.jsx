import { Icon } from '@iconify/react';
import '../style.css';
import SidebarMenu from './SidebarMenu';
import { useState } from 'react';
import Searchbar from './searchbar';

function NavBar() {
  const [isMenuVisible, setMenuVisible] = useState(false)
  function toggleMenu() {
      return setMenuVisible(!isMenuVisible);
  }
  const [isVisible, setVisible] = useState(false)
  function toggleSearchBar() {
      return setVisible(!isVisible);
  }
  return (
    <>
    <nav className="bg-purple-300 w-full p-2 sticky top-0 z-10">
      <div className="grid grid-cols-3 flex-row md:grid-cols-5 justify-items-center items-center">
        {/*Categories - left */}
        
        <a className="text-white text-sm md:text-lg md:mr-0 mr-auto justify-self-start cursor-pointer" 
          onClick={toggleMenu}>
        Categories
        
        </a> 

      
        
        <div className="relative hidden md:inline">
          <div className="border-r border-gray-500 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="inset-shadow w-full px-4 py-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search product.. ."
            required
          />
        </div>

        {/* Konify with Fashion - center */}
        <div className=" flex flex-col items-center text-center justify-self-center">
          <h1 className="font-libre mb-0 font-bold xs:text-3xl sm:text-4xl">Konify .</h1>
          <h4 className="font-libre mt-0 text-xs tracking-widest">Fashion</h4>
        </div>

        {/* Icons  right */}
        <div className=" md:col-span-2 flex items-center space-x-5 md:inline-flex justify-self-end">
          <a href="#" className="hidden sm:inline-block">Login</a>
          <Icon icon="mdi:heart-outline" className=" md:w-8 h-8 text-gray-900" />
          <Icon icon="material-symbols:mail-outline" className=" md:w-8 h-8 text-gray-900" />
          <Icon icon="mdi:cart-outline" className=" md:w-8 h-8 text-gray-900" />
        </div>
      </div>
    </nav>
    {isMenuVisible &&(
        <div className="bg-purple-300 w-[180px] h-96 md:w-65 md:h-96 space-y-3 fixed z-10 rounded-br-lg">
          <Searchbar />
          <SidebarMenu />
        </div>
  )}
  </>
  );
}

export default NavBar;

