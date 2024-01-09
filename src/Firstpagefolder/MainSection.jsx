import React from "react"
import { Icon } from '@iconify/react';

function MainSection (){

    return(
        <main className="flex justify-center items-center">
            <section>
                <img src="src/images/heroimg.png" alt="Girl with orange shirt touching her hair" />
            </section>
                <button>SALES</button>
                <button>NEWS</button>
            <section>
                <img src="src/images/Sales.jpg" alt="Girl with orange sweater and 2 oranges infront of her eyes" />
                <img src="src/images/News.jpg" alt="Guy with a dark T-shirt laying down on a carpet" />
            </section>
            <Icon icon="mingcute:up-fill" />
        </main>
    )
}

export default MainSection