import Scroll from "../Scroll";
import { Link } from "react-router-dom";
import ImageTitle from "../Components/ImageTitle";


function FirstPage (){

    return(     
        <>
            <main className="flex justify-center items-center w-full mx-auto flex-col relative md:w-9/12">
                {/* Hero image */}
                <section className="md:h-8/12 ">
                    <img 
                    src="Assets/heroimg.jpg" 
                    alt="Girl with orange shirt touching her hair" 
                    />
                </section>
                {/* Images for sale and news */}
                <section className="flex flex-col md:flex-row md:h-[500px] md:w-full">
                    <img 
                    src="Assets/Sales.jpg" 
                    alt="Girl with orange sweater and 2 oranges infront of her eyes"
                    className="md:w-1/2 bg-cover h-1/2 md:h-full" />
                    <img 
                    src="Assets/News.jpg" 
                    alt="Guy with a dark T-shirt laying down on a carpet"
                    className="md:w-1/2 h-1/2 md:h-full" />
                {/* Buttons for sales and news */}
                        <div className="buttonsMain flex flex-col md:flex-row absolute top-[57%] md:top-[80%] left-1/2 translate-x-[-50%] ">
            <Link to="/Sales"> <ImageTitle title="SALE" /></Link>
            <Link to="/News"> <ImageTitle title="NEWS" /></Link>

                        </div>
                </section>    
            </main>
            <Scroll />
        </>
    )
}

export default FirstPage;
