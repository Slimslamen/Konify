// SelectSize.js
import { useState } from "react";
import Size from "./Size";

function SelectSize() {
  const [selectedSize, setSelectedSize] = useState([]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    console.log(selectedSize);
  };

  return (
    <div className="flex flex-row">
      <p>Select size</p>
      <Size
        size="XS"
        onClick={handleSizeClick}
        isSelected={selectedSize === "XS"}
      />
      <Size
        size="S"
        onClick={handleSizeClick}
        isSelected={selectedSize === "S"}
      />
      <Size
        size="M"
        onClick={handleSizeClick}
        isSelected={selectedSize === "M"}
      />
      <Size
        size="L"
        onClick={handleSizeClick}
        isSelected={selectedSize === "L"}
      />
      <Size
        size="XL"
        onClick={handleSizeClick}
        isSelected={selectedSize === "XL"}
      />
    </div>
  );
}

export default SelectSize;
