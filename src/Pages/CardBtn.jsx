import AddtocartButton from '../Productpage/AddtocartButton';
import Favorites from '../Productpage/Favorites';


function CardBtn() {


    
    return(
        <div className='flex justify-between my-2 w-[225px]'>
            <AddtocartButton />
            <Favorites />
        </div>
    )
}

export default CardBtn