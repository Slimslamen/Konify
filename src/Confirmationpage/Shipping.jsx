
function Shipping({ index, picture, isSelected, onClick, place, time, price }) {



  return (
    /* Saves the div you click onClick, each div has it's own index */
    <div  onClick={() => onClick(index)} className="w-4/5 md:w-3/5 md:h-36 p-10 pb-20 md:p-10 border rounded-lg mx-5 my-3 relative shadow-md hover:shadow-xl ease-in duration-200">
      <div
        className="w-5 h-5 rounded-full border border-black absolute top-4 left-4 flex justify-center items-center"
      >
        {isSelected && <div className="w-3 h-3 bg-black rounded-full"></div>}
      </div>
      <h3 className="font-semibold text-sm md:text-lg">{place}</h3>
      <p className="text-slate-400 text-sm md:text-md">{`${price} ${time}`}</p>
      <img
        src={`${picture}`}
        alt="Postnord"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full md:top-10 md:right-5 top-5 right-2  absolute"
      />
    </div>
  );
}

export default Shipping