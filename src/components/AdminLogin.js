import React from "react";

import Hero from "../pages/Hero"
import AboutImg from "../assests/img2.jpg"
const AdminLogin=()=>{

    return (
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="ABOUT"
        btnClass="hide"
        />
    )
}
export default AdminLogin