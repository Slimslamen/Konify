import AddtocartButton from '../../Components/AddtocartButton';
import Favorites from '../../Components/Favorites';


function CardBtn() {


    
    return(
        <div className='flex justify-between mt-2 w-[225px]'>
          <p className='hover:font-semibold cursor-pointer'>View product</p>
            <Favorites />
        </div>
    )
}

export default CardBtn