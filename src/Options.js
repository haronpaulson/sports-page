import React from "react";
import "./Options.css";
import {FcSportsMode} from "react-icons/fc";
import {Link} from "react-router-dom";

function Options() {
  return (
    <div className="options">
       
        <div className="list">
            
                <ul className="options-list">
                    <li className="icon"><FcSportsMode className="iconn"/></li> 
                    <li className="acad">ACADEMY</li>
                    <li><a href="#">COACHES</a> </li>
                    <li><a href="#">GALLERY</a> </li>
                    <li><a href="#">PLAYERS</a> </li>
                    <li><a href="#">NEWS</a> </li>
                    <li><a href="#">CONTACT</a> </li>
                </ul>
           
        </div>
      
      
    </div>
  )
}

export default Options;
