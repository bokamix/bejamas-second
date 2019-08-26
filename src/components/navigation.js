import React from "react"
import {  Link } from "gatsby"
import styled from 'styled-components'
import LogoNav from '../assets/logo.png'
import SaerchIcon from '../assets/saerch.png'
const MenuWrapper = styled.div`  
display:flex;
flex-wrap: nowrap;
justify-content: flex-start;  
align-items: center;
width: 1140px;
height:81px;
margin: 0 auto;
margin-bottom: 164px;
box-shadow: 0 -8px 0 rgba(255, 255, 255, 0.2), inset 1px 1px 0 rgba(201, 202, 202, 0.75);
  border-radius: 3px;
  background-color: #384653;
  background-image: linear-gradient(to top, #fcfcfc 0%, #ffffff 100%);

  }
`;
const NavWrapper = styled.ul`  
display:flex; 
align-items:center;
list-style-type: none;
padding-inline-start: 0;
  }
`;
const NavItem = styled.li` 
margin-right:46px;
a{
text-decoration: none;
display:block;
color: #333333;
font-family: 'Raleway', sans-serif;
font-size: 13px;
font-weight: 700;
line-height: 22px;
text-transform: uppercase;

}
a:hover{
  text-decoration: none;
display:block;
color: #333333;
font-family: 'Raleway', sans-serif;
font-size: 13px;
font-weight: 700;
line-height: 22px;
text-transform: uppercase;
  
}

a:active{
  text-decoration: none;
display:block;
color: #333333;
font-family: 'Raleway', sans-serif;
font-size: 13px;
font-weight: 700;
line-height: 22px;
text-transform: uppercase;
}
a:visited{
  text-decoration: none;
display:block;
color: #333333;
font-family: 'Raleway', sans-serif;
font-size: 13px;
font-weight: 700;
line-height: 22px;
text-transform: uppercase;
}
  }
`;

const Logo = styled.img` 
margin-right:281px;
margin-left:23px;
  }
`;

class Navigation extends React.Component {
  render() {
  
    return (
      
        <MenuWrapper>
          <div><Logo src={LogoNav} /></div>
    <nav className="menu">
  <NavWrapper>
    <NavItem><Link to="#">Home</Link></NavItem>
    <NavItem><Link to="#">About Us</Link></NavItem>
    <NavItem><Link to="#">Services</Link></NavItem>
    <NavItem><Link to="#">News</Link></NavItem>
    <NavItem><Link to="#">Locations</Link></NavItem>
    <NavItem><Link to="#">Contact</Link></NavItem>
    <img src={SaerchIcon}/>
  </NavWrapper>
</nav>
       
      </MenuWrapper>
    )
  }
}

export default Navigation
