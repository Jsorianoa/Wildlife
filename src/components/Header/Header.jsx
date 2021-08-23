import React, {useState} from "react";
import NavBar from "./NavBar";
import Hamburger from "./hamburger";

const Header = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <header className="header">          
            <NavBar open={open}/>
            <Hamburger open={open} handleClick={handleClick}/>

        </header>
    )
}


export default Header;