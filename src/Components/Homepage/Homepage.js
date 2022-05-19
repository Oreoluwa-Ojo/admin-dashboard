import React from "react";
import './homepage.css'
import { Link } from "react-router-dom";
import Chart from './business-chart.png';


function Homepage() {
    
    return <>
    <div className="body">
       <h1 className="fund">Get Flexible Loans to Improve your Business</h1>
       <img src={Chart} className="chart" />
       <h1 className="shalaye">WELCOME TO ENORMICO!</h1> 
       <Link to="/login"><center><button className="btn">Login</button></center></Link>
    </div>
    </>
}


export default Homepage;