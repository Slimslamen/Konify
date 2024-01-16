import AddtocartButton from '../Productpage/AddtocartButton';
import Favorites from '../Productpage/Favorites';


function CardBtn() {


    
    return(
        <div className='flex justify-between my-2 mx-5'>
            <AddtocartButton />
            <Favorites />
        </div>
    )
}

export default CardBtn