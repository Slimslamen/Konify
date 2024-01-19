import { useParams } from "react-router-dom";
import { useContext } from "react";

const Productdetails = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);

  const selectedProduct = products.find(
    (product) => product.id === parseInt(productId)
  );

  console.log(selectedProduct.image);

  return (
    <div>
      <img
        key={selectedProduct.id}
        src={`/${selectedProduct.image}`}
        alt={selectedProduct.title}
        className="max-w-full mb-2 h-[300px] w-[225px] shadow-xl"
      />
      <h2>{selectedProduct.title}</h2>
      <p>{selectedProduct.description}</p>
      <p>
        Price: €{selectedProduct.price}{" "}
        <span className="text-red-500">{selectedProduct.sale}</span>
      </p>
    
    </div>
  );
};

export default Productdetails;
