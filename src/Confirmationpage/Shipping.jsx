function Shipping({ index, picture, isSelected, onClick }) {
  return (
    <div className="w-3/5 h-36 p-10 border rounded-lg m-5 relative">
      <button
        onClick={() => onClick(index)}
        className="w-5 h-5 rounded-full border border-black absolute top-4 left-4 flex justify-center items-center"
      >
        {isSelected && <div className="w-3 h-3 bg-black rounded-full"></div>}
      </button>
      <h3 className="font-semibold">Utlämningsställe - Postnord</h3>
      <p className="text-slate-400">39 SEK 1-3 arbetsdagars leverans</p>
      <img
        src={`${picture}`}
        alt="Postnord"
        className="w-12 h-12 rounded-full top-10 right-5 absolute"
      />
    </div>
  );
}

export default Shipping