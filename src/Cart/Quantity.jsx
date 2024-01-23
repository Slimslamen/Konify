const Quantity = () => {
  return (
    <div className="flex items-center">
      <button onClick={onDecrease} className="bg-gray-300 px-2 py-1 rounded">
        -
      </button>
      <span className="mx-2">{quantity}</span>
      <button onClick={onIncrease} className="bg-gray-300 px-2 py-1 rounded">
        +
      </button>
    </div>
  );
};

export default Quantity;


