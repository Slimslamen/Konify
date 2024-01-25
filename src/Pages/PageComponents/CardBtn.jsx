import FavoritesButton from "../../Components/FavoritesButton"


function CardBtn() {


    
    return(
        <div className='flex justify-between mt-2 w-[225px]'>
          <p className='hover:font-semibold cursor-pointer'>View product</p>
            <FavoritesButton addToFavorites={addToFavorites}
            product={Product} />
        </div>
    )
}

export default CardBtn