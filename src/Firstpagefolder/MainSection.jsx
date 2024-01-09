import React from "react"
import { Icon } from '@iconify/react';

function MainSection (){

    return(

            <div>
                    <main className="flex justify-center items-center w-9/12 mx-auto flex-col relative">
                        <section className="md:h-3/4 ">
                            <img 
                            src="src/images/heroimg.png" 
                            alt="Girl with orange shirt touching her hair" 
                            />
                        </section>
                        <section className="flex flex-col md:flex-row md:h-[526px]  md:w-full">
                            <img 
                            src="src/images/Sales.jpg" 
                            alt="Girl with orange sweater and 2 oranges infront of her eyes"
                            className="md:w-1/2 bg-cover h-96 " />
                            <img 
                            src="src/images/News.jpg" 
                            alt="Guy with a dark T-shirt laying down on a carpet"
                            className="md:w-1/2 h-96" />
                                <div className="buttonsMain flex flex-col md:flex-row absolute top-[52%] md:top-[70%] left-1/2 translate-x-[-50%]">
                                    <button className="text-4xl font-Playfair z-10 top-50 mb-5 md:mb-0">
                                        <div className="bg-purple-300 bg-opacity-47 w-48 h-16 flex justify-center items-center opacity-45">
                                        SALES
                                        </div>
                                    </button>
                                    <button className="text-4xl font-Playfair ">  
                                        <div className="bg-purple-300 bg-opacity-47 w-48 h-16 flex justify-center items-center opacity-45">
                                        NEWS
                                        </div>
                                    </button>
                                </div>
                        </section>    
                    </main>

                        <div className="fixed bottom-10 right-1 md:right-10 z-50 ">
                            <button className="p-2 rounded-full bg-purple-300 bg-opacity-40">
                                <Icon icon="mingcute:up-fill" className="text-1xl lg:text-4xl "/>
                            </button>
                        </div>
                </div>
    )
}

export default MainSection