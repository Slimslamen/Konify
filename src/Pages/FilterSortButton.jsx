import { useState } from 'react';

function FilterSortButton( {name, op1, op2, op3}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHover = () => {
    setIsDropdownOpen(true);
  };

  const handleLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownHoverButton"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="text-black bg-transparent uppercase hover:bg-purple-300 hover:bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {name}{' '}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownHover"
        className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
          isDropdownOpen ? 'block' : 'hidden'
        } top-[100%]`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              {op1}
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {op2}
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {op3}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterSortButton;
