import React from "react";
import './sidebar.css'
import { Link } from "react-router-dom";


function Sidebar() {

    return <>
        <div className="entire">
            <ul>
                <b><li className="enormico">ENORMICO </li></b>
                <li className="entire-item">
                    <Link to="/clients">Clients</Link>
                </li> <br/><br/><br/>

                <li className="entire-item">
                    <Link to="/product">Products</Link>
                </li> <br/><br/><br/>
                
                <li className="entire-item">
                    <Link to="/team">Our Team</Link>
                </li> <br/><br/><br/>
                <li className="entire-item">
                    <Link to="/login">LogOut</Link>
                </li> <br/><br/><br/>
            </ul>
        </div>










  
    
     </>
}


export default Sidebar;