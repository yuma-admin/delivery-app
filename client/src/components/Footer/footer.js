import React from 'react';
import "../Footer/footer.css";

function Footer() {
    return (
        <>
        <div className="footerSection">
            <div className='row'>
                <div className='col-12'>
                    <div className='copyrightContainer'>
                        <span className='YumaBrand'>
                        ©2022 Yuma Way All Rights Reserved
                        </span>
                    </div>
                    <div className='footerLinks'>
                        <a href="/about" className='footerNavLink'>About Us</a>
                        <a href='/privacy-policy' className='footerNavLink'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}

export default Footer;