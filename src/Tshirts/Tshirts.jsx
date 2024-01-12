import CardBtn from "./CardBtn.jsx";

//an individual T-shirt item
const Tshirts = ({ id, imageUrl, title }) => (
  <div className="tshirt-item p-4 w-1/4">
    <img
    
      key={id}
      src={imageUrl}
      alt={title}
      className="max-w-full mb-2"
    />
     {/* Putting the CardBtn component below the image */}
    <CardBtn/>
  </div>
);

export default Tshirts;

