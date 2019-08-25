import React from "react"
import styled from 'styled-components';
const Flexdiv = styled.div`
  
display:flex;
flex-wrap: wrap;
justify-content: space-around;
  
  }
`;

class Navigation extends React.Component {
  render() {
  
    return (
      
        <Flexdiv>
    <div>To jest navigacja</div>
       
      </Flexdiv>
    )
  }
}

export default Navigation
