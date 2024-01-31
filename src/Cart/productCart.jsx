import { ProductContext } from "../Components/ProductContext";
import { useEffect, useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// ProductCart tar emot varukorgen som en prop.

const ProductCart = ({ cart }) => {
// Skapa state-variabler för produktantal och totalpris.
  const [productCounts, setProductCounts] = useState(cart.map(() => 1));
  const [totalPrice, setTotalPrice] = useState(0);

// Hämta nödvändig data och funktioner från ProductContext med useContext-hook.

  const { productSizes, setCart, setCartCount, cartCount } = useContext(ProductContext);

// Funktion för att öka produktens kvantitet.
  const quantityAdd = (idx) => {
// Uppdatera antalet produkter i varukorgen när användaren ökar kvantiteten för en specifik produkt.
    setProductCounts((prevCounts) => {
// Skapa en ny array ('updatedCounts') genom att mappa över det aktuella antalet produkter ('prevCounts').
      const updatedCounts = prevCounts.map((count, i) => {
// Kontrollera om indexet ('i') matchar det önskade indexet för den specifika produkten ('idx').
        if (i === idx) 
// Om det är fallet, öka produktantalet med 1.
        return count + 1;
// Om inte, behåll det befintliga produktantalet oförändrat.
        return count;
      });


      updateTotalPrice(updatedCounts);
// Returnera den uppdaterade arrayen ('updatedCounts').
      return updatedCounts;
    });
  };

// Funktionen quantityRemove används för att minska antalet produkter för en specifik produkt i varukorgen.
  const quantityRemove = (idx) => {
// Uppdatera antalet produkter i varukorgen med setProductCounts.    
    setProductCounts((prevCounts) => {
// Skapa en ny array ('updatedCounts') genom att mappa över det aktuella antalet produkter ('prevCounts').      
      const updatedCounts = prevCounts.map((count, i) => {
// Kontrollera om indexet ('i') matchar det önskade indexet för den specifika produkten ('idx').
// Kontrollera även att produktantalet ('count') är större än 0 för att undvika negativa kvantiteter.        
        if (i === idx && count > 0) 
// Om villkoren är uppfyllda, minska produktantalet med 1.
        return count - 1;
// Om inte, behåll det befintliga produktantalet oförändrat.
        return count;
      });
// Uppdatera det totala priset baserat på de uppdaterade produktantal.
      updateTotalPrice(updatedCounts);
// Returnera den uppdaterade arrayen ('updatedCounts'). 
      return updatedCounts;
    });
  };
  
// Funktionen updateTotalPrice används för att uppdatera det totala priset baserat på uppdaterade produktantal.
  const updateTotalPrice = (updatedCounts) => {
// Beräkna det nya totala priset med reduce-funktionen.    
    const newTotalPrice = updatedCounts.reduce((acc, productCounts, idx) => {
// Hämta information om produkten från varukorgen.      
      const product = cart[idx];
// Summera priset genom att multiplicera produktantalet med produkt priset.      
      return acc + productCounts * product.price;
    }, 0);
// Uppdatera det totala priset med setTotalPrice.
    setTotalPrice(newTotalPrice);
  };

// Funktionen removeItem används för att ta bort en produkt från varukorgen.
  const removeItem = (idx) => {
// Skapa en kopia av den befintliga varukorgen med uppdateradeCart.
    const updatedCart = [...cart];
// Ta bort den specifika produkten från kopian av varukorgen baserat på index ('idx').    
    updatedCart.splice(idx,1);
// Uppdatera antalet produkter i varukorgen med setProductCounts.    
    setProductCounts((prevCounts) => {
// Skapa en ny array ('updatedCounts') genom att kopiera det aktuella antalet produkter ('prevCounts').      
      const updatedCounts = [...prevCounts]
// Ta bort det specifika produktantalet från kopian av antalet produkter baserat på index ('idx').
     updatedCounts.splice(idx, 1);
// Uppdatera det totala priset baserat på de uppdaterade produktantal.     
      updateTotalPrice(updatedCounts);
      return updatedCounts;
    });
// Uppdatera varukorgen med den uppdaterade kopian.    
    setCart(updatedCart);
// Minska antalet produkter i varukorgen med setCartCount.    
    setCartCount(cartCount - 1);
  };

// useEffect-hooket används för att köra en effekt varje gång productCounts ändras.
  useEffect(() => {
// Anropa funktionen updateTotalPrice med det aktuella värdet av productCounts.    
    updateTotalPrice(productCounts);
  }, [productCounts]);
  return (
    <div className="cart">
      <div>
        <h1 className="text-5xl text-wrap text-center m-5">
          Shopping cart
        </h1>
      </div>
      <div className=" md:w-100 grid grid-cols-4  md:grid-cols-6 justify-between md:mt-8 md:mb-0 md:m-20">
        <div className=" text-left ml-2">
          <p>Items</p>
        </div>
        <div className="text-center">
          <p>Price per item</p>
        </div>
        <div className=" text-center">
          <p>Quantity</p>
        </div>
        <div className="mr-2 text-right">
          <p>Remove Item</p>
        </div>
        <div className="flex-grow text-center"></div>
      </div>

      <div className="md:w-100 border-t border-gray-300 md:mt-8 md:mb-0 md:m-20"></div>
      <div className="md:w-100 border border-gray-300 rounded md:p-4 md:mt-4 md:m-20 relative min-h-[20em]">
      {cart.map((product, idx) => (
  // Varje produkt representeras av en div med ett (id)
  <div key={product.id} className="items-start grid grid-cols-4 md:grid-cols-6 gap-4 justify-between mb-4">
    {/* Visa produktbild och titel */}
    <div className="flex items-center">
      <img
        src={`/${product.image}`}
        alt={product.title}
        className="max-w-full h-[100px] w-[100px] shadow-xl mb-5 rounded-sm"
      />
      <div className="flex flex-col ml-2">
        {/* Visa produkttitel och storlek */}
        <p className="w-40">{product.title}</p>
        <p className="mt-2">Size {productSizes[product.id]}</p>
      </div>
    </div>
{/* Visa priset eller rabattpriset om det finns en försäljningspris */}
    <div className="flex items-center justify-center">
      {product.sale ? (
// Om det finns ett försäljningspris, visa det med en röd text.
        <p className="text-red-500">{product.sale}</p>
      ) : (
        <p>{product.price}</p>
      )}
    </div>

    <div className="flex items-center justify-center">
      <button
// onClick event för att minska antalet av en specifik produkt när användaren trycker på knappen
        className="bg-gray-100 cursor-pointer m-2.5 w-[40px] font-bold border-none rounded-lg"
        onClick={() => quantityRemove(idx)}
       
      >
        -
      </button>      
      <input
// Input fält som visar antalet produkter, som användaren kan ändra själv emd hjälp av plus och minus knapparna       
        type="text"
        value={productCounts[idx]}
        className="bg-gray-100 font-bold text-center w-[40px]"
      />
      <button
// onClick event för att öka antalet av en specifik produkt när användaren trycker på knappen
        className="bg-gray-100 cursor-pointer m-2.5 w-[40px] font-bold border-none rounded-lg"
        onClick={() => quantityAdd(idx)}
        
      >
        +
      </button>
    </div>

    <div className="flex items-center justify-end">
    <button 
// onClick event som tar bort produkten o användaren trycker på soptunnan som är ikonen.    
    onClick={() => removeItem()}>
        <Icon icon="icomoon-free:bin" className="md:w-8 h-8 md:mr-8" />
      </button>
    </div>
  </div>
))}
        <div className="flex flex-col justify-around it rounded-l-md bg-purple-300 w-60 h-72 md:top-[-18px] md:right-0 md:absolute text-black mx-auto mb-10 relative z-0">
          <img src="Assets/checkoutpic.png" alt="pile of clothes" className="w-[5em] absolute bottom-52 left-2 md:top-[-6.5em] md:left-[-3em] block md:hidden z-50"/>
          <div className="w-28 h-28 bg-purple-200 absolute rounded-full top-[-20px] left-[-10px] z-10"></div>
          <div className="w-32 h-32 bg-purple-200 absolute rounded-full bottom-0 right-[-20px] z-10"></div>
          <h2 className="mx-3 font-bold text-center z-20">SUMMARY</h2>
          <div className="px-5 flex justify-between z-20">
            <p>Subtotal </p>
            <p>€{totalPrice}</p>
          </div>
          <div className="px-5 flex justify-between">
            <p>Taxes </p>
            <p>-</p>
          </div>
          <div className="px-5 flex justify-between mb-5 z-20">
            <p>Happy </p>
            <p>Always.</p>
          </div>
          <Link to="/Checkout">
            <button className="z-20 bg-purple-300 shadow-lg py-2 w-40 rounded md:ml-20 bg-gradient-to-r hover:from-purple-300 hover:to-purple-400 text-black absolute right-[2.5em] bottom-[-10px] md:right-10 md:bottom-[-10px]">
              Go to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
