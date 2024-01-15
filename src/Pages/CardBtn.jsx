import { Icon } from '@iconify/react';

function CardBtn() {


    
    return(
        <div className='flex justify-between my-2 mx-5'>
            <p className='hover:font-semibold'>Add to cart</p>
            <Icon icon="mdi:heart-outline" className="w-8 h-8 text-gray-900 hover:font" />
        </div>
    )
}

export default CardBtn