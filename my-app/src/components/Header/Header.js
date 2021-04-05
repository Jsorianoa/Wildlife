import React, {useState} from "react";
import NavBar from "./NavBar";
import Hamburger from "./hamburger.js";
import Title from './Title';

function Header() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <header className="header">
            
            <NavBar open={open}/>
            <Title open={open}/>
            <Hamburger open={open} handleClick={handleClick}/>

        </header>
    )
}


export default Header;