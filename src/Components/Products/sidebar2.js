import React from "react";
import './sidebar2.css'
import { Link } from "react-router-dom";


function Sidebar() {

    return <>
        <div className="entire2">
            <ul>
                <b><li className="enormico2">ENORMICO </li></b>
                <li className="entire-item2">
                    <Link to="/clients">Clients</Link>
                </li> <br/><br/><br/>

                <li className="entire-item2">
                    <Link to="/product">Products</Link>
                </li> <br/><br/><br/>
                
                <li className="entire-item2">
                    <Link to="/team">Our Team</Link>
                </li> <br/><br/><br/>
                <li className="entire-item2">
                    <Link to="/login">LogOut</Link>
                </li> <br/><br/><br/>
            </ul>
        </div>










  
    
     </>
}


export default Sidebar;