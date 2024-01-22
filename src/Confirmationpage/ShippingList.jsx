import { useState } from "react";
import Shipping from "./Shipping";

function ShippingList() {
  const [selected, setselected] = useState(null);

  const handleCircle = (index) => {
    setselected(index);
  };

  return (
    <div className="flex justify-center items-center flex-col p-5">
      <h1 className="text-5xl ">Delivery</h1>

      {[1, 2, 3].map((index) => (
        <Shipping
          key={index}
          index={index}
          picture={index === 3 ? 'Assets/Instabox.png' : 'Assets/Postnord.jpeg'}
          place={index === 1 ? "Utlämningsställe - Postnord":null || index === 2 ? "Hemleverans - Postnord":null || index === 3 ? "Paketskåp - Instabox":null}
          time={index === 1 ? "39 SEK 1-3 arbetsdagars leverans":null || index === 2 ? "59 SEK 1-3 arbetsdagars leverans":null || index === 3 ? "39 SEK 1-3 arbetsdagars leverans":null}
          isSelected={selected === index}
          onClick={handleCircle}
        />
      ))}
    </div>
  );
}

export default ShippingList;