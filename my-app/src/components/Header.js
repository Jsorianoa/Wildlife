import React, {useState} from "react";
import NavBar from "./NavBar";
import Hamburger from "./hamburger.js";

function Header() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <header class="header inicio">
            
            <NavBar open={open}/>
            <div class="content-header" >
                <h1>
                    Wildlife Management México
                </h1>
            </div>
            <Hamburger open={open} handleClick={handleClick}/>
        </header>
    )
}


export default Header;