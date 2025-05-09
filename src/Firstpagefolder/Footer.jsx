import { Icon as FacebookIcon } from "@iconify/react";
import { Icon as InstagramIcon } from "@iconify/react";
import { Icon as PinterestIcon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  // state för dropdown på konify länken i footern 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// funktion för att växla öppen eller stängd status för dropdown menyn på konify
  const handleToggleDropdown = () => {
    // ändra state beroende på föregående värde
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div >
    <footer className="bg-purple-200 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl flex justify-center items-center  ">
        <div className=" md:bg-white md:mt-4 md:mb-4 md:rounded-2xl grid grid-cols-1 gap-8 px-4 pt-8 md:grid-cols-5 flex-col md:flex-row">
          <div className="">
            <ul className="text-4xl items-center justify-center gap-8 flex md:flex-col  md:gap-2">
              <li className="mb-8">
                <a href="#" className=" hover:underline">
                  <FacebookIcon icon="ic:baseline-facebook" />
                </a>
              </li>
              <li className="mb-8">
                <a href="#" className="hover:underline">
                  <InstagramIcon icon="bi:instagram" />
                </a>
              </li>
              <li className="mb-8">
                <a href="#" className="hover:underline">
                  <PinterestIcon icon="mdi:pinterest" />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:hidden">
          <button
          // vid ett klick på konify kommer dropdown menyn att visas
                onClick={handleToggleDropdown}
                className="text-2xl md:text-left md:text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                Konify{' '}
                <svg
                  className={`w-2.5 h-2.5 ms-3 transition-transform transform ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <Link to="/Aboutus" className="relative hover:underline">
                    <li className="mb-4">About us</li>
                  </Link>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Sustainability
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Campaigns
                    </a>
                  </li>
                </ul>
              )}
              </div>
              <div>
              <a href="#">
          <h2 className="hidden md:block mb-6 text-2xl text-center md:text-left md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Konify
              </h2>
              </a>
            <ul className="text-gray-500 dark:text-gray-400 font-medium hidden md:block">
            <Link to="/Aboutus" className="relative hover:underline">
              <li className="mb-4">
              
                  About us
              </li>
              </Link>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Sustainability
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Campaigns
                </a>
              </li>
            </ul>
            </div>
          <div>
            <a href="#">
              {" "}
              <h2 className="mb-6 text-2xl text-center md:text-left md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Customer Service
              </h2>
            </a>
            <ul className="text-gray-500 dark:text-gray-400 font-medium hidden md:block">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#">
              {" "}
              <h2 className="mb-6 text-2xl text-center md:text-left md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Terms & Conditions
              </h2>
            </a>
            <ul className="text-gray-500 dark:text-gray-400 font-medium hidden md:block">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms of use
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#">
              {" "}
              <h2 className="mb-6 text-2xl text-center md:text-left md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Clothes
              </h2>
            </a>
            <ul className="text-gray-500 dark:text-gray-400 font-large md:font-medium hidden md:block">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Size Guide
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Garment Care
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Product Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
export default Footer;
