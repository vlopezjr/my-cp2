import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBuilding, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () =>  {
        console.log("HandleClick: Click", !click);
        setClick(!click);
    }
    const closeMobileMenu = () => {
        console.log("CloseMobileMenu: Click", false);
        setClick(false);
    }

    // this function shows the FaBars button whenever the screen is small
    const showButton = () => {        

        if(window.innerWidth <= 960)
        {            
            setButton(false);
        }
        else {
            
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color: '#000'}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <FaBuilding className="navbar-icon" />
                            CASEPARTS
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/quotes" className="nav-links" onClick={closeMobileMenu}>Quotes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders" className="nav-links" onClick={closeMobileMenu}>Orders</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
