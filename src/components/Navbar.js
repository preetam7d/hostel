import { Component } from "react";
import "./NavbarStyless.css"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom"

class Navbar extends Component{
    state={
        clicked:false
    }
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    handleClick=()=>{
        <Link to="/admin-login" />

    }

    render(){
    return(
        <>       
         <nav className="NavbarItems">
            <h1 className="navbar-logo">Happy Bunk</h1>
            <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                {MenuItems.map((items,index)=>{
                    return(
                        <li key={index}>
                            <Link className=
                            {items.cName} to={items.url}>
                            <i className={items.icon}></i>{items.title}
                            </Link>

                        </li>

                    )

                })}
                <button>Admin Login</button>
                <button>Login</button>
            </ul>
            
         </nav>
        </>

    )}
}
export default Navbar