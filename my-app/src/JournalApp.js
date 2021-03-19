import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Alert} from 'react-bootstrap'

function JournalApp(){
    return(
        <div className='JournalApp'>
            <h1>JournalApp</h1>
            
            <Button>boton</Button>

            <nav class="navbar 
            navbar-expand-sm 
            bg-dark 
            navbar-dark
            justify-content-center">
                
            <ul class="navbar-nav" >
                <li class="nav-item">
                <a class="navbar-brand" href="#">Quienes somos?</a>
                </li>
                <li class="nav-item">
                <a class="navbar-brand" href="#">Productos</a>
                </li>
                <li class="nav-item">
                <a class="navbar-brand" href="#">Fuego</a>
                </li>

                <li class="nav-item">
                <a class="navbar-brand" href="#">Otro Item</a>
                </li>

            </ul>

            </nav>
            
            


            

        </div>
    );

}

export default JournalApp;