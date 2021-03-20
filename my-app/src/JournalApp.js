import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Alert} from 'react-bootstrap'
import Caballo from './img/caballo.png'


function JournalApp(){
    return(
        <div className='JournalApp'>
<header id="main-header">

            <nav class="navbar 
            navbar-expand-md
            bg-dark 
            navbar-dark
            justify-content-left">


<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">

  </div>
     
            </nav>

            </header>




            

            <div >                                 
                <img src ={Caballo} class="mx-auto" ></img>
            </div>

            <div >                                 
                <img src ={Caballo} class="mx-auto" ></img>
            </div>
            <div >                                 
                <img src ={Caballo} class="mx-auto" ></img>
            </div>
            <div >                                 
                <img src ={Caballo} class="mx-auto" ></img>
            </div>
            
            
            

        </div>
    );

}

export default JournalApp;