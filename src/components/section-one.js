import React from "react"
import styled from 'styled-components';

import {  Link } from "gatsby"

const SectionWrapper = styled.div`  
width: 1923px;


margin:0 auto;
  }
`;
const ContentWrapper = styled.div`  
width:1140px;
margin-left:393px;
  }
`;
const PostWrapper = styled.div`  
 display:flex;
 flex-wrap: wrap;
 justify-content: space-between;
 &:first-child{
   background:red;
 }
  }
`;
const SectionTitle = styled.h2`  
width: 504px;
height: 172px;
text-shadow: 1px 1px 3px #aaaaaa;
color: #ffffff;
font-family: 'Raleway', sans-serif;
font-size: 72px;
font-weight: 800;
line-height: 60px;
text-transform: uppercase;
margin-bottom:154px;

div{
  width:62px;
  height:0px;
  border: solid 2px #fdc300;
  margin-bottom:20px;
}
`;
const PostBox = styled.div`  
background:gray;
width:360px;
  }
`;
const BoxContent = styled.div`  
background:white;
padding-left:28px;
height:184px;

  }
`;
const BoxImg = styled.div`  
background:Gray;
height:216px;
position: relative;
}
`;
const SectionMainButton = styled.div`  
  width:216px;
  border-radius: 25px;
  background-color: #fdc300;
  margin:0 auto;
  margin-bottom:52px;
  margin-top:50px;
text-align:center;
a{
  display:block;
  text-decoration: none;
  padding-top:18px;
  padding-left:63px;
  padding-right:64px;
  padding-bottom:16px; 
  color: #ffffff;
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
  font-weight: 400;
  
  text-transform: uppercase;
}
  }
`;
const SectionButton = styled.div`  

width: 165px;
background-color: #1b2936;
position: absolute; 
bottom: 0;
right:0;
text-align:center;
    a{
      padding-top:7px;
      padding-left:30px;
      padding-bottom:6px;      
      display:block;
      text-decoration: none;
      color: #ffffff;
      font-family: 'Raleway', sans-serif;
      font-size: 13px;
      font-weight: 400;
      line-height: 20px;
      text-transform: uppercase;
      
    }
    span{
     
      margin-left:30px;
      background-color: #2f3840;
      padding:13px 11px 11px 13px;
      color: #ffffff;
      font-size: 9px;
      font-weight: 400;
      line-height: 20px;
    }

  }
`;

const PostSubtitle = styled.div` 
width: 303px;
height: 70px;
color: #777777;
font-family: 'Open Sans', sans-serif;
font-size: 13px;
font-weight: 400;
line-height: 20px;
  
  }
`;
const PostTitle = styled.div` 
color: #333333;
font-family: 'Raleway', sans-serif;
font-size: 18px;
font-weight: 400;
text-transform: uppercase;
padding-top:32px;
div{
  margin-bottom: 9px;
  width:27px;
  height:0px;  
  border: solid 1.5px #fdc300;

} 
  
  }
`;


class SectionOne extends React.Component {
  render() {
  
    return (
      <SectionWrapper>
        <ContentWrapper>
     

      <SectionTitle><div />Strongest Distribution Network</SectionTitle>
        <PostWrapper>
        
        {this.props.things.map(({ node }) => {
          let title = node.title 
          return (
            <PostBox key={node.title}>
                <BoxImg>
                <SectionButton><Link to="#">READ MORE<span> > </span></Link></SectionButton>
                </BoxImg>
                <BoxContent>
                <PostTitle>
                  <div /><h3>
                {title}
                </h3>  </PostTitle> 
              
                <PostSubtitle><p>{node.subtitle}</p></PostSubtitle>
                </BoxContent>
          </PostBox>
          )
        })}
       
      </PostWrapper>
      <SectionMainButton><Link to="#">View Details</Link></SectionMainButton>
      </ContentWrapper>
      </SectionWrapper>
    )
  }
}

export default SectionOne
