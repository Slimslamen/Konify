import { Icon as FacebookIcon } from '@iconify/react';
import { Icon as InstagramIcon } from '@iconify/react';
import { Icon as PinterestIcon } from '@iconify/react';



function Footer () {
    return (
        <footer className="bg-purple-200 dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl flex justify-center items-center  ">
      <div className=" md:bg-white md:mt-4 md:mb-4 md:rounded-2xl grid grid-cols-1 gap-8 px-4 pt-8 md:grid-cols-5 flex-col md:flex-row">
      <div className="">
            <ul className="text-4xl items-center justify-center gap-8 flex md:flex-col  md:gap-2">
                <li className="mb-8">
                    <a href="#" className=" hover:underline"><FacebookIcon icon="ic:baseline-facebook" />
</a>
                </li>
                <li className="mb-8">
                    <a href="#" className="hover:underline"><InstagramIcon icon="bi:instagram" />
</a>
                </li>
                <li className="mb-8">
                    <a href="#" className="hover:underline"><PinterestIcon icon="mdi:pinterest" />
</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-4xl text-center md:text-left md:text-sm font-semibold text-gray-900 uppercase dark:text-white">Konify</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium hidden md:block">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Sustainability</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Campaigns</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-4xl text-center md:text-left md:text-sm font-semibold text-gray-900 uppercase dark:text-white">Customer Service</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium hidden md:block">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Shipping</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Returns</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-4xl text-center md:text-left md:text-sm font-semibold text-gray-900 uppercase dark:text-white">Terms & Conditions</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium hidden md:block">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms of use</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Cookies</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-4xl text-center md:text-left md:text-sm font-semibold text-gray-900 uppercase dark:text-white">Clothes</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-large md:font-medium hidden md:block">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Size Guide</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Garment Care</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Product Warranty</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
    </footer>
    );
}
export default Footer;