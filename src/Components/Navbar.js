import React, { useState } from 'react'
import {
    Link, withRouter
} from "react-router-dom";
import '../style/main.css'
import { FaBars } from "react-icons/fa";

function Navbar() {

  // const [isMenu, setIsMenu] = useState(false)
  // const [isResponsiveclose, setIsResponsiveclose] = useState(false)
  // const toggleClass = () => {
  //     setIsMenu(isMenu === false ? true : false);
  //     setIsResponsiveclose(isResponsiveclose === false ? true : false);
  // };
  // let boxClass = ['menuq1'];
  // if(isMenu) {
  //     boxClass.push(menuq1);
  // }else{
  //     boxClass.push('');
  // }

  function myMenu() {
    var x = document.getElementById('li');
    if (x.className === 'li') {
      x.className += " responsive";
    } else {
      x.className = 'li';
    }
  }

    return (
        <nav>
          <ul>
            {/* <Bars /> */}
            {/* {isResponsiveclose === true ? <> <span className='menubar' style={{ display: 'none' }} onClick={toggleClass}> <FaBars /> </span> </> : 
            <> <span className='menubar' style={{ display: 'none' }} onClick={toggleClass}> X </span> </> } */}
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Nasa'>Nasa</Link>
            </li>
            <li>
              <Link to='/Api'>Api</Link>
            </li>
            <li className='icon' onClick={() => myMenu()}>
              <FaBars className='iconFont' />
            </li>
          </ul>
        </nav>
    )
}

export default Navbar;
