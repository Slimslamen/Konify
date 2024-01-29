import { useState } from "react";
import Shipping from "./Shipping";


function ShippingList() {

  const [selected, setSelected] = useState(null);

  const handleCircle = (index) => {
    setSelected(index);
  };

  return (
    <div className="flex justify-center items-center flex-col p-5">
      <h1 className="text-5xl mb-2">Delivery</h1>
    {/* Mapping over each index, and each index has it's own text */}
      {[1, 2, 3].map((index) => (
        <Shipping
          key={index}
          index={index}
          picture={index === 3 ? 'Assets/Instabox.png' : 'Assets/Postnord.jpeg'}
          place={index === 1 ? "Utlämningsställe - Postnord":null || index === 2 ? "Hemleverans - Postnord":null || index === 3 ? "Paketskåp - Instabox":null}
          time={"1-3 arbetsdagars leverans"}
          price={index === 1 || index === 3 ? "39 SEK": "59 SEK"}
          isSelected={selected === index}
          onClick={handleCircle}
        />
      ))}
    </div>
  );
}

export default ShippingList;