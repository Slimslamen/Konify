import CardBtn from "./CardBtn.jsx";

//an individual T-shirt item
const Product = ({ id, imageUrl, title }) => {
    console.log("Product:", { id, imageUrl, title });
  
  return (
  <div className="tshirt-item p-4 w-1/1 md:w-1/2 lg:w-1/4">
    <div className="min-h-[250px]">
    <img
    
      key={id}
      src={imageUrl}
      alt={title}
      className="max-w-full mb-2 h-[300px] w-[225px]"
    />
     {/* Putting the CardBtn component below the image */}
     </div>
     <CardBtn/>
    
  </div>
  )
};

export default Product;


