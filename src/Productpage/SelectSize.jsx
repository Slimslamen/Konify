// SelectSize.js
import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";
import Size from "./Size";

function SelectSize() {
  const {selectedSize, setSelectedSize, setProductSizes, currentId} = useContext(ProductContext)

  const handleSizeClick = (size) => {
    setSelectedSize(size);

    setProductSizes(prevSizes => ({
      ...prevSizes,
      [currentId]: size,
    }));
  };

  return (
    <div className="flex flex-row mx-2">
      <Size
        size="XS"
        onClick={() => handleSizeClick("XS")}
        isSelected={selectedSize === "XS"}
      />
      <Size
        size="S"
        onClick={() => handleSizeClick("S")}
        isSelected={selectedSize === "S"}
      />
      <Size
        size="M"
        onClick={() => handleSizeClick("M")}
        isSelected={selectedSize === "M"}
      />
      <Size
        size="L"
        onClick={() => handleSizeClick("L")}
        isSelected={selectedSize === "L"}
      />
      <Size
        size="XL"
        onClick={() => handleSizeClick("XL")}
        isSelected={selectedSize === "XL"}
      />
    </div>
  );
}

export default SelectSize;
