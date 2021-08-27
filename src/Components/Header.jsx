import react from "react";
import logo from "../images/imagesrps.png"

const Header=()=>{
  return(
    <>
   <div className="header">
     <img src={logo} alt="logo" width="70" height="50"/>
     <h1>Rishabh Keep</h1>
   </div>
    </>
  )
}
export default Header;