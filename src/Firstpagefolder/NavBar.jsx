import { Icon } from "@iconify/react";
import SidebarMenu from "../Components/SidebarMenu";
import { useState, useContext, useEffect } from "react";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";
import { ProductContext } from "../Components/ProductContext";
import "./Navbar.css";


function NavBar() {
  const { cartCount = 0, products, onSearchChange, searchfield, setSearchfield, favorites } = useContext(ProductContext);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const filtereditems = products.filter((item) => {
    return item.title.toLowerCase().includes(searchfield.toLowerCase());
  });

  function toggleMenu() {
    setSearchfield("")
    return setMenuVisible(!isMenuVisible);
  }
  const [pulsate, setPulsate] = useState(false);

  useEffect(() => {
    // Pulse when favorites change
    if (favorites.length > 0) {
      setPulsate(true);

      // Reset pulsate after 1 second so it can pulse again
      setTimeout(() => {
        setPulsate(false);
      }, 1000);
    }
  }, [favorites]);
  

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
          <div className=" flex flex-col items-center text-center justify-self-center">
            <h1 className="font-libre mb-0 font-bold xs:text-3xl sm:text-4xl">
              Konify .
            </h1>
            <h4 className="font-libre mt-0 text-xs tracking-widest">Fashion</h4>
          </div>

          {/* Icons  right */}
          <div className="md:col-span-1 flex items-center space-x-2 md:space-x-5 md:inline-flex justify-self-end cursor-pointer">
            <a href="#" className="hidden sm:inline-block">
              Login
            </a>
            <Link to="/">
              <Icon
                icon="material-symbols:home-outline"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </Link>
            <Link to="/FavoritesPage">
        <Icon
          icon="mdi:heart-outline"
          className={`w-6 h-6 md:w-8 md:h-8 text-gray-900 ${pulsate && "pulsate"}`}
        />
      </Link>
            <Link to="/Contact">
            <Icon
              icon="material-symbols:mail-outline"
              className="w-6 h-6 md:w-8 md:h-8 text-gray-900"
            />
            </Link>
            {/* <Link to="/cart"><Icon icon="mdi:cart-outline" className="md:w-6 h-6 md:w-8 md:h-8 text-gray-900" /></Link> */}
            <Link to="/cart" className="relative">
              <Icon
                icon="mdi:cart-outline"
                className="w-6 h-6 md:w-8 md:h-8 text-gray-900"
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
     
     {/* if searchbar is empty show first case that is dependable of a state, otherwise show the search div that is also dependable of the state */}
      {searchfield.length == 0 ? (

         isMenuVisible && (
          <div
            className="bg-purple-300 w-[180px] h-96 md:w-72 md:h-96 space-y-3 fixed z-10 rounded-br-lg"
            onMouseLeave={toggleMenu}
          >
            <Searchbar searchChange={onSearchChange}  />
            <SidebarMenu />
          </div>
        )
        ) : (
      isMenuVisible &&  (<div className="bg-purple-300 w-[180px] h-96 md:w-72 md:h-[25em] space-y-3 fixed z-20 rounded-br-lg overflow-auto"
          onMouseLeave={toggleMenu}
          >
            <Searchbar searchChange={onSearchChange} />
            {filtereditems.map((product) => {
              return (
                <Link key={product.id} to={`/Productdetails/${product.id}`}>
                  <div className="flex flex-row items-center ml-3">
                    <img
                     src={product.image ? `/${product.image}` : product.imageUrl}
                      alt={product.title}
                      className="max-w-full h-[100px] w-[100px] shadow-xl mb-5 rounded-sm"
                    />
                    <h1 className="w-20 p-3 font-semibold">{product.title}</h1>
                  </div>
                </Link>
              );
            })}
          </div>)
      )}
    </>
  );
}

export default NavBar;
