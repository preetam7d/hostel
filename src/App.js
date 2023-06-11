import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import AdminLogin from "./components/AdminLogin"
import Rooms from "./components/Rooms"

import Contact from "./components/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"

//npm install react-router-dom@5

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/rooms' compoent={Rooms} exact>
            <Rooms />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/admin-login' compoent={AdminLogin} exact>
            <AdminLogin />
          </Route>
          <Route path='/login' compoent={Login} exact>
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App