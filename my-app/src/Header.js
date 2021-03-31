import Wildlife from './img/Wildlife.png';
function Header(){
    return (
    <header class="header inicio">
        <div class="barra">
            <div>
                <img src={Wildlife} alt="Wildlife"/>
            </div>
            <ul class="menu" data-animation="diagonal">
                <li>
                    <a href="#0">
                    Inicio
                    <span class="border border-top"></span>
                    <span class="border border-right"></span>
                    <span class="border border-bottom"></span>
                    <span class="border border-left"></span>
                    </a>
                </li>
                <li>
                    <a href="#0">
                    Quienes Somos
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

        <div class="titulo">
            <h1>Wildlife</h1>
        </div>

    </header>
    )
  }


  export default Header;