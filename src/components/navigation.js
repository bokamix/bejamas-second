import React from "react"
import {  Link } from "gatsby"
import styled from 'styled-components';
const MenuWrapper = styled.div`  
display:flex;
flex-wrap: nowrap;
justify-content: space-between;  
align-items: center;
background:white;
  }
`;
const NavWrapper = styled.ul`  
display:flex; 
list-style-type: none;
padding-inline-start: 0;
  }
`;
const NavItem = styled.li` 
padding:10px; 
a{
text-decoration: none;
display:block;
color:black;}
a:hover{
  color:red;
}

a:active{
  color:red;
  text-decoration: none;
}
a:visited{
  color:black;
  text-decoration: none;
}
  }
`;

class Navigation extends React.Component {
  render() {
  
    return (
      
        <MenuWrapper>
          <div>Logo</div>
    <nav className="menu">
  <NavWrapper>
    <NavItem><Link to="#">Home</Link></NavItem>
    <NavItem><Link to="#">Home</Link></NavItem>
    <NavItem><Link to="#">Home</Link></NavItem>
    <NavItem>Ikona</NavItem>
  </NavWrapper>
</nav>
       
      </MenuWrapper>
    )
  }
}

export default Navigation
