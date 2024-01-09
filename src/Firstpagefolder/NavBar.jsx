import { Icon } from '@iconify/react';
import '../style.css';

function NavBar() {
  return (
    <nav className="bg-purple-300 w-full p-4">
      <div className="flex justify-between items-center">
      <div className='flex items-center'>
        <a className='text-white text-lg' href="#">Categories</a>

          <div className="relative">
            <div className="border-r border-gray-500 absolute inset-y-0 left-0 flex items-center justify-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" className=" inset-shadow block w-full px-4 py-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product..." required />
          </div>
          </div>
          <div className="max-w-screen-xl flex flex-col items-center justify-center text-center">
            <h1 className="font-libre mb-0 font-bold text-4xl mx-auto">Konify .</h1>
            <h4 className="font-libre mt-0 text-xs tracking-widest">Fashion</h4>
          </div>
       

        <div className="flex items-center space-x-10">
          <a href="#">Login</a>
          <Icon icon="mdi:heart-outline" className="w-8 h-8 text-gray-900" />
          <Icon icon="material-symbols:mail-outline" className="w-8 h-8 text-gray-900" />
          <Icon icon="mdi:cart-outline" className="w-8 h-8 text-gray-900" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
