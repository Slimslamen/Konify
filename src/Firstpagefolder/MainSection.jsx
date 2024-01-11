import React from "react"
import Scroll from "../Scroll"
import { Routes, Route, Link } from "react-router-dom"
import Tshirts from "../Tshirts/Tshirts"

function MainSection (){

    return(
        <>
        <div>
            <main className="flex justify-center items-center w-full mx-auto flex-col relative md:w-9/12">
                {/* Hero image */}
                <section className="md:h-8/12 ">
                    <img 
                    src="src/images/heroimg.png" 
                    alt="Girl with orange shirt touching her hair" 
                    />
                </section>
                {/* Images for sale and news */}
                <section className="flex flex-col md:flex-row md:h-[500px] md:w-full">
                    <img 
                    src="src/images/Sales.jpg" 
                    alt="Girl with orange sweater and 2 oranges infront of her eyes"
                    className="md:w-1/2 bg-cover h-1/2 md:h-full" />
                    <img 
                    src="src/images/News.jpg" 
                    alt="Guy with a dark T-shirt laying down on a carpet"
                    className="md:w-1/2 h-1/2 md:h-full" />
                {/* Buttons for sales and news */}
                        <div className="buttonsMain flex flex-col md:flex-row absolute top-[57%] md:top-[80%] left-1/2 translate-x-[-50%] ">
                            <button className="text-4xl font-Playfair z-10 top-50 mb-5 md:mb-0 hover:text-purple-900">
                                <p className="bg-purple-300  w-48 h-16 flex justify-center items-center bg-opacity-45 hover:bg-opacity-50">
                                    SALES
                                </p>
                            </button>
                            <button className="text-4xl font-Playfair z-10 top-50 mb-5 md:mb-0 hover:text-purple-900 ">  
                                <p className="bg-purple-300  w-48 h-16 flex justify-center items-center bg-opacity-45 hover:bg-opacity-50">
                                    NEWS
                                </p>
                            </button>
                        </div>
                </section>    
            </main>
                 <Scroll />
        </div>
        </>
    )
}

export default MainSection