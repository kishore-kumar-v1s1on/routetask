import React, { useState } from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

    
  return (
    <ul className="navbar-menu">
    <Link className={`${menu === "home" ? "active" : ""}`} onClick={() => setMenu("home")} to="/" >Home</Link>    
   
    <Link className={`${menu === "blockchain" ? "active" : ""}`} onClick={() => setMenu("blockchain")} to="/blockchain" >Blockchain</Link>
    <Link className={`${menu === "cloud" ? "active" : ""}`} onClick={() => setMenu("cloud")} to="/cloud" >Cloud Computing</Link>
    <Link className={`${menu === "cyber" ? "active" : ""}`} onClick={() => setMenu("cyber")} to="/cyber" >Cyber Security</Link>
    <Link className={`${menu === "datasci" ? "active" : ""}`} onClick={() => setMenu("datasci")} to="/datascience" >Data Science</Link>
    <Link className={`${menu === "aiml" ? "active" : ""}`} onClick={() => setMenu("aiml")} to="/aiml" >Devops</Link>
    </ul>
    
  )
}

export default Navbar



 