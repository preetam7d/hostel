import React from "react";
import Hero from "../pages/Hero"
import Footer from "../footer/Footer";



const Home=()=>{
    return (
        <>
        
        <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Affordable and Efficient"
        text="Paying GUEST says.."
        text2="To know us more goto    "
        buttonText="ABOUT"
        url="/about"
        btnClass="show"
        />
        <Footer/>
    
        </>
    )
}
export default Home