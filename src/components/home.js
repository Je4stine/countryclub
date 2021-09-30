import React from 'react';
import './home.css';
function Home() {
    return (
        <>
        <div>
            <div className="navbar">
                <img className= "navitems" src= {'/home/Downloads/68-685744_cebu-country-club-logo-hd-png-download.png'} alt='logo'/>
                <ul className="navitems">
                    <li>
                        Home 
                    </li>
                    <li>
                        Contact us 
                    </li>
                    <li>
                        About us
                    </li>
                </ul>
            </div>     
        </div>
        </>
    )
};

export default Home;
