import axios from "axios";
import {useEffect, useState} from "react";
var UseEffect =()=>{
    var [text,setText]=useState("Kongu");
    useEffect(()=>{
        console.log(text);
        setText("KEC")
    },[])
    return(
        <section>
            <h1>Use Effect Example</h1>
            <input type="text" placeholder="Enter your text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>Text typed is {text}</h2>
        </section>
    );
    
};
export default UseEffect;