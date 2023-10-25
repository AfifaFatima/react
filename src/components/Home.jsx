import React from "react"; 
import logo from '../images/logo.png';
import '../components/Home.css'

function Home(){
    return(
        <div className="Home" style={{backgroundColor:'white'}}>
            <img src={logo} className="logo-img" alt="" />
        </div>
    )
};
export default Home;
