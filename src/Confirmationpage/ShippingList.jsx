import { useState } from "react";
import Shipping from "./Shipping";

function ShippingList() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleCircle = (index) => {
    setSelectedButton(index);
  };

  return (
    <div className="flex justify-center items-center flex-col p-5">
      <h1 className="text-2xl font-bold">Delivery</h1>

      {[1, 2, 3].map((index) => (
        <Shipping
          key={index}
          index={index}
          picture={index === 3 ? 'Assets/Instabox.png' : 'Assets/Postnord.jpeg'}
          isSelected={selectedButton === index}
          onClick={handleCircle}
        />
      ))}
    </div>
  );
}

export default ShippingList;