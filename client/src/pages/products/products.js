import { use } from 'express/lib/application';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import '../products/products.css'
import './storeJson';


// WILL USE THIS FUNCTION ONCE DELIVERY IS EXPANDED TO INCLUDE MORE STORES

// function Products(props){
//     const { lat , long} = useParams()
//     useEffect(() => {
//         const script = document.createElement("script");

//         script.src = `https://api.iheartjane.com/v1/area_products?distance=10&latitude=${lat}&longitude=${long}&count=100&pagination_id=0/embed.js`;
//         script.async = true;

//         document.body.appendChild(script);
//     });
    
// }

// return (
//     <>
//         <div className=''>

//         </div>
//     </>
// )

// export default Products


// FOR CURRENT TESTING PURPOSES TO MAKE API CALL TO LOWELL GARDENS MENU ONLY

function Products(props) {
    // const {id} = useParams()
    // useEffect(() => {
        const script = document.createElement("script");

        script.src = `https://api.iheartjane.com/v1/stores/3456/embed.js`;
        script.async = true;

        document.body.appendChild(script);
    // });

    let history = useHistory();

    function backClick() {
        history.push("/");
    }

    return (
        <>
            <div className='container-fluid'>

                <div class="test" id="jane-frame-script"></div>
            </div>
        </>
    )
}

export default Products;