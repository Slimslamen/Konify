import CardBtn from "./CardBtn.jsx";
import Favorites from "../Productpage/Favorites.jsx";

//an individual T-shirt item
const Product = ({ id, imageUrl, title, sale, price }) => {
    console.log("Product:", { id, imageUrl, title });
  
  return (
  <div className="tshirt-item p-4 w-1/1 md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center">
    <div className="min-h-[250px]">
    <img
    
      key={id}
      src={imageUrl}
      alt={title}
      className="max-w-full mb-2 h-[300px] w-[225px]"
    />
     {/* Putting the CardBtn component below the image */}
     <div className="flex mt-2 w-[225px] justify-between items-center">
          <p className="hover:font-semibold cursor-pointer">View</p>
          <div className="flex items-center">
         <p className="text-sm text-red-500 mr-2">{sale}</p>
            <span className="text-sm mr-2">€{price}</span>
            
            <Favorites className="ml-4" />
           
          </div>
        
        </div>
        
  
     </div>
     
    
  </div>
  )
};

export default Product;


