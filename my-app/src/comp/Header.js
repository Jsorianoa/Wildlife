import React from "react";
import Wildlife from "../img/Wildlife.png";

function Header() {
    return (
        <header class="header inicio">
            <div class="barra">
            <a href="/" ><img src={Wildlife} alt="Wildlife" /></a>

                

                <ul class="menu" data-animation="diagonal">
                    <li>
                        <a href="#0">
                            Noticias
                            <span class="border border-top"></span>
                            <span class="border border-right"></span>
                            <span class="border border-bottom"></span>
                            <span class="border border-left"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            Nosotros
                            <span class="border border-top"></span>
                            <span class="border border-right"></span>
                            <span class="border border-bottom"></span>
                            <span class="border border-left"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            Contacto
                            <span class="border border-top"></span>
                            <span class="border border-right"></span>
                            <span class="border border-bottom"></span>
                            <span class="border border-left"></span>
                        </a>
                    </li>
                </ul>
            </div>


            <div class="content-header" >
                <h1>
                    Wildlife Management Mexico
                </h1>

            </div>

        </header>
    )
}


export default Header;