import React from "react"
import styled from 'styled-components';
import Navigation from '../components/navigation'
import {  Link } from "gatsby"

const SectionWrapper = styled.div`  
background:black;
padding-bottom:30px;
width:1923px;
margin: 0 auto;
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
text-shadow: 1px 1px 3px #aaaaaa;
color: #ffffff;
font-family: "Raleway - Extra Bold";
font-size: 72px;
font-weight: 400;
line-height: 60px;
text-transform: uppercase;
margin-bottom:154px;


div{
  width:66px;
  height:0px;
  border: solid 2px #fdc300;
}
`;
const PostBox = styled.div`  
background:gray;
width:360px;
  }
`;
const BoxContent = styled.div`  
background:white;
padding:8px;
min-height:184px;
  }
`;
const BoxImg = styled.div`  
background:Gray;
height:216px;
position: relative;
}
`;
const SectionMainButton = styled.div`  
width: 216px;
height: 49px;
border-radius: 25px;
background-color: #fdc300;
margin:0 auto;
margin-bottom:52px;
margin-top:50px;
text-align:center;
a{
  display:block;
  text-decoration: none;
  width: 89px;
height: 9px;
color: #ffffff;
font-family: Raleway;
font-size: 13px;
font-weight: 700;
line-height: 20px;
text-transform: uppercase;
}
  }
`;
const SectionButton = styled.div`  

width:100px;
position: absolute; 
bottom: 0;
right:0;
background:white;
text-align:center;
    a{
      display:block;
      text-decoration: none;
    }
    span{
      background:yellow;
    }

  }
`;

const PostSubtitle = styled.div` 
width: 303px;
height: 70px;
color: #777777;
font-family: "Open Sans";
font-size: 13px;
font-weight: 400;
line-height: 20px;
  div{
    width:15px;
    height:0px;
    margin-bottom: -20px;
    border: solid 1px yellow;
  }
  }
`;



class SectionOne extends React.Component {
  render() {
  
    return (
      <SectionWrapper>
        <ContentWrapper>
      <Navigation />

      <SectionTitle><div />Section One Title</SectionTitle>
        <PostWrapper>
        
        {this.props.things.map(({ node }) => {
          let title = node.title 
          return (
            <PostBox key={node.title}>
                <BoxImg>
                <SectionButton><Link to="#">View Details<span> > </span></Link></SectionButton>
                </BoxImg>
                <BoxContent><h3>
                {title}
                </h3>    
                <PostSubtitle><div /><p>{node.subtitle}</p></PostSubtitle>
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
