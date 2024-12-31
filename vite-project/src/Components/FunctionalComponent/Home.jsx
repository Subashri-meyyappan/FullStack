import React from 'react';
import '../../assets/css/NavBar.css'
var NavBar =()=>{
    var styling =
    {
        fontSize:"30px",
        textDecortion:"underline",
        color:"blue"
    };
    return ( <header>
        <h1 style={styling}>This is Navigation Bar</h1>
        <h2 id="idSEg">Testing Styling</h2>
        
        <p class="box-model">hello</p>
    </header>
    );
    
}
export default NavBar