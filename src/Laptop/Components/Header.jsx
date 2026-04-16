import React from 'react'

const Header = () => {
    return (

        <div className="headerSection">
            <div className="Left">
                <div className="title">Laptop <br /> Service</div>
            </div>
            <div className='center'>
                <ul>
                    <li>Home</li>
                    <li>Brands</li>
                    <li>Laptop Services</li>
                    <li>Book Now Here</li>
                </ul>
            </div>

            <div className="Search">
                <div className="searchBox">
                     <span className="searchIcon" onClick={()=>console.log("searching")}>🔍</span>
                    <input type="text" placeholder='searching.....' />
                </div>

            </div>
            <div className="Right">
                <div className="sign">
                    Signup /signin
                </div>
                <div>
                    <ol>
                        <li>About us</li>
                        <li>Location</li>
                        <li>Contact us</li>
                    </ol>
                </div>

            </div>
        </div>

    )
}

export default Header