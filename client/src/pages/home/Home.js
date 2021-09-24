import "./homeStyle.css"
import React from "react";

function Home() {

    return(
        <>
        <div className="homeTop">
            <div className="row">
                <div className="col-12">
                    <div className="logoContainer">
                        <div className="iPotLogo">
                            iPot
                        </div>
                    </div>
                
                    <div className="formContainer">
                        <form className="form">
                            <input type="text" placeholder="Enter Your Address" >
                            </input>
                            <input type="submit" className="submitButton">
                            </input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row whiteBackground">
                <div className="col-4">
                    <div className="checklist">
                        <h2 className="checklistNumber">1</h2>
                        <h3>Enter Your Address</h3>
                        <p>Submit your address in the form above to get started</p>
                    </div>                        
                </div>
                <div className="col-4">
                    <div className="checklist">
                        <h2 className="checklistNumber">2</h2>
                        <h3>Validate Your ID</h3>
                        <p>Confirm you're your old enough to shop by verifying your ID.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="checklist">
                        <h2 className="checklistNumber">3</h2>
                        <h3>Pick Your Pot</h3>
                        <p>Choose a product and we'll deliver it to you shortly.</p>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Home;