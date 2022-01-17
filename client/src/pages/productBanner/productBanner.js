import React from "react";
import "../productBanner/productBanner.css";
import Products from "../products/products";
import Footer from "../../components/Footer/footer";

function productBanner () {
    return (
        <>
            <div className="menuContainer">
                <div className="menuBanner">
                <div className="menuMantra">
                    <h1>CannaDash</h1>
                    <h2>High Quality Products Delivered To Your Door.</h2>
                </div>
                </div>
            </div>
            <Products />
            <Footer />
        </>
    )
}

export default productBanner;