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
  // const [isVisible, setVisible] = useState(false)
  // function toggleSearchBar() {
  //     return setVisible(!isVisible);
  // }
  return (
    <>
    <nav className="bg-purple-300 w-full p-2 sticky top-0 z-10">
      <div className="grid grid-cols-3 flex-row md:grid-cols-4 justify-items-center items-center">
        {/*Categories - left */}
        
        <a className="text-white text-sm md:text-lg md:mr-0 mr-auto justify-self-start cursor-pointer hover:font-semibold" 
          onClick={toggleMenu}>
        Categories
        </a> 

        {/* Konify with Fashion - center */}
        <div className=" flex flex-col items-center text-center justify-self-end">
          <h1 className="font-libre mb-0 font-bold xs:text-3xl sm:text-4xl">Konify .</h1>
          <h4 className="font-libre mt-0 text-xs tracking-widest">Fashion</h4>
        </div>

        {/* Icons  right */}
        <div className="md:col-span-2 flex items-center space-x-2 md:space-x-5 md:inline-flex justify-self-end">
          <a href="#" className="hidden sm:inline-block">Login</a>
          <Icon icon="material-symbols:home-outline" className='md:w-8 h-8' />
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

