import { useContext } from "react";
import { ProductContext } from "./ProductContext";


function Searchbar({ searchChange }) {
   const{ searchfield } = useContext(ProductContext)
  return (
    <div className="p-2">
      <div className="border-r border-gray-500 absolute inset-y-50 left-1 flex items-center pl-2 pointer-events-none mt-3 ml-1">
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
        className="text-end inset-shadow w-full px-2 py-2 pl-6 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Search product..."
        required
        onChange={searchChange}
      />
      <div>
      
      </div>
    </div>
  );
}

export default Searchbar;
